import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native';

const WeekTracker = () => <Text style={styles.topRowButtonText}>Week</Text>;
const MonthTracker = () => <Text style={styles.topRowButtonText}>Month</Text>;
const YearTracker = () => <Text style={styles.topRowButtonText}>Year</Text>;

export default function WeeklyScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.topRowButton}>
                {["week", "month", "year"].map((period) => (
                    <TouchableOpacity
                        key={period}
                        style={[
                            styles.button,
                        ]}
                    >
                        <Text style={[styles.topRowButtonText]}>
                            {period.charAt(0).toUpperCase() + period.slice(1)}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>


        </View>
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFE3C6",
        padding: 25,
    },
    topRowButton: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 10,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 2,
        borderBottomColor: "transparent",
    },
    topRowButtonText: {
    },
})