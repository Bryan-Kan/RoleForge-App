import React, { useState, useEffect  } from "react";
import { View, Text, ScrollView } from "react-native";
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
        console.log(response.data)
      } catch (error) {
        console.error("Erro ao fazer a solicitação:", error);
      }
    }


    return(
        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texLink}>Veja suas Campanha</Text>

                {campa.map((item, index) => (
                    <View style={styles.card} key={index}>

                        <Card>
                            <Card.Content>
                                <Title style={styles.titleCard}>{item.name}</Title>
                                <Paragraph style={styles.descricaoCard}>{item.description}</Paragraph>
                            </Card.Content>
                        </Card>

                        <View style={styles.buttonContainerCard}>
                            <Button style={styles.buttonCard} mode="contained" onPress={() => {navigation.navigate('Editar Campanha')}}>
                                EDITAR
                            </Button>
                            <Button style={styles.buttonCard} mode="contained" onPress={() => console.log(index)}>
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