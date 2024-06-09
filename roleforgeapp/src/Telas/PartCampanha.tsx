import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
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

        const campanha = await axios.get("https://roleforge-api.onrender.com/campaigns/player/" + user?.id);

        setDados(campanha.data)
        
    }

    function entrar (idcamp:string) {

        // const registro = user;
        // setUser({id: registro?.id, nome: registro?.nome, email: registro?.email,campanha: idcamp})
        // navigation.navigate('Campanha Mestre')

        console.log("Entrar: " + idcamp)

    }


    return(

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texTitulo}>Campanhas que Participa</Text>

                {dados.map((item, index) => (

                    <View style={styles.card} key={index}>

                        <Card>
                            <Card.Content>
                            <Title style={styles.titleCard}>{item.name}</Title>
                            <Paragraph style={styles.descricaoCard}>{item.description}</Paragraph>
                            </Card.Content>
                        </Card>

                        <View style={styles.buttonContainerCard}>

                            <Button style={styles.buttonCard} mode="contained" onPress={() => entrar(item.id)}>
                                ENTRAR
                            </Button>
                            <Button style={styles.buttonCard} mode="contained" onPress={() => console.log(item.id)}>
                                ABANDONAR
                            </Button>

                        </View>

                    </View>

                ))}


            </View>
            
        </ScrollView>

        
    );
}

export default PartCampanha;