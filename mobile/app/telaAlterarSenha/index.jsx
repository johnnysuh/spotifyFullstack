import React, { useEffect, useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import { Link, router } from "expo-router"
import InputPlace from "..inputPlace/inputPlace/InputPlace";
import { AppContext } from "../../scripts/AppContext";


export default TelaLogin = () => {
    const { user, setUser } = useContext(AppContext)
    const [novaSenha, setNovaSenha] = React.useState('');
    const [confirmarNovaSenha, setConfirmarNovaSenha] = React.useState('');

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/user/change_user_password/${user.id}`, {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    "novaSenha": confirmarNovaSenha
                })
            })

            if (response.ok) {
                alert("Senha alterada com sucesso");
                router.replace("/telaPerfil");
            } else {
                console.warn("Falha ao alterar senha. Status:", response.status);
            }
        } catch (error) {
            console.error("Erro: ", error)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Alterar senha</Text>

            <View style={styles.form}>
                <View>
                    <InputPlace value={novaSenha} onChangeTextHandler={setNovaSenha}  label={"Nova Senha"} />
                    <InputPlace value={confirmarNovaSenha} onChangeTextHandler={setConfirmarNovaSenha} label={"Confirmar Nova Senha"} />
                </View>
                <Pressable style={styles.button} onPress={fetchData}><Text style={{ color: '#ffffff' }}>Alterar</Text></Pressable>
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
        backgroundColor: '#F6F6F6',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#ADD84B",
        marginTop: 80,
        marginBottom: 5
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
    form: {
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
    }
})