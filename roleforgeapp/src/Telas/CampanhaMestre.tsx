import React, { useCallback, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useUser } from "../components/usuario";
import { useFocusEffect } from "@react-navigation/native";

const CampanhaMestre = ({navigation}) => {

    const { user, setUser } = useUser();
    const [inf, setInf] = useState(null);

    useFocusEffect(
      useCallback(() => {
        minhaCampanha();
      }, [])
    );
    
    async function minhaCampanha() {
      try {
        const response = await axios.get(
          "https://roleforge-api.onrender.com/campaigns/" + user?.campanha
        );
        setInf(response.data)
      } catch (error) {
        console.error("Erro ao fazer a solicitação:", error);
      }
    }

    return(

      <ScrollView style={styles.scrollView}>

        {inf &&(

          <View style={styles.container}>
            <Text style={styles.texTitulo}>{inf.name}</Text>

            <View style={styles.card}>

              <Card style={styles.card_sub}>
                <Card.Content>
                <Title style={styles.titleCard}>Descrição</Title>
                <Paragraph style={styles.descricaoCard}>{inf.description}</Paragraph>
                <Title style={styles.titleCard}>Jogadores</Title>
                <Paragraph style={styles.descricaoCard}>{
                inf.players.map((item, index) => (
                  item.name                  
                ))
                }</Paragraph>
                </Card.Content>
              </Card>

              <Button style={styles.buttonCardG} mode="contained" onPress={() => navigation.navigate('Editar Ficha')}>
                EDITAR FICHA
              </Button>

            </View>

          </View>

        )}
      </ScrollView>
        

    );
}

export default CampanhaMestre;