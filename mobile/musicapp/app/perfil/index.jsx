import React, { useEffect, useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import { AppContext } from "../../scripts/AppContext";
import * as ImagePicker from 'expo-image-picker';    //npm install expo-image-picker
import { router } from "expo-router";



export default TelaPerfil = () => {
    const { user, setUser } = useContext(AppContext)
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
            <Pressable onPress={pickImage}>
                <Image source={{ uri: user.profile_image }} style={{ height: 100, width: 100 }} />
            </Pressable>
            <View>
                <Text>Nome: {user.nome} {user.sobrenome}</Text>
                <Text>Email: {user.email}</Text>
                <Text>Data de nascimento: {user.dataNascimento}</Text>
            </View>
            <Pressable style={styles.button} onPress={() => {router.replace("/telaAlterarSenha")}}><Text style={{ color: '#ffffff' }}>Alterar Senha</Text></Pressable>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-around'
    },
    button:{
        backgroundColor: '#333333',
        width: 250,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})