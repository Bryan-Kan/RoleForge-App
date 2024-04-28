import React, { useState } from "react";
import { Alert, Text, View, Image, TextInput, TouchableOpacity, Button } from "react-native";
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../App";
import styles from "../components/estilo";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation<StackTypes>();

    async function singUp () {

        if(email != "" && password != ""){

            await auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res)
                Alert.alert("Sucesso", "Logado com sucesso")
                navigation.navigate("Home")
            })
            .catch(err => {
                console.log(err)
                Alert.alert("Sucesso", err.nativeErrormessage)
            })

        }else{

            Alert.alert("Roleforge", "É necessario preencher os campos")

        }

    }

    return(
        <View style ={styles.container}>
            <Image 
                source={require('../assets/Mestre.jpg')}
                style = {styles.logo}
            />

            <TextInput 
                value={email}
                onChangeText={texto => setEmail(texto)}
                style={styles.input}
                placeholder="Digite seu E-mail"
            />

            <TextInput
                value={password}
                onChangeText={texto => setPassword(texto)}
                style={styles.input} 
                secureTextEntry={true}
                placeholder="Digite sua senha"
            />

            <TouchableOpacity
                style = {styles.botao}
                onPress={()=>{singUp()}}
            >
                <Text style = {styles.botaoText}>Login</Text>
            </TouchableOpacity>

            <Text 
            onPress={() => {navigation.navigate("Cadastro")}}
            style= {styles.texLink}>
                Esqueci minha senha
            </Text>

            <Text 
            onPress={() => {navigation.navigate("Cadastro")}}
            style= {styles.texLink}>
                Faça o Cadastro
            </Text>

        </View>
    )

}

export default Login;