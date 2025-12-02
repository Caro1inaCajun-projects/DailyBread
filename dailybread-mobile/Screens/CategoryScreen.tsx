import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import colors from '../Styles/colors';

export default function CategoryScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Habit Categories</Text>
            <Text style={[styles.category, {color: colors.green}]}>Spirituality</Text>
            <Text style={[styles.category, {color: colors.yellow}]}>Mentality</Text>
            <Text style={[styles.category, {color: colors.blue}]}>Physical</Text>
            <Button title="Back to Home" color={colors.green} onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'colors.background' },
    title: { fontSize: 24, fontWeight: 'bold', color: 'colors.green', marginBottom: 20 },
    subtitle: { fontSize: 18, marginBottom: 10 },
});