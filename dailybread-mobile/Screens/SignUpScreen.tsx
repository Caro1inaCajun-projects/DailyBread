import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import FloatingLabelInput from "./FloatingLabelInput";


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
            const response = await fetch("http://172.20.10.6:5083/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                alert("Account created! You can now log in.");
                navigation.replace("MainTabs")
            } else {
                const error = await response.text();
                alert(error);
            }
        } catch (err) {
            alert("Network error")
        }
    };

    const handleLogIn = () => {
        navigation.replace("Login")
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.logInButton} onPress={handleLogIn}>
                <Text style={styles.logInButtonText}>Log in</Text>
            </Pressable>
            <Image source={require("../assets/daily-bread-logo.png")} style={styles.logo} />
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
    );


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFE3C6",
        padding: 25,
    },
    title: {
        fontSize: 32,
        marginTop: 45,
        marginBottom: 40,
        color: "#2E7D32",
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
        width: 200,
        height: 200,
        resizeMode: "contain",
        alignSelf: "center",
    },

});

