import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput, Button } from 'react-native';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui (por exemplo, verificar se username e password estão corretos)
    // Se a autenticação for bem-sucedida, defina isLoggedIn como true
    setIsLoggedIn(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? (
        // Tela de criptomoedas
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <Image
              source={require('./assets/bm investimentos.png')}
              style={styles.logo}
            />
            <Text style={styles.headerText}>Bem Vindo(a), Matheus</Text>
          </View>

          {/* Restante do código da tela das criptomoedas */}
        </ScrollView>
      ) : (
        // Tela de login
        <View style={styles.loginContainer}>
          <Image
            source={require('./assets/bm investimentos.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Faça Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10101A',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#10101A',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#10101A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
});

export default App;