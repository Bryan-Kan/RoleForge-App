import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { Card, Title, Button, TextInput, Paragraph } from "react-native-paper";
import styles from "../components/estilo";
import { useUser } from "../components/usuario";
import axios from "axios";


const CriaPersonagem = () => {

    const { user, setUser } = useUser();
    const [playe, setPlaye] = useState<string[]>([]);
    const [campos, setCampos] = useState<string[]>([]);
    const [indcamp, setIndcamp] = useState<string[]>([]);
    const [atributos, setAtributos] = useState<string[]>([]);
    const [indatri, setIndatri] = useState<string[]>([]);

    useEffect(() => {
        trasFicha();
    }, []);

    async function trasFicha() {

        const response = await axios.get('https://roleforge-api.onrender.com/campaigns/' + user?.campanha);

        let cam:Array = []

        let atri:Array = []

        for (let index = 0; index < response.data['character_sheet']['fields'].length; index++) {

            cam += ' '

        }

        for (let index = 0; index < response.data['character_sheet']['attributes'].length; index++) {

            atri += ' '

        }

        setCampos(cam)
        setAtributos(atri)
        setIndcamp(response.data['character_sheet']['fields'])
        setIndatri(response.data['character_sheet']['attributes'])

        setPlaye(response.data['players'])

    }

    async function enviaPersonagem() {

        let cont = 0;
        let camp = {};
        let atri = {};

        for (let index = 0; index < campos.length; index++){

            camp[indcamp[index]] = campos[index]

        }

        for (let index = 0; index < atributos.length; index++){

            atri[indatri[index]] = atributos[index]

        }

        const dados = {"player": user?.id, "campaign": user?.campanha, "player_character_sheet": {"fields": camp, "attributes": atri}}

        const response = await axios.post('https://roleforge-api.onrender.com/characters/', dados)

        for (let index = 0; index < campos.length; index++){

            campos[index] = ' '

        }

        for (let index = 0; index < atributos.length; index++){

            atributos[index] = ' '

        }

        for (let index = 0; index < playe.length; index++){

            if(playe[index] == user?.id){

                cont += 1;

            }

        }

        console.log("cont: " + cont)

        if(cont == 0){

            let arrplay:Array = [];

            arrplay = playe;

            arrplay.push(user?.id);

            const addPlayer = {players: arrplay};

            await axios.put('https://roleforge-api.onrender.com/campaigns/' + user?.campanha, addPlayer)

        }

        Alert.alert("Criado com Sucesso")

        // console.log(dados)
    }


    return (

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texTitulo}>Crie seu Personagem</Text>

                <View style={styles.cardFicha}>

                    <Card style={styles.cardFichaInter}>
                        <Card.Content>

                            <Title style={styles.titleCard}>CAMPOS</Title>

                            {(() => {
                                const campoViews = [];
                                for (let index = 0; index < campos.length; index++) {
                                    campoViews.push(
                                        <View key={index}>
                                            <Paragraph style={styles.subTitleCard}>{indcamp[index]}</Paragraph>
                                            <TextInput
                                                style={[styles.fichaInput]}
                                                multiline={true}
                                                value={campos[index]}
                                                onChangeText={(text) => {
                                                    const newCampos = [...campos];
                                                    newCampos[index] = text;
                                                    setCampos(newCampos);
                                                }}
                                            />
                                        </View>
                                    );
                                }
                                return campoViews;
                            })()}

                            <Title style={styles.titleCard}>ATRIBUTOS</Title>

                            {(() => {
                                const atributoViews = [];
                                for (let index = 0; index < atributos.length; index++) {
                                    atributoViews.push(
                                        <View key={index}>
                                            <Paragraph style={styles.subTitleCard}>{indatri[index]}</Paragraph>
                                            <TextInput
                                                style={[styles.fichaInput]}
                                                multiline={true}
                                                value={atributos[index]}
                                                onChangeText={(text) => {
                                                    const newAtributos = [...atributos];
                                                    newAtributos[index] = text;
                                                    setAtributos(newAtributos);
                                                }}
                                            />
                                        </View>
                                    );
                                }
                                return atributoViews;
                            })()}

                        </Card.Content>
                    </Card>

                    <Button style={styles.buttonCardG} mode="contained" onPress={() => enviaPersonagem()}>
                        Salvar
                    </Button>

                </View>

            </View>

        </ScrollView>

    );
}

export default CriaPersonagem;