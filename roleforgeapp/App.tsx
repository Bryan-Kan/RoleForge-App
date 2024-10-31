import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack';
import { UserProvider } from './src/components/usuario';

import Login from './src/Telas/Login';
import Cadastro from './src/Telas/Cadastro';
import Menu from './src/components/Menu';
import CriaCampanha from './src/Telas/CriarCampanha';
import SuasCampanhas from './src/Telas/SuasCampanhas';
import AcheCampanha from './src/Telas/AcheCampanha';
import PartCampanha from './src/Telas/PartCampanha';
import EditarFicha from './src/Telas/EditarFicha';
import CampanhaMestre from './src/Telas/CampanhaMestre';
import CriaPersonagem from './src/Telas/CriaPersonagem';
import CampanhaJogador from './src/Telas/CampanhaJogador';
import ListaPersonagem from './src/Telas/ListaPersonagem';
import AbrirFicha from './src/Telas/AbrirFicha';
import EditarPersonagem from './src/Telas/EditarPersonagem';
import MudarNome from './src/Telas/MudarNome';
import styles from './src/components/estilo';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Login: undefined,
  Cadastro: undefined,
  Home: undefined,
  CriaCampanha: undefined,
  AcheCampanha: undefined,
  PartCampanha: undefined,
  EditarFicha: undefined,
  CampanhaMestre: undefined,
  CriaPersonagem: undefined,
  CampanhaJogador: undefined,
  ListaPersonagem: undefined,
  AbrirFicha: undefined,
  EditarPersonagem: undefined,
  MudarNome: undefined,
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const App = () => {

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
        >

          <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>

          <Stack.Screen name="Cadastro" component={Cadastro}  options={{ headerShown: false }}/>

          <Stack.Screen name="Menu" component={Menu}  options={{ headerShown: false }}/>

          <Stack.Screen name="Criar Campanha" component={CriaCampanha} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name="Suas Campanhas" component={SuasCampanhas} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name='Ache uma Campanha' component={AcheCampanha} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name='Campanhas que Participa' component={PartCampanha} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name='Editar Ficha' component={EditarFicha} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name='Campanha Mestre' component={CampanhaMestre} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name='Criar Personagem' component={CriaPersonagem} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name='Campanha Jogador' component={CampanhaJogador} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name='Lista de Personagem' component={ListaPersonagem} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name='Ficha do Personagem' component={AbrirFicha} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name='Editar o Personagem' component={EditarPersonagem} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

          <Stack.Screen name='Mudar o Nome' component={MudarNome} options={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#FFD700', // Dourado
            headerTitleStyle: styles.headerTitleStyle,
          }}/>

        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;