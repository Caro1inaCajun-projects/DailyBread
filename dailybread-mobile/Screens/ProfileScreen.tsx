import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProfileScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text>Placeholder for user info</Text>
            <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebedce' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#297d23', marginBottom: 20 },
});