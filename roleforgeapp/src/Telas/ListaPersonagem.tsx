import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useUser } from "../components/usuario";

const ListaPersonagem = ({navigation}) => {
    
    const { user, setUser } = useUser();
    const [dados, setDados] = useState([]);
    let cont:Array = []

    useEffect(() => {
        Campanha();
    }, []);


    async function Campanha() {

        const campanha = await axios.get("https://roleforge-api.onrender.com/characters/player/" + user?.id);

        setDados(campanha.data)

    }


    return(

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>

                {dados.map((item, index) => (

                    <View style={styles.card}>

                        <Card>
                            <Card.Content>
                            <Title style={styles.titleCard}>{"Pesonagem " + index}</Title>
                            <Title style={styles.titleCard}>{"Campanha: " +item.campaign['name']}</Title>
                            </Card.Content>
                        </Card>

                        <Button style={styles.buttonCardG} mode="contained" onPress={() => console.log("teste")}>
                            ABRIR FICHA
                        </Button>

                    </View>


                ))}


            </View>
            
        </ScrollView>

        
    );
}

export default ListaPersonagem;