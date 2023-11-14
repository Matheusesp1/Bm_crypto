import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
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
      {/* <TouchableOpacity onPress={() => navigation.navigate('CryptoScreen')}>
        <Text style={styles.linkText}>Ir para a Tela de Criptomoedas</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default LoginScreen;

// import React, { useState } from 'react';

// import { useNavigation } from '@react-navigation/native';
// import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
// import { api } from '../API/mokapi'; // Importar o mockApi
// import Toast from 'react-native-simple-toast'; // Importar a biblioteca de toasts
// import styles from '../Tela_Login/styles';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     if (!email || !password) {
//       // Exibir um pop-up de erro se o email ou senha estiverem vazios
//       Toast.show('Email e senha são obrigatórios. Insira os dados corretamente.');
//       return;
//     }

//     try {
//       const user = await api.loginUser(email, password);
//       if (user) {
//         // Autenticação bem-sucedida, fazer a navegação para a próxima tela
//         navigation.navigate('CryptoScreen');
//         alert('Login bem-sucedido');
//       } else {
//         // Exibir um pop-up de erro se as credenciais estiverem incorretas
//         Toast.show('Credenciais inválidas. Insira dados corretos!');
//       }
//     } catch (error) {
//       // Exibir um pop-up de erro para outros erros
//       Toast.show('Ocorreu um erro durante o login. Tente novamente mais tarde.');
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/bm-investimentos.png')}
//         style={styles.logo}
//       />
//       <Text style={styles.headerText}>Faça Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Senha"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.linkText}>Ainda não tem uma conta? Cadastre-se</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default LoginScreen;

// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
// import { api } from '../API/mokapi'; // Importar o mockApi
// import Toast from 'react-native-simple-toast'; // Importar a biblioteca de toasts
// import styles from '../Tela_Login/styles';

// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     try {
//       const user = await api.loginUser(email, password);
//       if (user) {
//         // Autenticação bem-sucedida, fazer a navegação para a próxima tela
//         navigation.navigate('CryptoScreen');
//         alert('Login bem-sucedido');
//       } else {
//         // Exibir um pop-up de erro usando a biblioteca react-native-simple-toast
//         Toast.show('Credenciais inválidas. Insira dados corretos!');
//       }
//     } catch (error) {
//       // Exibir um pop-up de erro para outros erros
//       Toast.show('Ocorreu um erro durante o login. Tente novamente mais tarde.');
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../assets/bm-investimentos.png')}
//         style={styles.logo}
//       />
//       <Text style={styles.headerText}>Faça Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Senha"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLogin} />
//       <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//         <Text style={styles.linkText}>Ainda não tem uma conta? Cadastre-se</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default LoginScreen;
