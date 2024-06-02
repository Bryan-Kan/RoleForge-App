import React, { useState, useEffect  } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useUser } from "../components/usuario";

const SuasCampanhas = ({navigation}) => {

  const { user, setUser } = useUser();
  const [campa, setCampa] = useState([]);

  useEffect(() => {
      minhaCampanha();
  }, []); // Chama minhaCampanha() uma vez, após o componente ser montado
  
  async function minhaCampanha() {
    try {
      const response = await axios.get(
        "https://roleforge-api.onrender.com/campaigns/master/" + user?.id
      );
      setCampa(response.data);
    } catch (error) {
      console.error("Erro ao fazer a solicitação:", error);
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

        {campa.map((item, index) => (
          <View style={styles.card} key={index}>

            <Card>
              <Card.Content>
                <Title style={styles.titleCard}>{item.name}</Title>
                <Paragraph style={styles.descricaoCard}>{item.description}</Paragraph>
              </Card.Content>
            </Card>

            <View style={styles.buttonContainerCard}>
              <Button style={styles.buttonCard} mode="contained" onPress={() => irCampanha(item.id)}>
                CAMPANHA
              </Button>
              <Button style={styles.buttonCard} mode="contained" onPress={() => deletar(item.id, item.name)}>
                APAGAR
              </Button>
            </View>

          </View>
        ))}

      </View>

    </ScrollView>
        
  );
}

export default SuasCampanhas;