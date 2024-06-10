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

        const campanha = await axios.get("https://roleforge-api.onrender.com/campaigns/player/" + user?.id);

        setDados(campanha.data)
        
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

                {dados.map((item, index) => (

                    <View style={styles.card} key={index}>

                        <Card>
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

                ))}


            </View>
            
        </ScrollView>

        
    );
}

export default PartCampanha;