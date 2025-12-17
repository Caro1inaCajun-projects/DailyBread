import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, Text, StyleSheet, Pressable, Image, Alert } from 'react-native';
import FloatingLabelInput from "./FloatingLabelInput";
import { Api } from "./../apiClient";

export default function LoginScreen({ navigation }: any) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogIn = async () => {
        if (!email || !password) {
            Alert.alert("Error","Please enter both email and password");
            return;
        }
        try {
            const response = await Api.login(email, password);
            navigation.replace("MainTabs")
        } catch (err: any) {
            Alert.alert("Login Failed", err.message || "Network error")
        }
    }

    const handleSignUp = () => {
        navigation.replace("SignUp")
    }


    return (
        <KeyboardAvoidingView
            style={{
                flex: 1, backgroundColor: "#EFE3C6"}}
            behavior={Platform.OS ==="ios" ? "padding":"height" }
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Pressable style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText }>Sign Up</Text>
            </Pressable>
            <Image source={require("../assets/Daily-Bread.png")} style={styles.logo} />
            <Text style={styles.logoText}>Daily Bread</Text>
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
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: 'center'
    },
    title: {
        fontSize: 28,
        marginTop: 45,
        marginBottom: 40,
        color: "#0A0A0A",
        fontWeight: "bold",

    },
    logo: {
        width: 274,
        height: 200,
        marginTop: 15,
        alignSelf: "center",
    },
    logoText: {
        fontFamily: "Lato",

        fontSize: 65,
        textAlign: "center",
        color: "#2E7D32",
        fontWeight: "bold",
        marginBottom: 15,
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
        color: "#EFE3C6",
    },
    signUpButton: {
        alignSelf: 'flex-end',
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