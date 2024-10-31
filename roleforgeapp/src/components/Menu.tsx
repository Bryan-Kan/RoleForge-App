import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from "../components/estilo";

import Home from "../Telas/Home";
import Mestre from "../Telas/Mestre";
import Jogador from "../Telas/Jogador";

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerStyle: styles.headerStyle_drawner, // Estilo do cabeçalho
        headerTitleStyle: styles.headerTitleStyle_drawner,
        drawerLabelStyle: styles.drawerLabelStyle, // Estilo das labels do Drawer
        drawerStyle: {
          backgroundColor: 'rgba(139, 69, 19, 0.8)', // Fundo claro
          borderRightWidth: 2,
          borderRightColor: '#FFD700', // Borda dourada
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Mestre" component={Mestre} />
      <Drawer.Screen name="Jogador" component={Jogador} />
    </Drawer.Navigator>
  );
}