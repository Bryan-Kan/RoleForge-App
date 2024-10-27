import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import axios from "axios";
import { useUser } from "../components/usuario";

const ListaPersonagem = ({navigation}) => {
    
    const { user, setUser } = useUser();
    const [dados, setDados] = useState([]);

    useEffect(() => {
        Campanha();
    }, []);


    async function Campanha() {

        const campanha = await axios.get("https://roleforge-api.onrender.com/characters/player/" + user?.id);

        setDados(campanha.data)

    }

    function abrirFicha (idpersonagem:string) {

        const registro = user;
        setUser({id: registro?.id, nome: registro?.nome, email: registro?.email,campanha: idpersonagem})
        navigation.navigate('Ficha do Personagem')

    }

    function editarPersonagem (idpersonagem:string) {

        const registro = user;
        setUser({id: registro?.id, nome: registro?.nome, email: registro?.email,campanha: idpersonagem})
        navigation.navigate('Editar o Personagem')

    }

    async function deletar(idpersonagem:string) {

        const response = await axios.delete("https://roleforge-api.onrender.com/characters/" + idpersonagem);

        Alert.alert("SUCESSO", "Personagem deletado com sucesso")

        Campanha()
        
    }


    return(

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>

                {dados.map((item, index) => (

                    <View style={styles.card} key={index}>

                        <Card style={styles.card_sub}>
                            <Card.Content>
                            <Title style={styles.titleCard}>{"Pesonagem " + index}</Title>
                            <Title style={styles.titleCard}>{"Campanha: " +item.campaign['name']}</Title>
                            </Card.Content>
                        </Card>

                        <Button style={styles.buttonCardG} mode="contained" onPress={() => abrirFicha(item.id)}>
                            ABRIR FICHA
                        </Button>
                        <Button style={styles.buttonCardG} mode="contained" onPress={() => editarPersonagem(item.id)}>
                            EDITAR FICHA
                        </Button>

                        <Button style={styles.buttonCardG} mode="contained" onPress={() => deletar(item.id)}>
                            DELETAR
                        </Button>

                    </View>


                ))}


            </View>
            
        </ScrollView>

        
    );
}

export default ListaPersonagem;