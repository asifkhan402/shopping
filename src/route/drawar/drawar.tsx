import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { screenName } from '../screenName';
import { DetailScreen, Home } from '../../screen';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#fff',
                drawerActiveBackgroundColor: '#4CAF50',
                drawerPosition: 'right',
                drawerType: 'front',
                drawerStyle: { width: 240, },

            }}

        >
            <Drawer.Screen name={screenName.DetailScreen} component={DetailScreen} />

        </Drawer.Navigator>
    );
}
