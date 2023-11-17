import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native';
import { api } from '../API/mokapi'; // Importar o mockApi
import styles from '../Tela_Login/styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Verificar se os campos de email e senha estão preenchidos
    if (!email || !password) {
      // Exibir um alerta informando que os campos estão em branco
      alert('Os campos login e senha estão em branco, Por favor, preencha todos os campos para fazer login.');
      return;
    }

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
      <Image
        source={require('../assets/bm-investimentos.png')}
        style={styles.logo}
      />
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
    </View>
  );
};

export default LoginScreen;