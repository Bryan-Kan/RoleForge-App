import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../components/estilo";
import { TouchableOpacity } from "react-native-gesture-handler";

const Mestre = ({navigation}) => {
    return(
        <View style={styles.containerCentro}>

            <Image 
                source={require('../assets/Mestre.jpg')}
                style = {styles.logo}
            />

            <Text style={styles.texTitulo}>Gerencie suas Campanhas</Text>

            <TouchableOpacity
                style = {styles.botao}
                onPress={()=>{navigation.navigate('Criar Campanha')}}
            >
                <Text style = {styles.botaoText}>CRIAR CAMPANHA</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {styles.botao}
                onPress={()=>{navigation.navigate('Suas Campanhas')}}
            >
                <Text style = {styles.botaoText}>GERENCIE SUAS CAMPANHAS</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Mestre;