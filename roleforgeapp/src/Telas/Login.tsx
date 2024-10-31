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
          setEmail(usuario.data["email"])
          setUser({ id: usuario.data["id"], nome: usuario.data["name"], email: usuario.data["email"], campanha: "" });
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

                let errorMessage;

                if (err.code === 'auth/invalid-credential') {
                    errorMessage = "As credenciais fornecidas estão incorretas ou malformadas.";
                } else if (err.code === 'auth/invalid-email') {
                    errorMessage = "O endereço de e-mail está mal formatado.";
                } else {
                    errorMessage = "Ocorreu um erro desconhecido.";
                }

                console.log(err)
                Alert.alert("Erro",  errorMessage)

                setEmail("");
                setPassword("");
            })

        }else{

            Alert.alert("Roleforge", "É necessario preencher os campos")

        }

    }

    return(
        <View style ={styles.containerCentro_login}>
            <Image 
                source={require('../assets/Mestre.jpg')}
                style = {styles.logo_login}
            />

            <Text style={styles.texTitulo_login}>RoleForge</Text>

            <TextInput 
                value={email}
                onChangeText={texto => setEmail(texto)}
                style={styles.input_login}
                placeholder="Digite seu E-mail"
                placeholderTextColor="#FFFFFF"
            />

            <TextInput
                value={password}
                onChangeText={texto => setPassword(texto)}
                style={styles.input_login} 
                secureTextEntry={true}
                placeholder="Digite sua senha"
                placeholderTextColor="#FFFFFF"
            />

            <TouchableOpacity
                style = {styles.botao_login}
                onPress={()=>{singUp()}}
            >
                <Text style = {styles.botaoText_login}>Login</Text>
            </TouchableOpacity>

            {/* <Text 
            onPress={() => {navigation.navigate("Cadastro")}}
            style= {styles.texLink}>
                Esqueci minha senha
            </Text> */}

            <Text 
            onPress={() => {navigation.navigate("Cadastro")}}
            style= {styles.texLink_login}>
                Faça o Cadastro
            </Text>

        </View>
    )

}

export default Login;