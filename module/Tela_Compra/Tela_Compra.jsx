import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../Tela_Compra/styles';


const BuyScreen = () => {
  const cryptoImag = require('../assets/bitcoin.png'); 
  const cryptovalue = 5000; 

  const handleBuy = () => {
    // Lógica para a ação de compra
    console.log('Ação de compra realizada');
  };

  const handleSell = () => {
    // Lógica para a ação de venda
    console.log('Ação de venda realizada');
  };

  return (
    <View style={styles.container}>
      <Image source={cryptoImag} style={styles.cryptoImag} />
      <Text style={styles.cryptovalue}>Valor: ${cryptovalue}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
          <Text>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sellButton} onPress={handleSell}>
          <Text>Vender</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default BuyScreen;