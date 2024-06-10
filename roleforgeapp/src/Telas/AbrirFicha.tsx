import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { Card, Title, Button, TextInput, Paragraph } from "react-native-paper";
import styles from "../components/estilo";
import { useUser } from "../components/usuario";
import axios from "axios";


const AbrirFicha = () => {

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

        vari = Object.keys(response.data['player_character_sheet']['fields'])

        setCamposkey(vari)

        vari = Object.keys(response.data['player_character_sheet']['attributes'])

        setAtributoskey(vari)

    }


    return (

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texTitulo}>Seu Personagem</Text>

                <View style={styles.cardFicha}>

                    <Card style={styles.cardFichaInter}>
                        <Card.Content>

                            <Title style={styles.titleCard}>CAMPOS</Title>

                            {campos.map((campo, index) => (
                                <View key={index}>
                                    <Paragraph style={styles.subTitleCard}>{camposkey[index]}</Paragraph>
                                    <Text style={styles.textoCard}>{campo}</Text>
                                </View>
                            ))}

                            <Title style={styles.titleCard}>ATRIBUTOS</Title>

                            {atributos.map((atributo, index) => (
                                <View key={index}>
                                    <Paragraph style={styles.subTitleCard}>{atributoskey[index]}</Paragraph>
                                    <Text style={styles.textoCard}>{atributo}</Text>
                                </View>
                            ))}


                        </Card.Content>
                    </Card>

                </View>

            </View>

        </ScrollView>

    );
}

export default AbrirFicha;