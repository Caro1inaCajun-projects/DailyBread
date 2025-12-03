import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Screens/HomeScreen';
import CategoryScreen from './Screens/CategoryScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" screenOptions={{ headerStyle: { backgroundColor: '#000000' }, headerTintColor: '#fff' }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Categories" component={CategoryScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}