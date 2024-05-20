import React, {useState} from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, Title, Paragraph, Button, TextInput } from "react-native-paper";
import styles from "../components/estilo";


const CriaCampanha = () => {

    const [nomeCampanha, setNomeCampanha] = useState('');
    const [campos, setCampos] = useState('');
    const [atributos, setAtributos] = useState('');

    const salvarFicha = () => {
        // Aqui você pode fazer o que quiser com as informações coletadas, como enviá-las para outra página, armazená-las em um banco de dados, etc.
        console.log('Nome da Campanha:', nomeCampanha);
        console.log('Campos:', campos);
        console.log('Atributos:', atributos);
    };

    const descricaoFicha = "DESCRIÇÃO: \n *CAMPOS: são areas onde o jogador pode por o nome do personagem, descrição da aparencia, classe, inventario e o que você achar necsessario. \n *ATRIBUTOS: são campos numericos geralmente força, inteligencia, carisma ou o que você quiser colocar.";

    return(

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texLink}>Crie sua Campanha</Text>
                
                <View style={styles.cardFicha}>

                    <Card style={styles.cardFichaInter}>
                        <Card.Content>
                        <Title style={styles.titleCard}>Nome da Campanha</Title>

                        <TextInput style={styles.fichaInput} value={nomeCampanha} onChangeText={setNomeCampanha} />

                        <Title style={styles.titleCard}>Ficha da Campanha</Title>
                        <Paragraph style={styles.descricaoCard}>{descricaoFicha}</Paragraph>

                        <Title style={styles.subTitleCard}>CAMPOS</Title>

                        <TextInput style={styles.fichaInput} value={campos} onChangeText={setCampos} />

                        <Title style={styles.subTitleCard}>ATRIBUTOS</Title>
                        
                        <TextInput style={styles.fichaInput} value={atributos} onChangeText={setAtributos} />
                        </Card.Content>
                    </Card>

                    <Button style={styles.buttonCardG} mode="contained" onPress={salvarFicha}>
                        Salvar
                    </Button>

                </View>

            </View>

        </ScrollView>

    );
}

export default CriaCampanha;