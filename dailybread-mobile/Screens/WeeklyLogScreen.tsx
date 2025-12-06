import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native';

export default function TreeScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/tree-background.png')}
                style={styles.background}
                resizeMode="cover"
            >
                <Text style={styles.titleText}>Daily Bread</Text>
                <Text style={styles.subTitleText}>12/1-12/7</Text>
                <Text style={styles.weekText}>                  M     T     W     T     F     S     S     </Text>
                <Image
                    source={require('../assets/branch.png')}
                    style={styles.branchImage}
                />
                <Image
                    source={require('../assets/branch.png')}
                    style={styles.branchImage}
                />
                <Image
                    source={require('../assets/branch.png')}
                    style={styles.branchImage}
                />
                <Image
                    source={require('../assets/branch.png')}
                    style={styles.branchImage}
                />
                <Image
                    source={require('../assets/branch.png')}
                    style={styles.branchImage}
                />
                <Image
                    source={require('../assets/branch.png')}
                    style={styles.branchImage}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 32,
        marginTop: 45,
        color: "#0A0A0A",
        fontWeight: "bold",
    },
    subTitleText: {
        fontSize: 25,
        marginTop: 10,
        color: "#0A0A0A"
    },
    weekText: {
        marginTop: 55,
        fontSize: 25,
        alignSelf: 'flex-end',
        fontWeight: 'bold',
    },
    branchImage: {
        marginTop: 40,
        width: 400,
        height:50,
    }
});