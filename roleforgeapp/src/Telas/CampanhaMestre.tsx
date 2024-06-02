import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useUser } from "../components/usuario";

const CampanhaMestre = () => {

    const { user, setUser } = useUser();
    const [inf, setInf] = useState();

    useEffect(() => {
        minhaCampanha();
    }, []);
    
    async function minhaCampanha() {
      try {
        const response = await axios.get(
          "https://roleforge-api.onrender.com/campaigns/" + user?.campanha
        );
        setInf(response.data)
        console.log(inf);
      } catch (error) {
        console.error("Erro ao fazer a solicitação:", error);
      }
    }

    return(

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texTitulo}>Funções do Mestre</Text>

                <View style={styles.card}>

                    <Card>
                        <Card.Content>
                        <Title style={styles.titleCard}>Titulo</Title>
                        <Paragraph style={styles.descricaoCard}>Descrição</Paragraph>
                        </Card.Content>
                    </Card>

                    <Button style={styles.buttonCardG} mode="contained" onPress={() => console.log(user?.campanha)}>
                        PARTICIPAR
                    </Button>

                </View>

            </View>

        </ScrollView>
        

    );
}

export default CampanhaMestre;