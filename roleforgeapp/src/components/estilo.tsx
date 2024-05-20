import { StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "#4682B4",
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#4682B4',
    },

    containerCentro:{
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

    textoIcon: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    //BOTÃO

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
    },

    texLink: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    Contebotao: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3eccf5',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },

    //CARD

    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 8,
        width: "90%",
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 4,
    },

    cardFicha: {
        backgroundColor: '#FFDEAD',
        borderRadius: 0,
        padding: 16,
        margin: 8,
        width: "90%",
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        elevation: 4,
    },

    cardFichaInter: {
        backgroundColor: '#FFDEAD',
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 5,
    },

    fichaInput: {
        backgroundColor: "#BDB76B",
        borderRadius: 10,
        fontSize: 18,
        height: 40 ,
        fontWeight: 'bold',
        borderColor: "black",
        borderBottomWidth: 3,
        marginBottom: 5,
        marginTop: 5,
    },
    
    titleCard: {
        backgroundColor: "#A9A9A9",
        borderRadius: 5,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 8,
    },

    subTitleCard: {
        backgroundColor: "#A9A9A9",
        borderRadius: 20,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: "center",
    },

    descricaoCard:{
        minHeight: 50,
        backgroundColor: "#A9A9A9",
        borderRadius: 0,
        fontSize: 15,
        marginBottom: 8,
    },

    buttonCard: {
        width: '45%',
        borderRadius: 5,
        backgroundColor: "#4169E1",
        marginTop: 8,
    },

    buttonCardG: {
        borderRadius: 5,
        backgroundColor: "#4169E1",
        marginHorizontal: 20,
        marginTop: 8,
    },

    buttonContainerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 20,
    },

    //LARGURAS EM PORCENTAGEM

    wid_10: {
        width: '10%'        
    },

    wid_20: {
        width: '20%'        
    },

    wid_30: {
        width: '30%'        
    },
    
    wid_40: {
        width: '40%'        
    },

    wid_45: {
        width: '40%'        
    },
})

export default styles;