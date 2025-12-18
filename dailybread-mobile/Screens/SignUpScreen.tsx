import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import FloatingLabelInput from "./FloatingLabelInput";
import { Api } from "./../apiClient";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function SignUpScreen({ navigation }: any) {

    const [email, setEmail] = useState("");
    const [name, setName] =useState("")
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        const user = {
            email: email,
            password: password,
            userName: name,
        };

        try {
            const response = await Api.signup(email, password, name);
            await AsyncStorage.setItem('token', response.token);
            navigation.replace("MainTabs");
        } catch (err: any) {
            alert(err.message || "Network error");
        }
    };

    const handleLogIn = () => {
        navigation.replace("Login")
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: "#EFE3C6" }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Pressable style={styles.logInButton} onPress={handleLogIn}>
                <Text style={styles.logInButtonText}>Log in</Text>
            </Pressable>
                    <Image source={require("../assets/Daily-Bread.png")} style={styles.logo} />
                    <Text style={styles.logoText}>Daily Bread</Text>
            <Text style={styles.title}>Sign Up</Text>
            <FloatingLabelInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <FloatingLabelInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />

            <FloatingLabelInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                        />

            <Pressable style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
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
        fontSize: 32,
        marginTop: 45,
        marginBottom: 40,
        color: "#0A0A0A",
        fontWeight: "bold",

    },
    signUpButton: {
        marginTop: 15,
        backgroundColor: "#2E7D32",
        padding: 18,
        borderRadius: 100,
    },
    signUpButtonText: {
        textAlign: "center",
        justifyContent: "center",
        fontSize: 15,
        fontWeight: "bold",
        color: "#EFE3C6",
    },
    logInButton: {
        marginTop: 25,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'

    },
    logInButtonText: {
        color: "#878472"
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

});

