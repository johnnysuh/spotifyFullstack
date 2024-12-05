import React, { useEffect, useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import InputPlace from "../inputPlace/InputPlace";
import { Link, router } from "expo-router";
import { AppContext } from "../../mobile/scripts/AppContext";

export default TelaLogin = () => {
    const { user, setUser } = useContext(AppContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const getUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/user/get_user/${id}`);
            const json = await response.json();
            setUser(json);
        } catch (e) {
            console.log(e);
        }
    };

    const fetchData = async () => {
        try {
            console.log(name, email, password);

            const response = await fetch('http://localhost:8000/auth/login', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    "email": email,
                    "senha": password
                })
            });

            if (response.status == 200) {
                const data = await response.json();
                getUser(data.user_id);
                router.replace("/Home");
            }
        } catch (error) {
            console.error("Erro: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/Logo1.png')} style={styles.logo} />

            <Text style={styles.title}>Spotifake</Text>
            <Text style={styles.subtitle}>Faça seu Login!</Text>
            <View style={styles.form}>
                <InputPlace value={email} onChangeTextHandler={setEmail} icon={"https://img.icons8.com/?size=100&id=PedPR10iVAnY&format=png&color=5732F1"} label={"Email"} />
                <InputPlace value={password} onChangeTextHandler={setPassword} icon={"https://img.icons8.com/?size=100&id=XkaSssewbJSt&format=png&color=5732F1"} label={"Senha"} />
                <Link href={"/telaCadastro"} style={styles.link}><Text style={styles.linkText}>Não possui uma conta? Cadastre-se</Text></Link>
            </View>
            <Pressable style={styles.button} onPress={fetchData}><Text style={{ color: '#ffffff' }}>Login</Text></Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F6F6F6", // Fundo claro
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
    },
    logo: {
        width: 60,
        height: 60,
        marginBottom: 60,
    },
    title: {
        fontSize: 37,
        fontWeight: 'bold',
        color: "#4380CF", // Azul suave
        marginBottom: 100,
        marginTop: -80,
        width: 400,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 25,
        fontWeight: '400',
        color: "#6c757d",
        marginBottom: 50,
        marginTop: -110,
        width: 400,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4380CF', // Azul suave
        width: 250,
        height: 50, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10, 
        marginTop: -10,
        marginBottom: 10,
    },
    linkText: {
        fontSize: 15,
        marginTop: 100,
        color: '#F6F6F6',
        textDecorationLine: 'underline'
    },
    link: {
        marginTop: 15,
    },
    form: {
        backgroundColor: '#ADD84B', 
        borderRadius: 10,
        width: 330,
        height: 260,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#6c757d",
        shadowOpacity: 0,
        shadowRadius: 3,
        elevation: 5, // Sombra para Android
        padding: 20, // Adiciona espaçamento interno
        marginTop: -80
    }
});