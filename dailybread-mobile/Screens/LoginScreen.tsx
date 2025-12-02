import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import FloatingLabelInput from "./FloatingLabelInput";

export default function LoginScreen({ navigation }: any) {

    const [email, setEmail] = useState("");


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <FloatingLabelInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FDF1C3",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 40,
        color: "#25450D",
        fontWeight: "bold",
    },
    button: {
        width: "100%",
        backgroundColor: "#3A7E1F",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});