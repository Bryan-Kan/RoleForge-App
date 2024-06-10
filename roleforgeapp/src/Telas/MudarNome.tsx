import React, {useState} from "react";
import { View, Text, Alert } from "react-native";
import { Card, Title, Paragraph, Button, TextInput } from "react-native-paper";
import styles from "../components/estilo";
import { useUser } from "../components/usuario";
import axios from "axios";


const MudarNome = () => {

    const { user, setUser } = useUser();
    const [nome, setNome] = useState('');
    
    async function alterar (){
        
        const dado = {"name": nome}

        const response = await axios.put('https://roleforge-api.onrender.com/users/'+ user?.id, dado)

        Alert.alert("SUCESSO", "Nome alterado para " + nome)

        console.log(response)

        const nomenovo = await axios.get('https://roleforge-api.onrender.com/users/'+ user?.id)

        console.log(nomenovo.data)

        setUser({ id: nomenovo.data["id"], nome: nomenovo.data["name"], email: nomenovo.data["email"], campanha: 'teste' });

    }

    return(

        <View style={styles.containerCentro}>
            <Text style={styles.texTitulo}>Mude seu Nome</Text>
                
            <View style={styles.cardFicha}>

                <Card style={styles.cardFichaInter}>
                    <Card.Content>

                        <Title style={styles.titleCard}>Nome Atual</Title>
                        <Paragraph style={styles.textoCard}>{user?.nome}</Paragraph>
                        <TextInput style={styles.fichaInput} placeholder="Coloque o nome aqui" value={nome} onChangeText={setNome}/>

                    </Card.Content>
                </Card>

                <Button style={styles.buttonCardG} mode="contained" onPress={alterar}>
                    ALTERAR O NOME
                </Button>

            </View>

        </View>

    );
}

export default MudarNome;