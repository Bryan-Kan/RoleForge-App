import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Telas/Home";
import Mestre from "../Telas/Mestre";
import Jogador from "../Telas/Jogador";

const Tab = createBottomTabNavigator();

export default function TabHome () {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            // tabBarActiveBackgroundColor: '#ffff',
            // tabBarInactiveBackgroundColor: '#121212',
            tabBarActiveTintColor: '#ffff',
            tabBarInactiveTintColor: '#ff0000',
            tabBarStyle:{
                borderTopWidth: 0,
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: '#121212',
            },
        }} 
        initialRouteName='Home'
        >
            
            <Tab.Screen
            name="Home"
            component={Home}
            />

            <Tab.Screen name="Mestre" component={Mestre}/>

            <Tab.Screen name="Jogador" component={Jogador}/>

        </Tab.Navigator>
    );
}