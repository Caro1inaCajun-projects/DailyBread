import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface CompletionRingProps {
    completed: number;
    total: number;
    radius?: number;
    strokeWidth?: number;
}

export default function CompletionRing({
    completed,
    total,
    radius = 45,
    strokeWidth = 10,
}: CompletionRingProps) {
    const progress = total === 0 ? 0 : completed / total;

    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - progress);

    return (
        <View style={styles.container}>
            <Svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
                {/* Background ring */}
                <Circle
                    stroke="#DDD"
                    fill="none"
                    cx={radius + strokeWidth / 2}
                    cy={radius + strokeWidth / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />

                {/* Progress ring */}
                <Circle
                    stroke="#2E7D32"
                    fill="none"
                    cx={radius + strokeWidth / 2}
                    cy={radius + strokeWidth / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${radius + strokeWidth / 2}, ${radius + strokeWidth / 2}`}
                />
            </Svg>

            {/* Center text */}
            <View style={styles.centerText}>
                <Text style={styles.percentText}>
                    {Math.round(progress * 100)}%
                </Text>
                <Text style={styles.subText}>
                    {completed}/{total}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    centerText: {
        position: "absolute",
        alignItems: "center",
    },
    percentText: {
        fontSize: 22,
        fontWeight: "700",
        color: "#0A0A0A",
    },
    subText: {
        fontSize: 14,
        color: "#2E7D32",
    },
});
