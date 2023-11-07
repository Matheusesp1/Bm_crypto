import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../TelaCrypto/styles';


const CryptoScreen = ({ navigation }) => {
  const cryptoList = [
    { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
    { name: 'Ethereum', icon: require('../assets/eth.png') },
    { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
    { name: 'Ethereum', icon: require('../assets/eth.png') },
    { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
    { name: 'Ethereum', icon: require('../assets/eth.png') },
    { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
    { name: 'Ethereum', icon: require('../assets/eth.png') },
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
  );
};

export default CryptoScreen;



// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import styles from '../TelaCrypto/styles';

// const CryptoScreen = ({ navigation }) => {
//   const cryptoList = [
//     { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
//     { name: 'Ethereum', icon: require('../assets/eth.png') },
//     { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
//     { name: 'Ethereum', icon: require('../assets/eth.png') },
//     { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
//     { name: 'Ethereum', icon: require('../assets/eth.png') },
//     { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
//     { name: 'Ethereum', icon: require('../assets/eth.png') },
//   ];

//   const handleCryptoSelection = (crypto) => {
//     // Navegar para a tela de compra/venda com a criptomoeda selecionada
//     navigation.navigate('CompraVenda', { crypto });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Escolha uma Criptomoeda</Text>
//       {cryptoList.map((crypto) => (
//         <TouchableOpacity
//           key={crypto.symbol}
//           style={styles.cryptoCard}
//           onPress={() => handleCryptoSelection(crypto)}
//         >
//           <Image source={crypto.icon} style={styles.cryptoIcon} />
//           <Text style={styles.cryptoName}>{crypto.name}</Text>
//           <Text style={styles.cryptoSymbol}>{crypto.symbol}</Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// export default CryptoScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import styles from '../TelaCrypto/styles';

// const CryptoScreen = () => {
//   const [cryptoData, setCryptoData] = useState([]);

//   useEffect(() => {
//     // Aqui você fará a chamada à API do Yahoo para obter os dados das criptomoedas
//     // Vou fornecer um exemplo de como você pode fazer isso usando a função fetch
//     fetch('https://query1.finance.yahoo.com/v1/finance/quotes?symbols=BTC-USD,ETH-USD,XRP-USD')
//       .then(response => response.json())
//       .then(data => {
//         setCryptoData(data.quoteResponse.result);
//       })
//       .catch(error => console.error(error));
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>Criptomoedas</Text>
//       <FlatList
//         data={cryptoData}
//         keyExtractor={(item) => item.symbol}
//         renderItem={({ item }) => (
//           <View style={styles.cryptoItem}>
//             <Text style={styles.cryptoName}>{item.longName}</Text>
//             <Text style={styles.cryptoPrice}>{item.regularMarketPrice}</Text>
//           </View>
          
//         )}
//       />
//     </View>
//   );
// };


// export default CryptoScreen;

//           <View style={styles.bankContainer}>
//         <Text style={styles.bankText}>Current Wallet Balance</Text>
//         <Text style={styles.cardText}>$100.000</Text>
//         </View>