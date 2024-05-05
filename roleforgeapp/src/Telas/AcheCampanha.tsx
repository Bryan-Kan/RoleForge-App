import React from "react";
import { View, Text } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";

const AcheCampanha = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.texLink}>Ache uma Campanha</Text>

            <View style={styles.card}>

                <Card>
                    <Card.Content>
                    <Title style={styles.titleCard}>Título da Campanha</Title>
                    <Paragraph style={styles.descricaoCard}>Descrição da Campanha.</Paragraph>
                    </Card.Content>
                </Card>

                <Button style={styles.buttonCardG} mode="contained" onPress={() => console.log('Pressed')}>
                    PARTICIPAR
                </Button>

            </View>

        </View>
    );
}

export default AcheCampanha;