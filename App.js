import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './module/Tela_Login/Tela_Login';
import SignUpScreen from './module/Tela_Cadastro/Tela_Cadasto';
import CryptoScreen from './module/TelaCrypto/Tela_Crypto'; 
import ChatScreen from './module/Tela_Chat/Tela_Chat'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="CryptoScreen" component={CryptoScreen} />
        <Stack.Screen name ="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
