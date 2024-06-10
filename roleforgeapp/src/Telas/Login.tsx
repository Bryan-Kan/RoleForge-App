import React, { useState } from "react";
import { Alert, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth'
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../App";
import styles from "../components/estilo";
import axios from 'axios';
import { useUser } from "../components/usuario";

const Login = () => {
    const { user, setUser } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation<StackTypes>();

    async function infoUser() {
        try {
          const usuario = await axios.get('https://roleforge-api.onrender.com/users/email/'+ email);
          setEmail(usuario.data)
          setUser({ id: usuario.data["id"], nome: usuario.data["name"], email: usuario.data["email"], campanha: 'teste' });
        //   console.log(user)
        //   console.log('Resposta:', usuario.data);
        } catch (error) {
          console.error('Erro ao fazer a solicitação:', error);
        }
    }

    async function singUp () {

        if(email != "" && password != ""){

            await auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                // console.log(res)

                infoUser()

                navigation.navigate("Menu")

                setPassword("");
            })
            .catch(err => {
                console.log(err)
                Alert.alert("Erro", err.nativeErrormessage)

                setEmail("");
                setPassword("");
            })

        }else{

            Alert.alert("Roleforge", "É necessario preencher os campos")

        }

    }

    return(
        <View style ={styles.containerCentro}>
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

            {/* <Text 
            onPress={() => {navigation.navigate("Cadastro")}}
            style= {styles.texLink}>
                Esqueci minha senha
            </Text> */}

            <Text 
            onPress={() => {navigation.navigate("Cadastro")}}
            style= {styles.texLink}>
                Faça o Cadastro
            </Text>

        </View>
    )

}

export default Login;