import React, { useEffect, useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import { AppContext } from "../../scripts/AppContext";
import * as ImagePicker from 'expo-image-picker';    //npm install expo-image-picker
import { router } from "expo-router";

export default TelaPerfil = () => {
    const { user, setUser } = useContext(AppContext);
    const [image, setImage] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.canceled) {
            const newImageUri = result.assets[0].uri;
            setImage(newImageUri);
            handleSendImage(newImageUri);
        }
    };
    
    const handleSendImage = async (imageUri) => {
        try {
            const data = {
                "file": imageUri,
                "upload_preset": "ml_default",
            };
            const res = await fetch("https://api.cloudinary.com/v1_1/dwescvnsn/upload", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            setImage(result.url);
            setUser({ ...user, profile_image: result.url });
            await saveNewImageURLonBackend(result.url);
        } catch (e) {
            console.log(e);
        }
    };
    
    const saveNewImageURLonBackend = async (newImageUrl) => {
        try {
            const data = {
                "profile_image": newImageUrl,
            };
            const res = await fetch(`http://localhost:8000/user/save_user_image/${user.id}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.replace("/Home")} style={styles.backButton}>
                <Text style={styles.backText}>voltar</Text>
            </Pressable>

            <View style={styles.profile}>
                <Pressable onPress={pickImage} style={styles.buttonImage}>
                    <Image source={{ uri: user.profile_image }} style={{ height: 100, width: 100, borderRadius: 50 }} />
                </Pressable>
                <View style={styles.userInfo}>
                    <Text style={styles.user_nome}>{user.nome} {user.sobrenome}</Text>
                    <Text style={styles.user_email}>{user.email}</Text>
                    <Text style={styles.data_nasc}>{user.dataNascimento}</Text>
                    {user.bio && <Text style={styles.user_bio}>{user.bio}</Text>}
                </View>

                <Pressable style={styles.button} onPress={() => {router.replace("/adBio")}}>
                    <Text style={{ color: '#ffffff' }}>
                        {user.bio ? "Editar Bio" : "Adicionar Bio"}
                    </Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => {router.replace("/telaAlterarSenha")}}>
                    <Text style={{ color: '#ffffff' }}>Alterar Senha</Text>
                </Pressable>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-around',
        backgroundColor: '#F6F6F6',
    },
    backButton: {
        position: "absolute",
        top: 20,
        left: 10,
        backgroundColor: "#4380CF",
        padding: 10,
        borderRadius: 5,
    },
    backText: {
        color: "#fff",
    },
    button: {
        backgroundColor: '#4380CF',
        width: 200,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 30,
        marginBottom: -10
    },
    profile: {
        backgroundColor: '#F6F6F6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 360,
        width: 600,
        borderRadius: 10,
        marginTop: 60,
        borderWidth: 2,
        borderColor: '#d9d9d9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5, 
    },
    buttonImage: {
        backgroundColor: '#ffffff',
        borderRadius: 50,
        marginTop: 20
    },
    userInfo: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 10
    },

    user_nome: {
        color: '#6c757d',
        width: 300,
        textAlign: 'center',
    },
    user_email: {
        color: '#6c757d',
        width: 300,
        textAlign: 'center',
    },
    data_nasc: {
        color: '#6c757d',
        width: 300,
        textAlign: 'center',
    },
    user_bio: {
        color: '#6c757d',
        width: 300,
        textAlign: 'center',
        marginTop: 10,
        fontStyle: 'italic',
    },    
});