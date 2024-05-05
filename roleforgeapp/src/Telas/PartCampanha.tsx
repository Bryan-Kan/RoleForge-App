import React from "react";
import { View, Text } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";

const PartCampanha = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.texLink}>Campanhas que Participa</Text>

            <View style={styles.card}>

                <Card>
                    <Card.Content>
                    <Title style={styles.titleCard}>Título da Campanha</Title>
                    <Paragraph style={styles.descricaoCard}>Descrição da Campanha.</Paragraph>
                    </Card.Content>
                </Card>

                <View style={styles.buttonContainerCard}>

                    <Button style={styles.buttonCard} mode="contained" onPress={() => console.log('Pressed')}>
                        ENTRAR
                    </Button>
                    <Button style={styles.buttonCard} mode="contained" onPress={() => console.log('Pressed')}>
                        ABANDONAR
                    </Button>

                </View>

            </View>

        </View>
    );
}

export default PartCampanha;