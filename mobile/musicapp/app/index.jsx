import React, { useEffect, useState, useContext } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import InputPlace from "./inputPlace/InputPlace";
import { Link, router } from "expo-router"
import { AppContext } from "../scripts/AppContext";



export default TelaLogin = () => {
    const { user, setUser } = useContext(AppContext)
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const getUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/user/get_user/${id}`)
            const json = await response.json()
            setUser(json)
        } catch (e) {
            console.log(e)
        }
    }
    const fetchData = async () => {
        try {
            console.log(name, email, password)

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
            })
            if (response.status == 200) {
                const data = await response.json()
                getUser(data.user_id)
                router.replace("/telaPerfil")
            }



        } catch (error) {
            console.error("Erro: ", error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View>
                <InputPlace value={email} onChangeTextHandler={setEmail} icon={"https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/8-Email-256.png"} label={"Email"} />
                <InputPlace value={password} onChangeTextHandler={setPassword} icon={"https://cdn-icons-png.flaticon.com/512/696/696975.png"} label={"Senha"} />
                <Link href={"/telaCadastro"}><Text style={{ fontSize: 12 }}>Não possui uma conta? Cadastre-se</Text></Link>

            </View>
            <Pressable style={styles.button} onPress={fetchData}><Text style={{ color: '#ffffff' }}>Login</Text></Pressable>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF",
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 100
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#333333',
        width: 250,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})