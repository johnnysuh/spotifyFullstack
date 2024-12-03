import React, { useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native";
import { AppContext } from "../../scripts/AppContext";
import { router } from "expo-router";

const AdBio = () => {
    const { user, setUser } = useContext(AppContext);
    const [bio, setBio] = useState(user.bio || "");

    const handleSaveBio = () => {
        setUser({ ...user, bio: bio });
        router.replace("/telaPerfil");
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={() =>  router.replace("/telaPerfil")} style={styles.backButton}>
                <Text style={styles.backText}>voltar</Text>
            </Pressable>

            <View style={styles.bioContainer}>
                <TextInput
                    style={styles.bioInput}
                    placeholder="Escreva sua biografia"
                    value={bio}
                    onChangeText={setBio}
                    multiline
                />
                <Pressable style={styles.saveButton} onPress={handleSaveBio}>
                    <Text style={styles.saveText}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0b071b",
        justifyContent: "center",
        alignItems: "center",
    },
    backButton: {
        position: "absolute",
        top: 20,
        left: 10,
        backgroundColor: "#5732f1",
        padding: 10,
        borderRadius: 5,
    },
    backText: {
        color: "#fff",
    },
    bioContainer: {
        backgroundColor: "#100A2A",
        padding: 20,
        borderRadius: 10,
        width: "40%",
        alignItems: "center",
    },
    bioInput: {
        backgroundColor: "#fff",
        color: "#000",
        width: "100%",
        height: 100,
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
        textAlignVertical: "top",
    },
    saveButton: {
        backgroundColor: "#5732f1",
        width: 200,
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    saveText: {
        color: "#fff",
    },
});

export default AdBio;