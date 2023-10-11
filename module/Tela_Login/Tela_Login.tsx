import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { api } from '../API/mokapi'; // Importar o mockApi
import styles from '../Tela_Login/styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await api.loginUser(email, password);
      if (user) {
        // Autenticação bem-sucedida, fazer a navegação para a próxima tela
        navigation.navigate('CryptoScreen');
        alert('Login bem-sucedido');
      } else {
        alert('Credenciais inválidas, Insira dados corretos!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Faça Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Ainda não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CryptoScreen')}>
        <Text style={styles.linkText}>Ir para a Tela de Criptomoedas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;