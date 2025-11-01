import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenName } from '../screenName';
import { DetailScreen, Home } from '../../screen';

const Stack = createNativeStackNavigator();

export const Route = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screenName.Home} component={Home} />
            <Stack.Screen name={screenName.DetailScreen} component={DetailScreen} />
        </Stack.Navigator>

    );
};
