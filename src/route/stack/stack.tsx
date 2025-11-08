import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../screenName';
import { DetailScreen, DressScreen, Foods, Furniture, Home, Material, Sports, welcome } from '../../screen';
import DrawerNavigator from '../drawar/drawar';

const Stack = createNativeStackNavigator();

export const Route = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false, }} initialRouteName='Welcome'>

            <Stack.Screen name={screenName.Drawer} component={DrawerNavigator} />

            <Stack.Screen name={screenName.Welcome} component={welcome} />
            <Stack.Screen name={screenName.Home} component={Home} />
            <Stack.Screen name={screenName.Dress} component={DressScreen} />
            <Stack.Screen name={screenName.Sports} component={Sports} />
            <Stack.Screen name={screenName.Furniture} component={Furniture} />
            <Stack.Screen name={screenName.Foods} component={Foods} />
            <Stack.Screen name={screenName.Material} component={Material} />

        </Stack.Navigator>

    );
};
