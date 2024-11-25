import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useUser } from "../components/usuario";

const AcheCampanha = () => {

    const { user, setUser } = useUser();
    const [dados, setDados] = useState([])

    useEffect(() => {
        dadoCampanha();
    }, []);

    async function dadoCampanha() {

        try {
            const response = await axios.get("https://roleforge-api.onrender.com/campaigns/");

            setDados(response.data)
        } catch (error) {
            if (error.response) {
              // Erros de resposta do servidor (códigos 4xx e 5xx)
              // console.error("Erro na resposta do servidor:", error.response.data);
              // console.error("Status:", error.response.status);
              // console.error("Cabeçalhos:", error.response.headers);
        
              if (error.response.status === 404) {
                Alert.alert(
                  "Campanhas não encontradas",
                  "Não encontramos nenhuma campanha."
                );
              } else if (error.response.status === 500) {
                Alert.alert(
                  "Erro no servidor",
                  "Ocorreu um problema no servidor. Tente novamente mais tarde."
                );
              } else {
                Alert.alert(
                  "Erro desconhecido",
                  `Algo deu errado: ${error.response.data?.message || "Erro inesperado."}`
                );
              }
            } else if (error.request) {
              // Nenhuma resposta recebida (problemas de conectividade, por exemplo)
            //   console.error("Nenhuma resposta recebida:", error.request);
              Alert.alert(
                "Erro de conexão",
                "Não foi possível conectar ao servidor. Verifique sua conexão com a internet."
              );
            } else {
              // Erros ao configurar a solicitação
            //   console.error("Erro ao configurar a solicitação:", error.message);
              Alert.alert(
                "Erro",
                `Ocorreu um erro ao preparar a solicitação: ${error.message}`
              );
            }
        }
        
    }

    async function entrarCamp (idCampanha: string){

        let cont:Number = 0;
        let playerId:Array = [];
        let players:Array = [];
        let nome:string = '';

        const campanha = await axios.get("https://roleforge-api.onrender.com/campaigns/" + idCampanha);

        const dadocampanha = campanha.data

        nome = dadocampanha['name']
        players = dadocampanha['players'];

        for (let i = 0; i < players.length; i++) {

            playerId[i] = players[i]['id'];

            if(players[i]['id'] == user?.id){
                cont = 1;
            }

        }

        if(cont == 0){

            playerId.push(user?.id);

            const addplayer = {'players': playerId}

            const response = await axios.put('https://roleforge-api.onrender.com/campaigns/' + idCampanha, addplayer)

            Alert.alert('SUCESSO' , 'Você esta participando da campanha:\n' + nome)

        }else{
            Alert.alert('AVISO', 'Você ja participa da campanha:\n' + nome)
        }

    }

    return(

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texTitulo}>Ache uma Campanha</Text>

                {dados && dados.length > 0 ? (
                    // Renderizar as campanhas se existirem
                    dados.map((item, index) => (

                        <View style={styles.card} key={index}>
    
                            <Card style={styles.card_sub}>
                                <Card.Content>
                                <Title style={styles.titleCard}>{item.name}</Title>
                                <Paragraph style={styles.descricaoCard}>{item.description}</Paragraph>
                                </Card.Content>
                            </Card>
    
                            <Button style={styles.buttonCardG} mode="contained" onPress={() => entrarCamp(item.id)}>
                                PARTICIPAR
                            </Button>
    
                        </View>
    
    
                    ))

                ) : (
                <Text style={styles.titleCard}>
                    Nenhuma Campanha Encontrada
                </Text>
                )}

            </View>

        </ScrollView>
        

    );
}

export default AcheCampanha;