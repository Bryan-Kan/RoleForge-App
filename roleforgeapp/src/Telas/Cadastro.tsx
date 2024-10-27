import React, {useState} from "react";
import { Alert, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../App";
import auth from '@react-native-firebase/auth'
import styles from "../components/estilo";

const Cadastro = () => {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation<StackTypes>();

    // Tamanho mínimo 8 caracteres.
    // Uma letra minúscula.
    // Uma letra maiúscula.
    // Um número.
    // Um Caractere especial.

    async function cadastrar () {

        if(password === confirmPassword && password.length >= 8){

            try{

                // FIREBASE
                await auth().createUserWithEmailAndPassword(email,password).then(()=>{
                    Alert.alert("RoleForge", "Usuario Criado \n Faça o Login")
    
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                })

                const criusuario = {name: nome, email: email};

                // console.log(criusuario)

                const response = await fetch('https://roleforge-api.onrender.com/users/', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(criusuario),
                });

                // console.log(response)

                if (response.status === 200) {
                    console.log('Usuário criado com sucesso!');
                } else {
                    console.error('Falha ao criar usuário:', response.statusText);
                }

                navigation.navigate("Login")
            } catch (error) {

                if (error.code === 'auth/email-already-in-use') {

                  Alert.alert('RoleForge \n ERRO', 'O e-mail já está em uso. Por favor, tente fazer login.');

                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");

                } else {

                  Alert.alert('RoleForge \n ERRO', error.nativeErrormessage);

                }

            }

        }else if(password !== confirmPassword && password.length >= 8){

            Alert.alert("RoleForge", "Divergência na senha")

            setPassword("");
            setConfirmPassword("");

        }else{

            Alert.alert("RoleForge", "A senha deve ter 8 caracteres no minimo")

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
                value={nome}
                onChangeText={texto => setNome(texto)}
                style={styles.input_login}
                placeholder="Digite seu Nome"
                placeholderTextColor="#FFFFFF"
            />

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

            <TextInput
                value={confirmPassword}
                onChangeText={texto => setConfirmPassword(texto)}
                style={styles.input_login} 
                secureTextEntry={true}
                placeholder="Confirme a sua senha"
                placeholderTextColor="#FFFFFF"
            />

            <TouchableOpacity
                style = {styles.botao_login}
                onPress={()=>{cadastrar()}}
            >
                <Text style = {styles.botaoText_login}>CADASTRAR</Text>
            </TouchableOpacity>

            {/* <Text 
            onPress={() => {navigation.navigate("Cadastro")}}
            style= {styles.texLink_login}>
                Esqueci minha senha
            </Text> */}

        </View>
    )
}

export default Cadastro;