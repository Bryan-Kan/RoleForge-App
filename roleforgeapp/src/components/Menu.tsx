import React from "react";

import Home from "../Telas/Home";
import Mestre from "../Telas/Mestre";
import Jogador from "../Telas/Jogador";
import Icoteste from "./Icones";

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Mestre" component={Mestre} />
      <Drawer.Screen name="Jogador" component={Jogador} />
    </Drawer.Navigator>
  );
}