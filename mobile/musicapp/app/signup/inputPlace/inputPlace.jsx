import React from "react";
import { Text, TextInput, View, StyleSheet, Image } from "react-native";

export default function InputPlace({ label, icon, onChangeTextHandler, value }) {
    return (
        <View style={styles.InputPlace}>
            <Text>{label}</Text>
            <View style={styles.input}>
                <TextInput style={styles.inputComponent} value={value} onChangeText={onChangeTextHandler} />
                <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    InputPlace: {
        display: 'flex',
        alignItems: "flex-start",
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: "100%"
    },
    inputComponent: {
        width: '80%'
    },

    input: {
        display: 'flex',
        flexDirection: 'row',
        width: 250,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fafafa',
        borderColor: "#afafaf",
        borderWidth: 1,
        height: 40,
        borderRadius: 5
    }
})