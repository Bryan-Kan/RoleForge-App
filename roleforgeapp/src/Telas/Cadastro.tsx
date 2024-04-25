import React, {Component} from "react";
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth'

export default class Cadastro extends Component{

    cadastro = () => {

        auth().createUserWithEmailAndPassword("teste@gmail.com","Password").then(()=>{
            Alert.alert("RoleForge", "Usuario Criado")
        })
        .catch((err)=>{
            console.log(err)
        })
 
    }



    render(){
        return(
            <View style ={styles.container}>
                <Image 
                    source={require('../assets/Mestre.jpg')}
                    style = {styles.logo}
                />

                <TextInput 
                    style={styles.input}
                    placeholder="Digite seu E-mail"
                />

                <TextInput
                    style={styles.input} 
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                />

                <TouchableOpacity
                    style = {styles.botao}
                    onPress={()=>{this.cadastro()}}
                >
                    <Text style = {styles.botaoText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4682B4',
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
    },
    botao: {
        width:300,
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    }
})