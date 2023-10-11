import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { api } from '../API/mokapi'; // Importar o mockApi
import styles from '../Tela_Cadastro/styles';

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
      try {
        const newUser = await api.createUser({ name, email, password });
        alert(`Usuário ${newUser.name} cadastrado com sucesso!`);
        navigation.navigate('Login');
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>CADASTRO</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={name}
            onChangeText={setName}
          />
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
          <Button title="Cadastrar" onPress={handleSignUp} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Já tem uma conta? Faça Login</Text>
          </TouchableOpacity>
        </View>
      );
};


export default SignUpScreen;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

// const SignUpScreen = ({ navigation }) => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
  
//     const handleSignUp = async () => {
//       try {
//         const newUser = await api.createUser({ name, email, password });
//         alert(`Usuário ${newUser.name} cadastrado com sucesso!`);
//         navigation.navigate('Login');
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     return (
//         <View style={styles.container}>
//           <Text style={styles.headerText}>CADASTRO</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Nome"
//             value={name}
//             onChangeText={setName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Senha"
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//           />
//           <Button title="Cadastrar" onPress={handleSignUp} />
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <Text style={styles.linkText}>Já tem uma conta? Faça Login</Text>
//           </TouchableOpacity>
//         </View>
//       );
//     };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#10101A',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 54,
//     marginBottom: 10,
//     fontFamily: 'BebasNeue_400Regular',
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

// export default SignUpScreen;


// import React from 'react';
// import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

// const SignUpScreen = ({ handleSignUp }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>CADASTRO</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Nome"
//       />
//       {/* Adicione os outros campos para cadastro */}
//       <Button title="Cadastrar" onPress={handleSignUp} />
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
//     fontSize: 54,
//     marginBottom: 10,
//     fontFamily: 'BebasNeue_400Regular',
//   },
//   input: {
//     backgroundColor: 'white',
//     width: 200,
//     height: 40,
//     margin: 10,
//     paddingLeft: 10,
//     borderRadius: 5,
//   },
//   // Adicione os estilos para os outros campos, se necessário
// });

// export default SignUpScreen;

// import React from 'react';
// import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

// const SignUpScreen = ({ navigation }) => {
//   const handleSignUp = () => {
//     // Lógica de cadastro aqui
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>CADASTRO</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Nome"
//       />
//       {/* Adicione os outros campos para cadastro */}
//       <Button title="Cadastrar" onPress={handleSignUp} />
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.linkText}>Já tem uma conta? Faça Login</Text>
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
//     fontSize: 54,
//     marginBottom: 10,
//     fontFamily: 'BebasNeue_400Regular',
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

// export default SignUpScreen;