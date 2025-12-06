import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native';

const WeekTracker = () =>
    <View>
        <Text style={styles.title}>Daily Bread</Text>
    </View>;
const MonthTracker = () => <Text style={styles.topRowButtonText}>Month</Text>;
const YearTracker = () => <Text style={styles.topRowButtonText}>Year</Text>;


export default function WeeklyScreen() {

    const [selected, setSelected] = useState<"week" | "month" | "year">("week");

    return (
        <View style={styles.container}>

            <View style={styles.topRowButton}>
                {["week", "month", "year"].map((period) => {
                    const isActive = selected === period;

                    return (
                        <TouchableOpacity
                            key={period}
                            style={styles.button}
                            onPress={() => setSelected(period as "week" | "month" | "year")}
                        >
                            <Text style={[styles.topRowButtonText, isActive && styles.activeText]}>
                                {period.charAt(0).toUpperCase() + period.slice(1)}
                            </Text>

                            {isActive && <View style={styles.underline} />}
                        </TouchableOpacity>
                    );
                })}
            </View>

]            {selected === "week" && <WeekTracker />}
            {selected === "month" && <MonthTracker />}
            {selected === "year" && <YearTracker />}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFE3C6",
    },
    title: {
        fontFamily: "Inter_400Regular",
        fontSize: 50,
    },
    topRowButton: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        borderBottomColor: "#EFE3C6",
        paddingVertical: 10,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 2,
        borderBottomColor: "transparent",
    },
    topRowButtonText: {
        marginTop: 30
    },
    activeText: {
        color: "#2E7D32",
        fontWeight: "700",
    },
    underline: {
        marginTop: 6,
        height: 3,
        width: 35,
        backgroundColor: "#2E7D32",
        borderRadius: 50,
    },
})