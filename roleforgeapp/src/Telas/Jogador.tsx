import React from "react";
import { View, Text } from "react-native";
import styles from "../components/estilo";
import { TouchableOpacity } from "react-native-gesture-handler";

const Jogador = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.texLink}>Jogador</Text>

            <TouchableOpacity
                style = {styles.botao}
                onPress={()=>{navigation.navigate('Ache uma Campanha')}}
            >
                <Text style = {styles.botaoText}>PROCURAR CAMPANHAS</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {styles.botao}
                onPress={()=>{navigation.navigate('Campanhas que Participa')}}
            >
                <Text style = {styles.botaoText}>CAMPANHAS QUE PARTICIPA</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Jogador;