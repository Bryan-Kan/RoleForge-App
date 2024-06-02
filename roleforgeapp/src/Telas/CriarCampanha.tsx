import React, {useState} from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { Card, Title, Paragraph, Button, TextInput } from "react-native-paper";
import styles from "../components/estilo";
import { useUser } from "../components/usuario";


const CriaCampanha = () => {

    const { user, setUser } = useUser();
    const [nomeCampanha, setNomeCampanha] = useState('');
    const [descricaoCampanha, setDescricaoCampanha] = useState('');
    const [campos, setCampos] = useState<string[]>([]);
    const [atributos, setAtributos] = useState<string[]>([]);

    async function salvarFicha () {

        const criCampanha = {name: nomeCampanha, master: user?.id, players: [], description: descricaoCampanha, character_sheet: {fields: campos, attributes: atributos}};

        const response = await fetch('https://roleforge-api.onrender.com/campaigns/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(criCampanha),
        });
        Alert.alert("Criado com Sucesso")

        setNomeCampanha('')
        setDescricaoCampanha('')
        setCampos([])
        setAtributos([])

    };

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
    

    const descricaoFicha = "DESCRIÇÃO: \n *CAMPOS: são areas onde o jogador pode por o nome do personagem, descrição da aparencia, classe, inventario e o que você achar necsessario. \n *ATRIBUTOS: são campos numericos geralmente força, inteligencia, carisma ou o que você quiser colocar.";

    return(

        <ScrollView style={styles.scrollView}>

            <View style={styles.container}>
                <Text style={styles.texTitulo}>Crie sua Campanha</Text>
                
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

                    <Button style={styles.buttonCardG} mode="contained" onPress={salvarFicha}>
                        Salvar
                    </Button>

                </View>

            </View>

        </ScrollView>

    );
}

export default CriaCampanha;