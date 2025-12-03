import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Animated, StyleSheet } from "react-native";


//This is the FloatingLableInput Interface. All of these fields are required to have a FloatingLabelInput Textbox. All except secureTextEntry this is optional but if true it creates a hidden text for things like passwords.
interface FloatingLabelInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}


export default function FloatingLabelInput({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
}: FloatingLabelInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(animatedIsFocused, {
            toValue: isFocused || value ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [isFocused, value]);

    const labelStyle = {
        position: "absolute" as const,
        left: 0,
        top: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [18, -8], // moves label up
        }),
        fontSize: animatedIsFocused.interpolate({
            inputRange: [0, 1],
            outputRange: [18, 14], // smaller font when floating
        }),
        color: "#3A7E1F",
    };

    return (
        <View style={styles.contain}>
            <Animated.Text style={labelStyle}>{placeholder}</Animated.Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={secureTextEntry}
                placeholder=""
                placeholderTextColor="transparent"
            />
            <View/>
        </View>
    );
}

const styles = StyleSheet.create({
    contain: {
        width: "100%",
        paddingVertical: 10,
    },
    input: {
        width: "100%",
        borderColor: "#0A0A0A",
        borderBottomWidth: 2,
        marginBottom: 24,
        paddingVertical: 10,
        fontSize: 16,
    },

});