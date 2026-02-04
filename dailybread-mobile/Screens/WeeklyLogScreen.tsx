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
                    <Text>"Today's completion"</Text>
                </View>
                <View style={styles.sectionBorder}>
                    <Text style={styles.weekTitle}>Current Week</Text>
                    <Text>{[" SUN ", " MON ", " TUE ", " WED ", " THU ", " FRI ", " SAT "].map((d) => (<Text key={d} style={styles.weekText}>{d}</Text>))}</Text>
                </View>
                <View style={styles.sectionBorder }>
                    <Text>"Perfect Streak Count"</Text>
                </View>
                <View style={styles.calendarContainer}>
                    <Calendar onDayPress={(day) => console.log(day)} theme={{
                        backgroundColor: "#F5E8C8",
                        calendarBackground: "#F5E8C8",
                        textSectionTitleColor: "#2E7D32",
                        selectedDayBackgroundColor: "#2E7D32",
                        selectedDayTextColor: "#2E7D32",
                        todayTextColor: "#2E7D32",
                        dayTextColor: "#0A0A0A",
                        monthTextColor: "#0A0A0A",
                        arrowColor: "#2E7D32",
                        textMonthFontSize: 22,
                        textDayFontSize: 16,
                        textDayHeaderFontSize: 14,
                        textMonthFontWeight: "700",
                        
                    }}>
                    </Calendar>
                </View>
                
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#E6D7B8",
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
        backgroundColor: "#F5E8C8",
        borderRadius: 10,
        borderColor: "#0A0A0A",
        padding: 16,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,

    },
    weekTitle: {
        fontSize: 25,
        textAlign: "center",
        color: "0A0A0A",
        fontWeight: "500"
    },
    weekText: {
        flex: 1,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
        color: "#2E7D32",

    },
    calendarContainer: {
        backgroundColor: "#F5E8C8",
        borderRadius: 10,
        borderColor: "#0A0A0A",
        padding: 16,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    }


});