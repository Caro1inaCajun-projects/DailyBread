import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import colors from '../Styles/colors';
import habits, { Habit } from '../Data/habits';

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Daily Bread</Text>

            <FlatList
                data={habits}
                keyExtractor={(item: Habit) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.habitItem}>
                        <Text style={[styles.habitName, { color: colors[item.category.toLowerCase()] || colors.textDark }]}>
                            {item.name} {item.completed ? 'Yes' : 'No'}
                        </Text>
                        <Text style={styles.category}>{item.category}</Text>
                    </View>
                )}
            />
            <Button title="Go to Categories" color={colors.green} onPress={() => navigation.navigate('Categories')} />
            <Button title="Go to Profile" color={colors.green} onPress={() => navigation.navigate('Profile')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background },
    title: { fontSize: 24, fontWeight: 'bold', color: colors.green, marginBottom: 20 },
    habitItem: { marginBottom: 15 },
    habitName: { fontSize: 18 },
    category: { fontSize: 14, color: colors.textDark },
});