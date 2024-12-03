import React, { useEffect, useState } from "react";
import { Text, TextInput, View, StyleSheet, Image, Pressable } from "react-native";
import InputPlace from "./inputPlace/InputPlace";


export default TelaCadastro = () => {

    const [name, setName] = React.useState('');
    const [surname, setSurName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [birthdate, setBirthdate] = React.useState('');
    const [password, setPassword] = React.useState('');

    const fetchData = async () => {
        try {
            console.log(name, email, password)

            const response = await fetch('http://localhost:8000/auth/register', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    "nome": name,
                    "sobrenome": surname,
                    "email": email,
                    "nascimento": birthdate,
                    "senha": password
                })
            }
            ).then((response) => {
                if (response.status == 201)
                    alert('Usuário criado com sucesso')
            })
        } catch (error) {
            console.error("Erro: ", error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View>
                <InputPlace value={name} onChangeTextHandler={setName} icon={"https://cdn2.iconfinder.com/data/icons/user-interface-169/32/about-256.png"} label={"Nome"} />
                <InputPlace value={surname} onChangeTextHandler={setSurName} icon={"https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/8-Email-256.png"} label={"Sobrenome"} />
                <InputPlace value={email} onChangeTextHandler={setEmail} icon={"https://cdn-icons-png.flaticon.com/512/696/696975.png"} label={"Email"} />
                <InputPlace value={birthdate} onChangeTextHandler={setBirthdate} icon={"https://cdn-icons-png.flaticon.com/512/696/696975.png"} label={"Data de nascimento"} />
                <InputPlace value={password} onChangeTextHandler={setPassword} icon={"https://cdn-icons-png.flaticon.com/512/696/696975.png"} label={"Senha"} />
            </View>

            <Pressable style={styles.button} onPress={fetchData}><Text style={{ color: '#ffffff' }}>Sign Up</Text></Pressable>

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