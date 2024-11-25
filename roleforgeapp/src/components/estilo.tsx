import { StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({

    //Drawner

    drawerStyle: {
      backgroundColor: '#F5F5DC', // Fundo claro
      borderRightWidth: 2,
      borderRightColor: '#FFD700', // Borda dourada
    },
    drawerLabelStyle: {
      color: '#FFD700', // Marrom
      fontSize: 18,
      fontFamily: 'Georgia',
    },
    headerStyle_drawner: {
      backgroundColor: '#8B4513', // Marrom
    },
    headerTitleStyle_drawner: {
      color: '#FFD700', // Dourado
      textTransform: 'uppercase',
      fontSize: 24,
      fontFamily: 'Georgia-Bold',
    },

    //Drawner

    //Header

    headerStyle: {
      backgroundColor: '#8B4513', // Marrom
      padding: 10,
    },
    headerTitleStyle: {
      color: '#FFD700', // Dourado
      fontSize: 24,
      fontFamily: 'Georgia-Bold',
    },
    screenContainer: {
      flex: 1,
      backgroundColor: '#F5F5DC', // Fundo claro
      alignItems: 'center',
      justifyContent: 'center',
    },
    screenText: {
      color: '#8B4513', // Marrom
      fontSize: 18,
      fontFamily: 'Georgia',
    },

    //header

    //Cadastro e Login

    containerCentro_login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3B3B3B',
        padding: 20,
    },

    logo_login: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#FFD700',
    },

    texTitulo_login: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 20,
        fontFamily: 'Garamond',
    },

    input_login: {
        height: 50,
        width: '100%',
        borderColor: '#FFD700',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#4B3D33',
        color: '#FFFFFF',
        marginBottom: 15,
        fontSize: 16,
    },

    botao_login: {
        backgroundColor: '#8B4513',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFD700',
    },

    botaoText_login: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Garamond',
    },

    texLink_login: {
        color: '#FFD700',
        marginTop: 10,
        fontFamily: 'Garamond',
        textDecorationLine: 'underline',
    },

    //Cadastro e Login

    //Outras telas

    containerCentro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E2E2E',
        padding: 20,
    },

    texTitulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 40,
        fontFamily: 'Garamond',
        textAlign: 'center',
    },

    botao: {
        backgroundColor: '#8B4513',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#FFD700',
        marginBottom: 15,
    },

    botaoText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Garamond',
    },

    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#FFD700',
    },

    //Outras telas

    //Fichas

    scrollView: {
        backgroundColor: '#2E2E2E', // Fundo escuro
    },

    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cardFicha: {
        width: '100%',
        marginBottom: 20,
    },

    cardFichaInter: {
        backgroundColor: '#4B3D33', // Fundo do card
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#FFD700', // Borda dourada
    },

    titleCard: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFD700',
        fontFamily: 'Garamond',
    },

    subTitleCard: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFD700',
        marginTop: 20,
        fontFamily: 'Garamond',
    },

    fichaInput: {
        height: 50,
        width: '100%',
        borderColor: '#FFD700',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#a5a5a5', // Fundo dos inputs
        color: 'black', // Cor do texto
        marginBottom: 15,
        fontSize: 16,
    },

    buttonCardG: {
        backgroundColor: '#8B4513', // Marrom
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        width: '100%',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Garamond',
    },

    descricaoCard: {
        color: '#FFFFFF', // Cor do texto
        marginBottom: 20,
        fontSize: 16,
    },

    texDelete: {
        color: '#FF4500', // Vermelho para deletar
    },

    //Fichas

    //teste

    //teste

    textoIcon: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },


    //BOTÃO

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
        backgroundColor: '#4B3D33',
        borderWidth: 2,
        borderColor: '#FFD700',
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

    card_sub: {
        backgroundColor: '#4B3D33',
        borderWidth: 2,
        borderColor: '#FFD700',
        borderRadius: 8,
    },

    textoCard:{
        minHeight: 30,
        backgroundColor: "#A9A9A9",
        borderRadius: 0,
        fontSize: 20,
        marginBottom: 8,
        color: "black",
    },


    buttonCard: {
        width: '45%',
        borderRadius: 5,
        marginTop: 8,
        backgroundColor: '#8B4513',
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