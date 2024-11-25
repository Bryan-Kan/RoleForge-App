import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useUser } from "../components/usuario";

const PartCampanha = ({navigation}) => {
    
    const { user, setUser } = useUser();
    const [dados, setDados] = useState([]);

    useEffect(() => {
        Campanha();
    }, []);


    async function Campanha() {

        try {
            const campanha = await axios.get("https://roleforge-api.onrender.com/campaigns/player/" + user?.id);

            setDados(campanha.data)
        } catch (error) {
            if (error.response) {
              // Erros de resposta do servidor (códigos 4xx e 5xx)
              // console.error("Erro na resposta do servidor:", error.response.data);
              // console.error("Status:", error.response.status);
              // console.error("Cabeçalhos:", error.response.headers);
        
              if (error.response.status === 404) {
                Alert.alert(
                  "Campanha não encontrada",
                  "Não encontramos uma campanha associada ao usuário."
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
              console.error("Nenhuma resposta recebida:", error.request);
              Alert.alert(
                "Erro de conexão",
                "Não foi possível conectar ao servidor. Verifique sua conexão com a internet."
              );
            } else {
              // Erros ao configurar a solicitação
              console.error("Erro ao configurar a solicitação:", error.message);
              Alert.alert(
                "Erro",
                `Ocorreu um erro ao preparar a solicitação: ${error.message}`
              );
            }
        }
        
    }

    function entrar (idcamp:string) {

        const registro = user;
        setUser({id: registro?.id, nome: registro?.nome, email: registro?.email,campanha: idcamp})
        navigation.navigate('Campanha Jogador')

    }

    async function abandonar (idcamp:string){

        let dado:Array = []
        let aux:array = []

        const response = await axios.get("https://roleforge-api.onrender.com/campaigns/" + idcamp);

        dado = response.data["players"]

        for (let i = 0; i < dado.length; i++) {
            if (dado[i]['id'] != user?.id) {
                aux[i] = dado[i]['id']                
            }
        }

        let players = {"players": aux}

        // if (aux.length == 0) {

        //     players = {"players": [' ']}
            
        // }
        

        // console.log(players)

        const responseupdate = await axios.put("https://roleforge-api.onrender.com/campaigns/" + idcamp, players);

        console.log(responseupdate)

        Alert.alert("SUCESSO", "Você foi removido da campanha")

        Campanha()

    }


    return(

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>

                {}

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

                            <Button style={styles.buttonCardG} mode="contained" onPress={() => entrar(item.id)}>
                                VER CAMPANHA
                            </Button>

                            <Button style={styles.buttonCardG} mode="contained" onPress={() => abandonar(item.id)}>
                                ABANDONAR CAMPANHA
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

export default PartCampanha;