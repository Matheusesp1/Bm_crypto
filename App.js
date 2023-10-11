import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './module/Tela_Login/Tela_Login';
import SignUpScreen from './module/Tela_Cadastro/Tela_Cadasto';
import CryptoScreen from './module/TelaCrypto/Tela_Crypto'; // Importe a tela de criptomoedas

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="CryptoScreen" component={CryptoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './module/Tela_Login/Tela_Login';
// import SignUpScreen from './module/Tela_Cadastro/Tela_Cadasto';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, Button } from 'react-native';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password,setPassword] = useState('');

//   const handleLogin = () => {
//     // Lógica de autenticação aqui (por exemplo, verificar se username e password estão corretos)
//     // Se a autenticação for bem-sucedida, defina isLoggedIn como true
//     setIsLoggedIn(true);
//   };

// utilize esse codigo para criar uma tela que tenha as criptomedas que vão ser usadas na nossa aplicação e 
// gostaria tambem de uma explicação sobre usar a api do yahoo para se obter os dados das criptomoedas e ações 
// levando em conta tudo em sua implementação

//   return (
//     <SafeAreaView style={styles.container}>
//       {isLoggedIn ? (
//         // Tela de criptomoedas
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           <View style={styles.header}>
//             {/* <Image
//               source={require('../../assets/perfil.png')}
//               style={styles.logo}
//             /> */}
//             <Text style={styles.headerText}>Bem Vindo(a), Matheus</Text>
//           </View>

//           <View style={styles.bankContainer}>
//         <Text style={styles.bankText}>Current Wallet Balance</Text>
//         <Text style={styles.cardText}>$100.000</Text>
//         </View>

//         <View style={styles.container}>
//         <View style={styles.CryptoContainer}>
//         <View style={styles.cryptoInfo}>
//     {/* <Image
//       source={require('../../assets/bitcoin.png')}
//       style={styles.cryptoImage}
//     /> */}
//       <Text style={styles.cryptotext}>BTC</Text>
//       </View>
//         <Text style={styles.cryptoValue}>$5,000</Text>
//       </View>
//     </View>
//         <View style={styles.container}>
//         <View style={styles.CryptoContainer1}>
//         <View style={styles.cryptoInfo1}>
//       {/* <Image
//     source={require('../../assets/eth.png')}
//     style={styles.cryptoImageEth}
//       /> */}
//           <Text style={styles.cryptotext1}>Ethereum</Text>
//       </View>
//       <Text style={styles.Value1}>$4,000</Text>
//       </View>
//         </View>
//       <View style={styles.container}>
//         <View style={styles.CryptoContainer2}>
//       <View style={styles.cryptoInfo2}>
//       {/* <Image
//         source={require('../../assets/litcoin.png')}
//         style={styles.cryptoImageLit}
//       /> */}
//         <Text style={styles.cryptotext2}>Litcoin</Text>
//       </View>
//         <Text style={styles.Value2}>$3,000</Text>
//       </View>
//       </View>
//       <View style={styles.container}>
//         <View style={styles.CryptoContainer2}>
//       <View style={styles.cryptoInfo2}>
//       {/* <Image
//         source={require('../../assets/litcoin.png')}
//         style={styles.cryptoImageLit}
//       /> */}
//         <Text style={styles.cryptotext2}>coin1</Text>
//       </View>
//         <Text style={styles.Value2}>$3,000</Text>
//       </View>
//       </View>
//       <View style={styles.container}>
//         <View style={styles.CryptoContainer2}>
//       <View style={styles.cryptoInfo2}>
//       {/* <Image
//         source={require('../../assets/litcoin.png')}
//         style={styles.cryptoImageLit}
//       /> */}
//         <Text style={styles.cryptotext2}>coin</Text>
//       </View>
//         <Text style={styles.Value2}>$3,000</Text>
//       </View>
//       </View>
//         </ScrollView>
//       ) : (
//         // Tela de login
//         <View style={styles.loginContainer}>
//           {/* <Image
//             source={require('../../assets/bm_investimentos.png')}
//             style={styles.logo}
//           /> */}
//           <Text style={styles.headerText}>Faça Login</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Usuário"
//             onChangeText={(text) => setUsername(text)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Senha"
//             secureTextEntry
//             onChangeText={(text) => setPassword(text)}
//           />
//           <Button title="Login" onPress={handleLogin} />
//           <Button title="Cadastro" onPress={handleLogin} />
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#10101A',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   header: {
//     backgroundColor: '#10101A',
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   logo: {
//     width: 100,
//     height: 100,
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 20,
//     marginTop: 10,
//   },
//   loginContainer: {
//     flex: 1,
//     backgroundColor: '#10101A',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
//   input: {
//     backgroundColor: 'white',
//     width: 200,
//     height: 40,
//     margin: 10,
//     paddingLeft: 10,
//     borderRadius: 5,
//   },
  
//     scrollContainer: {
//       flexGrow: 1,
//     },
//     header: {
//       backgroundColor: '#10101A',
//       alignItems: 'center',
//       paddingTop: 20,
//     },
//     logo: {
//       width: 100,
//       height: 100,
//     },
//     headerText: {
//       color: 'white',
//       fontSize: 20,
//       marginTop: 10,
//     },
//     balanceText: {
//       color: 'white',
//       fontSize: 16,
//       marginTop: 10,
//     },
//     balanceAmount: {
//       color: 'white',
//       fontSize: 24,
//     },
//     bankContainer: {
//       backgroundColor:'gray',
//       margin: 20,
//       padding: 20,
//       borderRadius: 10,
//     },
//     bankText: {
//       fontSize: 18,
//     },
//     cardText: {
//       fontSize: 40,
//       marginTop: 10,
//     },
//     CryptoContainer:{
//       backgroundColor:'gray',
//       margin: 15,
//       padding: 10,
//       borderRadius: 20,
//       flexDirection: 'row', 
//       alignItems: 'center',
//       marginVertical: 5,
//       marginHorizontal:10,
//       justifyContent: 'space-between'
//     },
//     cryptotext:{
//       fontSize: 16,
//       marginTop: 7,
//     },
//     cryptoImage: {
//       width: 40, 
//       height: 40, 
//       marginRight: 10,
//     },
//     cryptoValue: {
//       fontSize: 16,
//       color: 'black',
//       marginLeft: 10
//     },
//     cryptoInfo: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     CryptoContainer1:{
//       backgroundColor:'gray',
//       margin: 15,
//       padding: 10,
//       borderRadius: 20,
//       flexDirection: 'row', 
//       alignItems: 'center',
//       marginVertical: 5,
//       marginHorizontal:10,
//       justifyContent: 'space-between'
//     },
//     cryptotext1:{
//       fontSize: 16,
//       marginTop: 7,
//     },
//     cryptoImageEth:{
//       width: 40, 
//       height: 40, 
//       marginRight: 10,
//     },
//     cryptoValue1: {
//       fontSize: 16,
//       color: 'black',
//       marginLeft: 10
//     },
//     cryptoInfo1: {
//       flexDirection: 'row',
//       alignItems: 'center'
//     },
//     CryptoContainer2:{
//       backgroundColor:'gray',
//       margin: 15,
//       padding: 10,
//       borderRadius: 20,
//       flexDirection: 'row', 
//       alignItems: 'center',
//       marginVertical: 5,
//       marginHorizontal:10,
//       justifyContent: 'space-between'
  
//     },
//     cryptotext2:{
//       fontSize: 16,
//       marginTop: 7,
//     },
//     cryptoImageLit:{
//       width: 40, 
//       height: 40, 
//       marginRight: 10,
//     },
//     cryptoValue2: {
//       fontSize: 16,
//       color: 'black',
//       marginLeft: 10
//     },
//     cryptoInfo2: {
//       flexDirection: 'row',
//       alignItems: 'center'
//     },

// });

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from '../Bm_crypto/module/Tela_Login/Tela_Login';
// import SignUpScreen from '../Bm_crypto/module/Tela_Login/Tela_Cadasto';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Cadastro" component={SignUpScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;