import React, { useState, useCallback  } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useUser } from "../components/usuario";
import { useFocusEffect } from "@react-navigation/native";

const SuasCampanhas = ({navigation}) => {

  const { user, setUser } = useUser();
  const [campa, setCampa] = useState([]);

  useFocusEffect(
    useCallback(() => {
      minhaCampanha();
    }, [])
  );
  
  async function minhaCampanha() {
    try {
      const response = await axios.get(
        `https://roleforge-api.onrender.com/campaigns/master/${user?.id}`
      );
      setCampa(response.data);
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

  async function deletar(idCampanha:string, nome:string) {

    try {
      const response = await axios.delete("https://roleforge-api.onrender.com/campaigns/" + idCampanha);
      console.log(response)
      Alert.alert("AVISO",'Campanha "'+ nome +'" deletada com sucesso')
      minhaCampanha()
    } catch (error) {
      console.error("Erro ao fazer a solicitação:", error);
    }

    console.log(idCampanha)
                
  }

  function irCampanha(idCamp:string){
    const registro = user;
    setUser({id: registro?.id, nome: registro?.nome, email: registro?.email,campanha: idCamp})
    navigation.navigate('Campanha Mestre')
  }


  return(
    <ScrollView style={styles.scrollView}>

      <View style={styles.container}>
        <Text style={styles.texTitulo}>Veja suas Campanhas</Text>

        {campa && campa.length > 0 ? (
          // Renderizar as campanhas se existirem
          campa.map((item, index) => (
            <View style={styles.card} key={index}>
  
              <Card style={styles.card_sub}>
                <Card.Content>
                  <Title style={styles.titleCard}>{item.name}</Title>
                  <Paragraph style={styles.descricaoCard}>{item.description}</Paragraph>
                </Card.Content>
              </Card>
  
              <View style={styles.buttonContainerCard}>
                <Button style={styles.buttonCard} mode="contained" onPress={() => irCampanha(item.id)}>
                  VER
                </Button>
                <Button style={styles.buttonCard} mode="contained" onPress={() => deletar(item.id, item.name)}>
                  APAGAR
                </Button>
              </View>
  
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

export default SuasCampanhas;