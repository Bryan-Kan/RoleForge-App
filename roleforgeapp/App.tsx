import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationProp, createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/Telas/Login';
import Cadastro from './src/Telas/Cadastro';
import Menu from './src/components/Menu';
import CriaCampanha from './src/Telas/CriarCampanha';
import SuasCampanhas from './src/Telas/SuasCampanhas';
import AcheCampanha from './src/Telas/AcheCampanha';
import PartCampanha from './src/Telas/PartCampanha';
import EditaCampanha from './src/Telas/EditarCampanha';

const Stack = createNativeStackNavigator();

type StackNavigation = {
  Login: undefined,
  Cadastro: undefined,
  Home: undefined,
  CriaCampanha: undefined,
  AcheCampanha: undefined,
  PartCampanha: undefined
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;

const App = () => {

  // DADOS DO USUARIO
  const usuario = [];

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >

        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>

        <Stack.Screen name="Cadastro" component={Cadastro}  options={{ headerShown: false }}/>

        <Stack.Screen name="Menu" component={Menu}  options={{ headerShown: false }}/>

        <Stack.Screen name="Criar Campanha" component={CriaCampanha}/>

        <Stack.Screen name="Suas Campanhas" component={SuasCampanhas}/>

        <Stack.Screen name='Ache uma Campanha' component={AcheCampanha}/>

        <Stack.Screen name='Campanhas que Participa' component={PartCampanha}/>

        <Stack.Screen name='Editar Campanha' component={EditaCampanha}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;