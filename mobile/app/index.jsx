import React, { useEffect, useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import InputPlace from "./inputPlace/InputPlace";
import { Link, router } from "expo-router";
import { AppContext } from "../scripts/AppContext";

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
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />

            <Text style={styles.title}>Bem-vindo ao Echo</Text>
            <Text style={styles.subtitle}>Faça Login</Text>
            <View style={styles.form}>
                <InputPlace value={email} onChangeTextHandler={setEmail} icon={"https://img.icons8.com/?size=100&id=PedPR10iVAnY&format=png&color=5732F1"} label={"Email"} />
                <InputPlace value={password} onChangeTextHandler={setPassword} icon={"https://img.icons8.com/?size=100&id=XkaSssewbJSt&format=png&color=5732F1"} label={"Senha"} />
                <Link href={"/telaCadastro"} style={styles.link}><Text style={styles.link_text}>Não possui uma conta? Cadastre-se</Text></Link>
            </View>
            <Pressable style={styles.button} onPress={fetchData}><Text style={{ color: '#ffffff' }}>Login</Text></Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0b071b",
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: -30,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#5732f1",
        marginBottom: -20,
        marginTop: -15,
        width: 400,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: "#ffffff",
        marginBottom: -20,
        marginTop: -20,
        width: 400,
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#5732f1',
        width: 250,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: -10
    },
    link_text: {
        fontSize: 15,
        marginTop: 100,
        color: '#FFFFFF'
    },
    link: {
        marginTop: 15
    },
    form: {
        backgroundColor: '#160E37',
        borderRadius: 7,
        width: 400,
        height: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});