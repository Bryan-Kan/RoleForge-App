import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../components/estilo";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({navigation}) => {

    return(

        <View style={styles.containerCentro}>

            <Image 
                source={require('../assets/Mestre.jpg')}
                style = {styles.logo}
            />

            <Text style={styles.texTitulo}>SEJA BEM VINDO</Text>

            <TouchableOpacity
                style = {styles.botao}
                onPress={()=>{navigation.navigate('Mestre')}}
            >
                <Text style = {styles.botaoText}>ENTRAR COMO MESTRE</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {styles.botao}
                onPress={()=>{navigation.navigate('Jogador')}}
            >
                <Text style = {styles.botaoText}>ENTRAR COMO JOGADOR</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style = {styles.botao}
                onPress={()=>{navigation.navigate('Mudar o Nome')}}
            >
                <Text style = {styles.botaoText}>MUDAR O NOME</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;