import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { AppContext } from "../../scripts/AppContext";
import * as ImagePicker from 'expo-image-picker';    //npm install expo-image-picker
import { router } from "expo-router";

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    nome: '',
    email: '',
    foto: '',
  });
  const [novaSenha, setNovaSenha] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');

  // Função para carregar dados do usuário da API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://sua-api.com/usuario/1'); // Substitua com o endpoint real
        setUser(response.data);
      } catch (error) {
        console.log('Erro ao carregar dados do usuário:', error);
      }
    };
    fetchUserData();
  }, []);

  // Função para selecionar imagem da galeria e atualizar a foto de perfil
  const handleSelectImage = async () => {
    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (result.assets) {
      const foto = result.assets[0];
      handleUpdatePhoto(foto.uri);
    }
  };

  // Função para enviar a nova foto para a API
  const handleUpdatePhoto = async (fotoUri) => {
    const formData = new FormData();
    formData.append('foto', {
      uri: fotoUri,
      type: 'image/jpeg',
      name: 'foto.jpg',
    });

    try {
      const response = await axios.put('https://sua-api.com/usuario/1/foto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUser({ ...user, foto: response.data.url_foto });
      Alert.alert('Sucesso', 'Foto de perfil atualizada com sucesso!');
    } catch (error) {
      console.log('Erro ao atualizar foto:', error);
      Alert.alert('Erro', 'Não foi possível atualizar a foto.');
    }
  };

  // Função para trocar a senha
  const handleChangePassword = async () => {
    try {
      await axios.put('https://sua-api.com/usuario/1/senha', {
        senhaAtual,
        novaSenha,
      });
      Alert.alert('Sucesso', 'Senha alterada com sucesso!');
    } catch (error) {
      console.log('Erro ao trocar senha:', error);
      Alert.alert('Erro', 'Não foi possível trocar a senha.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil</Text>
      <Image source={{ uri: user.foto }} style={styles.profileImage} />

      <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
        <Text style={styles.buttonText}>Alterar Foto</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Nome</Text>
      <Text style={styles.info}>{user.nome}</Text>

      <Text style={styles.label}>Email</Text>
      <Text style={styles.info}>{user.email}</Text>

      <Text style={styles.label}>Senha Atual</Text>
      <TextInput
        style={styles.input}
        value={senhaAtual}
        onChangeText={setSenhaAtual}
        secureTextEntry
      />

      <Text style={styles.label}>Nova Senha</Text>
      <TextInput
        style={styles.input}
        value={novaSenha}
        onChangeText={setNovaSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Alterar Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;





const handleSendImage = async () => {
    try{
        const data = {
            "file": Image,
            "upload_preset": 'ml_default',
        }
        const res = await fetch('http://apo.cloudinary.com/v1_1/dbollofao/upload', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        setImage(result.url)
        SetUserInfo({ ...userInfo, profile_image: result.url})
        await saveNewImageURLonBackend(result)
    }
    catch (e) {
        console.log(e)
    }
}