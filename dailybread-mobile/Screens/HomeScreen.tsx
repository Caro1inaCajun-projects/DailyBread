import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Api } from "../apiClient";
import { PresetHabit } from "../Types/PresetHabit";
import { useFocusEffect } from "@react-navigation/native";


export default function HomeScreen() {
    const [habits, setHabits] = useState<PresetHabit[]>([]);
    const [completedHabits, setCompletedHabits] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);


    const loadUserHabits = async () => {
        try {
            const allHabits = await Api.getAllPresetHabits();
            const userHabitIds = await Api.getUserHabits();
            const completedHabits = await Api.getCompletedHabits();
            const selectedHabits = allHabits.filter(habit =>
                userHabitIds.includes(habit.id)
            );
            
            setCompletedHabits(completedHabits)
            setHabits(selectedHabits);
            

        } catch (err) {
            console.error("Error loading daily habits:", err);
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            setLoading(true);
            loadUserHabits();
        }, [])
    );

    const toggleCompleted = async (habitId: number) => {
        setCompletedHabits(prev =>
            prev.includes(habitId)
                ? prev.filter(id => id !== habitId)
                : [...prev, habitId]
        );

        try {
            await Api.toggleCompletedHabit(habitId);
        } catch (err) {
            console.error("Failed to toggle habit:", err);

            setCompletedHabits(prev =>
                prev.includes(habitId)
                    ? prev.filter(id => id !== habitId)
                    : [...prev, habitId]
            );
        }
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <Text style={styles.loading}>Loading daily disciplines...</Text>
            </View>
        );
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Today{"'"}s Disciplines</Text>
            </View>

            <ScrollView style={styles.scrollableContainer}>
                {habits.map(habit => {
                    const isCompleted = completedHabits.includes(habit.id);

                    return (
                        <Pressable
                            key={habit.id}
                            style={[
                                styles.row,
                                isCompleted && styles.rowCompleted,
                            ]}
                            onPress={() => toggleCompleted(habit.id)}
                        >
                            <Text
                                style={[
                                    styles.title,
                                    isCompleted && styles.titleCompleted,
                                ]}
                            >
                                {habit.title}
                            </Text>

                            <View style={styles.checkbox}>
                                {isCompleted && (
                                    <Text style={styles.checkmark}>X</Text>
                                )}
                            </View>
                        </Pressable>
                    );
                })}

                {habits.length === 0 && (
                    <Text style={styles.empty}>
                        No disciplines selected yet.
                    </Text>
                )}
            </ScrollView>
        </View>
    );
}


    const styles = StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: "#EFE3C6",
        },
        header: {
            paddingTop: 40,
            paddingBottom: 16,
            paddingHorizontal: 20,
            backgroundColor: "#2E7D32",
        },
        headerTitle: {
            fontSize: 28,
            fontWeight: "700",
            color: "#0A0A0A",
            textAlign: "center",
        },
        scrollableContainer: {
            padding: 16,
            marginBottom: 80,
        },
        row: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#0A0A0A",
            marginBottom: 12,
            backgroundColor: "#EFE3C6",
        },
        rowCompleted: {
            backgroundColor: "#2E7D32",
        },
        title: {
            fontSize: 18,
            fontWeight: "600",
            color: "#2E7D32",
        },
        titleCompleted: {
            color: "#EFE3C6",
            textDecorationLine: "line-through",
        },
        checkbox: {
            width: 26,
            height: 26,
            borderRadius: 6,
            borderWidth: 2,
            borderColor: "#0A0A0A",
            alignItems: "center",
            justifyContent: "center",
        },
        checkmark: {
            fontSize: 18,
            fontWeight: "bold",
            color: "#0A0A0A",
        },
        center: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        loading: {
            fontSize: 18,
        },
        empty: {
            textAlign: "center",
            marginTop: 40,
            fontSize: 16,
            color: "#2E7D32",
        },
    });
