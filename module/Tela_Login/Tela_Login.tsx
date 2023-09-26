// import React from 'react';
// import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

// const LoginScreen = ({ navigation }) => {
//     const handleLogin = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
// };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Faça Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Usuário"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Senha"
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.linkText}>Ainda não tem uma conta? Cadastre-se</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#10101A',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 20,
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     width: 200,
//     height: 40,
//     margin: 10,
//     paddingLeft: 10,
//     borderRadius: 5,
//   },
// });


// export default LoginScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { api } from '../API/mokapi'; // Importar o mockApi
import styles from './styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await api.loginUser(email, password);
      if (user) {
        // Autenticação bem-sucedida, fazer a navegação para a próxima tela
        navigation.navigate('Home');
      } else {
        alert('Credenciais inválidas');
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
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#10101A',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 20,
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     width: 200,
//     height: 40,
//     margin: 10,
//     paddingLeft: 10,
//     borderRadius: 5,
//   },
//   linkText: {
//     color: 'white',
//     marginTop: 10,
//   },
// });

export default LoginScreen;
