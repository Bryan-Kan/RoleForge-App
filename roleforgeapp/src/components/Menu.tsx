import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from "../Telas/Home";
import Mestre from "../Telas/Mestre";
import Jogador from "../Telas/Jogador";

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerTitleStyle: { textTransform: 'uppercase' } // Aplica as opções comuns para todas as telas
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Mestre" component={Mestre} />
      <Drawer.Screen name="Jogador" component={Jogador} />
    </Drawer.Navigator>
  );
}