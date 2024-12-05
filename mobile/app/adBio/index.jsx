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
            <Pressable onPress={() => router.replace("/telaPerfil")} style={styles.backButton}>
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
        backgroundColor: "#F6F6F6", // Cor de fundo ajustada para combinar com a tela anterior
        justifyContent: "center",
        alignItems: "center",
    },
    backButton: {
        position: "absolute",
        top: 20,
        left: 10,
        backgroundColor: "#4380CF", // Cor do botão de voltar
        padding: 10,
        borderRadius: 5,
    },
    backText: {
        color: "#fff",
    },
    bioContainer: {
        backgroundColor: "#F6F6F6", // Fundo do container ajustado
        padding: 20,
        borderRadius: 10,
        width: "80%", // Largura maior para se alinhar com o estilo
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#d9d9d9", // Cor da borda
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5, // Adicionando sombra semelhante à da tela anterior
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
        borderColor: "#d9d9d9",
        borderWidth: 1,
    },
    saveButton: {
        backgroundColor: "#4380CF", // Cor do botão ajustada para ser consistente
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