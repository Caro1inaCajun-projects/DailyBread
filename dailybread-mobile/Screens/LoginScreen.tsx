import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Pressable } from 'react-native';
import FloatingLabelInput from "./FloatingLabelInput";

export default function LoginScreen({ navigation }: any) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <FloatingLabelInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <FloatingLabelInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF1C3",
        padding: 25,
    },
    title: {
        fontSize: 32,
        marginBottom: 40,
        color: "#25450D",
        fontWeight: "bold",
        alignContent: "center"

    },
    button: {
        backgroundColor: "#0A0A0A",
        padding: 18,
        borderRadius: 100,
    },
    buttonText: {
        color: "#FDF1C3",
    }
});