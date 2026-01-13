import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import CategoryScreen from './CategoryScreen';
import ProfileScreen from './ProfileScreen';
import WeeklyScreen from './WeeklyScreen';
import HabitSelection from './HabitSelection';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#EFE3C6',
                tabBarInactiveTintColor: '#0A0A0A',
                tabBarStyle: { position: 'absolute', backgroundColor: '#2E7D32', height: 80, borderTopWidth: 0, },
            }}
        >
            <Tab.Screen name="Week" component={WeeklyScreen } />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Categories" component={CategoryScreen} />
            <Tab.Screen name="Habits" component={HabitSelection } />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}