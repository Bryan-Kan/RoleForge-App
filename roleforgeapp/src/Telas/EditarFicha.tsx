import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { Card, Title, Paragraph, Button, TextInput } from "react-native-paper";
import styles from "../components/estilo";
import { useUser } from "../components/usuario";
import axios from "axios";


const EditarFicha = () => {

    const { user, setUser } = useUser();
    const [nomeCampanha, setNomeCampanha] = useState(null);
    const [descricaoCampanha, setDescricaoCampanha] = useState(null);
    const [campos, setCampos] = useState<string[]>([]);
    const [atributos, setAtributos] = useState<string[]>([]);

    useEffect(() => {
        ficha();
    }, []);

    async function ficha() {
        const response = await axios.get("https://roleforge-api.onrender.com/campaigns/" + user?.campanha);

        setNomeCampanha(response.data["name"]);
        setDescricaoCampanha(response.data["description"]);
        setCampos(response.data["character_sheet"]["fields"]);
        setAtributos(response.data["character_sheet"]["attributes"]);
        
    }

    async function editar () {

        const criCampanha = {name: nomeCampanha, description: descricaoCampanha, character_sheet: {fields: campos, attributes: atributos}};

        const response = await axios.put("https://roleforge-api.onrender.com/campaigns/" + user?.campanha, criCampanha)

        Alert.alert("Editado com Sucesso")

    };

    // ADIÇÃO E REMOÇÃO DE CAMPOS/ATRIBUTOS

    const adicionarCampo = () => {
      setCampos([...campos, '']);
    };
    
    const removerCampo = (index: number) => {
      const newCampos = [...campos];
      newCampos.splice(index, 1);
      setCampos(newCampos);
    };
    
    const adicionarAtributo = () => {
      setAtributos([...atributos, '']);
    };
    
    const removerAtributo = (index: number) => {
      const newAtributos = [...atributos];
      newAtributos.splice(index, 1);
      setAtributos(newAtributos);
    };

    // FIM ADIÇÃO E REMOÇÃO DE CAMPOS/ATRIBUTOS
    

    const descricaoFicha = "DESCRIÇÃO: \n *CAMPOS: são areas onde o jogador pode por o nome do personagem, descrição da aparencia, classe, inventario e o que você achar necsessario. \n *ATRIBUTOS: são campos numericos geralmente força, inteligencia, carisma ou o que você quiser colocar.";

    return(

        <ScrollView style={styles.scrollView}>

            {nomeCampanha && (

                <View style={styles.container}>
                    <Text style={styles.texTitulo}>Edite sua Ficha</Text>

                    <View style={styles.cardFicha}>

                        <Card style={styles.cardFichaInter}>
                            <Card.Content>

                                <Title style={styles.titleCard}>Nome da Campanha</Title>

                                <TextInput style={styles.fichaInput} value={nomeCampanha} onChangeText={setNomeCampanha} />

                                <Title style={styles.titleCard}>Descrição da Campanha</Title>

                                <TextInput style={styles.fichaInput} value={descricaoCampanha} onChangeText={setDescricaoCampanha} />

                                <Title style={styles.titleCard}>Ficha da Campanha</Title>
                                <Paragraph style={styles.descricaoCard}>{descricaoFicha}</Paragraph>

                                <Title style={styles.subTitleCard}>CAMPOS</Title>

                                {campos.map((campo, index) => (
                                    <View key={index}>
                                        <TextInput
                                            style={[styles.fichaInput]}
                                            value={campo}
                                            onChangeText={(text) => {
                                                const newCampos = [...campos];
                                                newCampos[index] = text;
                                                setCampos(newCampos);
                                            }}
                                        />
                                        <Button onPress={() => removerCampo(index)}>
                                            <Text style={styles.texDelete}>Remover</Text>
                                        </Button>
                                    </View>
                                ))}

                                <Button style={styles.buttonCardG} onPress={adicionarCampo}>
                                    <Text style={styles.buttonText}>Adicionar Campo</Text>
                                </Button>

                                <Title style={styles.subTitleCard}>ATRIBUTOS</Title>

                                {atributos.map((atributo, index) => (
                                    <View key={index}>
                                        <TextInput
                                            style={[styles.fichaInput]}
                                            value={atributo}
                                            onChangeText={(text) => {
                                            const newAtributos = [...atributos];
                                            newAtributos[index] = text;
                                            setAtributos(newAtributos);
                                            }}
                                        />
                                        <Button onPress={() => removerAtributo(index)}>
                                            <Text style={styles.texDelete}>Remover</Text>
                                        </Button>
                                    </View>
                                ))}

                                <Button style={styles.buttonCardG} onPress={adicionarAtributo}>
                                <Text style={styles.buttonText}>Adicionar Atributo</Text>
                                </Button>

                            </Card.Content>
                        </Card>

                        <Button style={styles.buttonCardG} mode="contained" onPress={editar}>
                            EDITAR
                        </Button>

                    </View>

                </View>

            )}

        </ScrollView>

    );
}

export default EditarFicha;