import React from "react";
import { Text, TextInput, View, StyleSheet, Image } from "react-native";

export default function InputPlace({ label, icon, onChangeTextHandler, value }) {
    return (
        <View style={styles.InputPlace}>
            <View style={styles.centralizando}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.input}>
                    <TextInput style={styles.inputComponent} value={value} onChangeText={onChangeTextHandler} />
                    <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    InputPlace: {
        display: 'flex',
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: "100%",
        marginTop: 5,
    },
    centralizando: {
        display: 'flex',
        alignItems: "flex-start",
    },
    inputComponent: {
        width: '75%',
        borderWidth: 0,
        outlineWidth: 0
    },
    input: {
        display: 'flex',
        flexDirection: 'row',
        width: 250,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fafafa',
        height: 40,
        borderRadius: 5,
        marginTop: 10,
        shadowColor: '#6c757d',
        shadowOffset: { width: -1, height: -1 }, // Sombra para simular luz superior
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    },
    label: {
        color: '#6c757d',
        marginTop: 7
    }
})