import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CustomTabBar from "../components/CustomTabBar";
import Home from '../screens/Home';
import Docs from '../screens/Docs';
import NotaFiscal from '../screens/NotaFiscal';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />} initialRouteName="Home" screenOptions={{
        headerShown: false
    }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Docs" component={Docs} />
        <Tab.Screen name="NotaFiscal" component={NotaFiscal} />
    </Tab.Navigator>
)