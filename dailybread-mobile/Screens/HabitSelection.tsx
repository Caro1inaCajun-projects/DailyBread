import React, { useEffect, useState } from 'react';
import { View, Pressable, StyleSheet, ScrollView, Text } from 'react-native';
import colors from '../Styles/colors';
import { Api } from "./../apiClient";
import { PresetHabit } from "../Types/PresetHabit";

export default function HabitSelection() {
    const [habits, setHabits] = useState<PresetHabit[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadHabits = async () => {
            try {
                const data = await Api.getAllPresetHabits();
                setHabits(data);
            }
            catch (err) {
                console.error("Error loading habits:", err);
            } finally {
                setLoading(false);
            }
        };
        loadHabits();
    }, []);

    if (loading) {
        return (
            <View style={styles.center} >
                <Text style={styles.loading}>Loading habits...</Text>
            </View>
        );
    }


    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollableContainer}>
                    <Pressable key={"0"} style={styles.card}>
                        <Text style={styles.title}>"Pray"</Text>
                        <Text style={styles.description}>"Pray five times a day</Text>

                    </Pressable>
                ) 
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFE3C6",
    },
    scrollableContainer: {
        marginTop: 55,

    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loading: {
        fontSize: 18,
    },
    card: {
        backgroundColor: "#1e1e1e",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderLeftWidth: 6,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
    },
    description: {
        marginTop: 4,
        fontSize: 14,
        color: "#bbb",
    }
})
