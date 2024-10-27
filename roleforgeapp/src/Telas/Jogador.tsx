import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../components/estilo";
import { TouchableOpacity } from "react-native-gesture-handler";

const Jogador = ({navigation}) => {
    return(
        <View style={styles.containerCentro}>

            <Image 
                source={require('../assets/Mestre.jpg')}
                style = {styles.logo}
            />

            <Text style={styles.texTitulo}>Jogador</Text>

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

            <TouchableOpacity
                style = {styles.botao}
                onPress={()=>{navigation.navigate('Lista de Personagem')}}
            >
                <Text style = {styles.botaoText}>PERSONAGENS</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Jogador;