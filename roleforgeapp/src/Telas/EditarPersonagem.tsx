import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { Card, Title, Button, TextInput, Paragraph } from "react-native-paper";
import styles from "../components/estilo";
import { useUser } from "../components/usuario";
import axios from "axios";


const EditarPersonagem = () => {

    const { user, setUser } = useUser();
    const [campos, setCampos] = useState([]);
    const [camposkey, setCamposkey] = useState([]);

    const [atributos, setAtributos] = useState([]);
    const [atributoskey, setAtributoskey] = useState([]);

    useEffect(() => {
        trasFicha();
    }, []);

    async function trasFicha() {

        let vari:Array = []

        const response = await axios.get('https://roleforge-api.onrender.com/characters/' + user?.campanha);

        vari = Object.values(response.data['player_character_sheet']['fields'])

        setCampos(vari)

        vari = Object.values(response.data['player_character_sheet']['attributes'])

        setAtributos(vari)

        vari = response.data['campaign']['character_sheet']['fields']

        setCamposkey(vari)

        vari = response.data['campaign']['character_sheet']['attributes']

        setAtributoskey(vari)

    }

    async function alterarPersonagem() {

        let camp = {};
        let atri = {};

        for (let i = 0; i < campos.length; i++){

            camp[camposkey[i]] = campos[i]

        }

        for (let i = 0; i < atributos.length; i++){

            atri[atributoskey[i]] = atributos[i]

        }


        const dados = {"player_character_sheet": {"fields": camp, "attributes": atri}}

        const response = await axios.put('https://roleforge-api.onrender.com/characters/'+ user?.campanha, dados)

        Alert.alert("SUCESSO","Personagem alterado com sucesso")

        console.log(response)
    }


    return (

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texTitulo}>Seu Personagem</Text>

                <View style={styles.cardFicha}>

                    <Card style={styles.cardFichaInter}>
                        <Card.Content>

                            <Title style={styles.titleCard}>CAMPOS</Title>

                            {camposkey.map((camkey, index) => (
                                <View key={index}>
                                    <Paragraph style={styles.subTitleCard}>{camkey}</Paragraph>
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
                            ))}

                            <Title style={styles.titleCard}>ATRIBUTOS</Title>

                            {atributoskey.map((atrikey, index) => (
                                <View key={index}>
                                    <Paragraph style={styles.subTitleCard}>{atrikey}</Paragraph>
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
                            ))}

                        </Card.Content>
                    </Card>

                    <Button style={styles.buttonCardG} mode="contained" onPress={() => alterarPersonagem()}>
                        SALVAR ALTERAÇÕES
                    </Button>

                </View>

            </View>

        </ScrollView>

    );
}

export default EditarPersonagem;