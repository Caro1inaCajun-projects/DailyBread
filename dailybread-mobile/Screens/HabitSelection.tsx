import React, { useEffect, useState } from 'react';
import { View, Pressable, StyleSheet, ScrollView, Text } from 'react-native';
import { Api } from "./../apiClient";
import { PresetHabit } from "../Types/PresetHabit";


export default function HabitSelection() {
    const [habits, setHabits] = useState<PresetHabit[]>([]);
    const [selectedHabits, setSelectedHabitsIds] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

    const toggleHabit = async (habitId: number) => {
        try {
            await Api.toggleUserHabit(habitId);

            setSelectedHabitsIds(prev =>
                prev.includes(habitId)
                    ? prev.filter(id => id !== habitId)
                    : [...prev, habitId]
            );
        }
        catch (err) {
            console.error("Error toggling habit:", err);
        }
    };

    useEffect(() => {
        const loadHabits = async () => {
            try {
                const data = await Api.getAllPresetHabits();
                setHabits(data);

                const userHabitIds = await Api.getUserHabits();
                setSelectedHabitsIds(userHabitIds);
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
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Disciplines</Text>
            </View>
            <ScrollView style={styles.scrollableContainer}>
                {habits.map((habit) => {
                    const isSelected = selectedHabits.includes(habit.id);

                    return (
                        <Pressable
                            key={habit.id}
                            style={
                                isSelected ? styles.cardSelected : styles.cardUnselected
                            }
                            onPress={() => toggleHabit(habit.id)}
                        >
                            <View style={styles.cardContent}>
                                <View style={styles.textContainer}>
                                    <Text style={
                                        isSelected ? styles.titleSelected : styles.titleUnselected
                                    }>{habit.title}</Text>
                                    <Text style={[
                                        isSelected ? styles.descriptionSelected : styles.descriptionUnselected
                                    ]}>{habit.description}</Text>
                                </View>

                                <View style={styles.checkbox}>
                                    {isSelected && (
                                        <Text style={styles.checkmark}>X</Text>
                                    )}
                                </View>
                            </View>
                        </Pressable>
                    );
                })}
                </ScrollView>
            </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#EFE3C6"
    },
    scrollableContainer: {
        marginBottom: 75,
        padding: 10

    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loading: {
        fontSize: 18,
    },
    cardContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    textContainer: {
        flex: 1,
        paddingRight: 12,
    },

    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#0A0A0A",
        alignItems: "center",
        justifyContent: "center",
    },

    checkmark: {
        color: "#0A0A0A",
        fontSize: 16,
        fontWeight: "bold",
    },

    cardSelected: {
        borderColor: "#0A0A0A",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 2,
        backgroundColor: "#2E7D32",
    },
    cardUnselected: {
        borderColor: "#0A0A0A",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 2
    },
    titleUnselected: {
        fontSize: 20,
        fontWeight: "600",
        color: "#2E7D32",
    },

    titleSelected: {
        fontSize: 20,
        fontWeight: "600",
        color: "#EFE3C6",
    },

    descriptionUnselected: {
        marginTop: 4,
        fontSize: 14,
        color: "#2E7D32",
    },

    descriptionSelected: {
        marginTop: 4,
        fontSize: 14,
        color: "#EFE3C6",
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
})
