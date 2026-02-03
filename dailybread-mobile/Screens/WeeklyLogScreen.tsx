import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function TreeScreen() {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>
           
                <Text style={styles.headerTitle}>Daily Bread</Text>
                
            </View>
            <ScrollView style={styles.scrollableContainer}>
                <View style={styles.sectionBorder}>
                    <Text style={styles.weekTitle}>Current Week</Text>
                    <Text style={styles.weekText}>S     M     T     W     T     F     S</Text>
                </View>
                <Calendar>
                </Calendar>
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
    sectionBorder: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 6,
        padding: 8,
    },
    weekTitle: {
        fontSize: 25,
        textAlign: "center",
        color: "0A0A0A",
        fontWeight: "500"
    },
    weekText: {
        fontSize: 25,
        textAlign: "center",
        color: "0A0A0A",
        fontWeight: "700"
    }

});