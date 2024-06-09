import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useUser } from "../components/usuario";

const AcheCampanha = () => {

    const { user, setUser } = useUser();
    const [dados, setDados] = useState([])

    useEffect(() => {
        dadoCampanha();
    }, []);

    async function dadoCampanha() {

        const response = await axios.get("https://roleforge-api.onrender.com/campaigns/");

        setDados(response.data)
        
    }

    async function entrarCamp (idCampanha: string){

        let cont:Number = 0;
        let playerId:Array = [];
        let players:Array = [];
        let nome:string = '';

        const campanha = await axios.get("https://roleforge-api.onrender.com/campaigns/" + idCampanha);

        const dadocampanha = campanha.data

        nome = dadocampanha['name']
        players = dadocampanha['players'];

        for (let i = 0; i < players.length; i++) {

            playerId[i] = players[i]['id'];

            if(players[i]['id'] == user?.id){
                cont = 1;
            }

        }

        if(cont == 0){

            playerId.push(user?.id);

            const addplayer = {'players': playerId}

            const response = await axios.put('https://roleforge-api.onrender.com/campaigns/' + idCampanha, addplayer)

            Alert.alert('SUCESSO' , 'Você esta participando da campanha:\n' + nome)

        }else{
            Alert.alert('AVISO', 'Você ja participa da campanha:\n' + nome)
        }

    }

    return(

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texTitulo}>Ache uma Campanha</Text>

                {dados.map((item, index) => (

                    <View style={styles.card} key={index}>

                        <Card>
                            <Card.Content>
                            <Title style={styles.titleCard}>{item.name}</Title>
                            <Paragraph style={styles.descricaoCard}>{item.description}</Paragraph>
                            </Card.Content>
                        </Card>

                        <Button style={styles.buttonCardG} mode="contained" onPress={() => entrarCamp(item.id)}>
                            PARTICIPAR
                        </Button>

                    </View>


                ))}

            </View>

        </ScrollView>
        

    );
}

export default AcheCampanha;