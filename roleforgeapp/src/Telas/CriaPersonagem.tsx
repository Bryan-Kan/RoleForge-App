import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { Card, Title, Button, TextInput, Paragraph } from "react-native-paper";
import styles from "../components/estilo";
import { useUser } from "../components/usuario";
import axios from "axios";


const CriaPersonagem = () => {

    const { user, setUser } = useUser();
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

        for (let i = 0; i < response.data['character_sheet']['fields'].length; i++) {

            cam += ' '

        }

        for (let i = 0; i < response.data['character_sheet']['attributes'].length; i++) {

            atri += ' '

        }

        setCampos(cam)
        setAtributos(atri)
        setIndcamp(response.data['character_sheet']['fields'])
        setIndatri(response.data['character_sheet']['attributes'])

    }

    async function enviaPersonagem() {

        let camp = {};
        let atri = {};

        for (let i = 0; i < campos.length; i++){

            camp[indcamp[i]] = campos[i]

        }

        for (let i = 0; i < atributos.length; i++){

            atri[indatri[i]] = atributos[i]

        }

        const dados = {"player": user?.id, "campaign": user?.campanha, "player_character_sheet": {"fields": camp, "attributes": atri}}

        const response = await axios.post('https://roleforge-api.onrender.com/characters/', dados)

        for (let i = 0; i < campos.length; i++){

            campos[i] = ' '

        }

        for (let i = 0; i < atributos.length; i++){

            atributos[i] = ' '

        }

        Alert.alert("SUCESSO","Personagem criado com sucesso")

        console.log(dados)
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
                                for (let i = 0; i < campos.length; i++) {
                                    campoViews.push(
                                        <View key={i}>
                                            <Paragraph style={styles.subTitleCard}>{indcamp[i]}</Paragraph>
                                            <TextInput
                                                style={[styles.fichaInput]}
                                                multiline={true}
                                                value={campos[i]}
                                                onChangeText={(text) => {
                                                    const newCampos = [...campos];
                                                    newCampos[i] = text;
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
                                for (let i = 0; i < atributos.length; i++) {
                                    atributoViews.push(
                                        <View key={i}>
                                            <Paragraph style={styles.subTitleCard}>{indatri[i]}</Paragraph>
                                            <TextInput
                                                style={[styles.fichaInput]}
                                                multiline={true}
                                                value={atributos[i]}
                                                onChangeText={(text) => {
                                                    const newAtributos = [...atributos];
                                                    newAtributos[i] = text;
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