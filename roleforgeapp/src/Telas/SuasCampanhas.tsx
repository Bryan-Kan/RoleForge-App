import React from "react";
import { View, Text } from "react-native";
import styles from "../components/estilo";
import { Button, Card, Paragraph, Title } from "react-native-paper";

const SuasCampanhas = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.texLink}>Veja suas Campanha</Text>

            <View style={styles.card}>

                <Card>
                    <Card.Content>
                    <Title style={styles.titleCard}>Título da Campanha</Title>
                    <Paragraph style={styles.descricaoCard}>Descrição da Campanha.</Paragraph>
                    </Card.Content>
                </Card>

                <View style={styles.buttonContainerCard}>

                    <Button style={styles.buttonCard} mode="contained" onPress={() => console.log('Pressed')}>
                        EDITAR
                    </Button>
                    <Button style={styles.buttonCard} mode="contained" onPress={() => console.log('Pressed')}>
                        APAGAR
                    </Button>

                </View>

            </View>

            
        </View>
    );
}

export default SuasCampanhas;