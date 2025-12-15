import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Screens/LoginScreen';
import Tabs from './Screens/Tabs';
import SignUpScreen from './Screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function App() {


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>

                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="MainTabs" component={Tabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}