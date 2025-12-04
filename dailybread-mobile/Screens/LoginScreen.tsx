import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import FloatingLabelInput from "./FloatingLabelInput";

export default function LoginScreen({ navigation }: any) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = () => {
        navigation.replace("MainTabs");
    }

    const handleSignUp = () => {
        navigation.replace("SignUp")
    }


    return (
        <View style={styles.container}>
            <Pressable style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText }>Sign Up</Text>
            </Pressable>
            <Text style={styles.title}>Log in</Text>

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

            <Pressable style={styles.logInButton} onPress={handleLogIn}>
                <Text style={styles.logInButtonText}>Log in</Text>
            </Pressable>

            <Pressable style={styles.forgotPassButton}>
                <Text style={styles.forgotPassButtonText}>Forgot Password?</Text>
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
        marginTop: 45,
        marginBottom: 40,
        color: "#2E7D32",
        fontWeight: "bold",

    },
    logInButton: {
        marginTop: 15,
        backgroundColor: "#2E7D32",
        padding: 18,
        borderRadius: 100,
    },
    logInButtonText: {
        textAlign: "center",
        justifyContent: "center",
        fontSize: 15,
        fontWeight: "bold",
        color: "#FDF1C3",
    },
    signUpButton: {
        marginTop: 25,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'

    },
    signUpButtonText: {
        color: "#878472"
    },
    forgotPassButton: {
        alignSelf: 'center',
        marginTop: 15
    },
    forgotPassButtonText: {
        color: '#878472'
    }
});