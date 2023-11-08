import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../TelaCrypto/styles';


const CryptoScreen = ({ navigation }) => {
  const cryptoList = [
    { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
    { name: 'Ethereum', icon: require('../assets/eth.png') },
    { name: 'Stellar', icon: require('../assets/stellarcoin.png') },
    { name: 'Litcoin', icon: require('../assets/litcoin.png') },
    // { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
    // { name: 'Ethereum', icon: require('../assets/eth.png') },
    // { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
    // { name: 'Ethereum', icon: require('../assets/eth.png') },
  ];

  const handleCryptoSelection = (crypto) => {
    // Navegaçao para a tela de compra/venda com a criptomoeda selecionada
    navigation.navigate('BuyScreen', { crypto });
  
  };
  const goToChatScreen = () => {
    navigation.navigate('ChatScreen')
  };

  return (
    <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Escolha uma Criptomoeda</Text>
      <TouchableOpacity style = {styles.chatButton} onPress = {goToChatScreen}> 
      <Text style={styles.chatButontext}>chat</Text>
      </TouchableOpacity>
      {cryptoList.map((crypto) => (
        <TouchableOpacity
          key={crypto.symbol}
          style={styles.cryptoCard}
          onPress={() => handleCryptoSelection(crypto)}
        >
          <Image source={crypto.icon} style={styles.cryptoIcon} />
          <Text style={styles.cryptoName}>{crypto.name}</Text>
          <Text style={styles.cryptoSymbol}>{crypto.symbol}</Text>
        </TouchableOpacity>
      ))}
    </View>
    </View>
  );
};

export default CryptoScreen;