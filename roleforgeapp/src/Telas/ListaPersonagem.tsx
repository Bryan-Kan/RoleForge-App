import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useUser } from "../components/usuario";

const ListaPersonagem = ({navigation}) => {
    
    const { user, setUser } = useUser();
    const [dados, setDados] = useState([]);

    useEffect(() => {
        Campanha();
    }, []);


    async function Campanha() {

        try {
            const campanha = await axios.get("https://roleforge-api.onrender.com/characters/player/" + user?.id);

            setDados(campanha.data)
        } catch (error) {
            if (error.response) {
              // Erros de resposta do servidor (códigos 4xx e 5xx)
              // console.error("Erro na resposta do servidor:", error.response.data);
              // console.error("Status:", error.response.status);
              // console.error("Cabeçalhos:", error.response.headers);
        
              if (error.response.status === 404) {
                Alert.alert(
                  "Personagens não encontrados",
                  "Não encontramos nenhum personagem relacionado ao usuario."
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

    function abrirFicha (idpersonagem:string) {

        const registro = user;
        setUser({id: registro?.id, nome: registro?.nome, email: registro?.email,campanha: idpersonagem})
        navigation.navigate('Ficha do Personagem')

    }

    function editarPersonagem (idpersonagem:string) {

        const registro = user;
        setUser({id: registro?.id, nome: registro?.nome, email: registro?.email,campanha: idpersonagem})
        navigation.navigate('Editar o Personagem')

    }

    async function deletar(idpersonagem:string) {

        const response = await axios.delete("https://roleforge-api.onrender.com/characters/" + idpersonagem);

        Alert.alert("SUCESSO", "Personagem deletado com sucesso")

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
                                <Title style={styles.titleCard}>{"Pesonagem " + (index + 1)}</Title>
                                <Title style={styles.titleCard}>{"Campanha: " +item.campaign['name']}</Title>
                                </Card.Content>
                            </Card>
    
                            <Button style={styles.buttonCardG} mode="contained" onPress={() => abrirFicha(item.id)}>
                                ABRIR FICHA
                            </Button>
                            <Button style={styles.buttonCardG} mode="contained" onPress={() => editarPersonagem(item.id)}>
                                EDITAR FICHA
                            </Button>
    
                            <Button style={styles.buttonCardG} mode="contained" onPress={() => deletar(item.id)}>
                                DELETAR
                            </Button>
    
                        </View>
    
    
                    ))

                ) : (
                <Text style={styles.titleCard}>
                    Nenhuma Pesonagem Encontrado
                </Text>
                )}

            </View>
            
        </ScrollView>

        
    );
}

export default ListaPersonagem;