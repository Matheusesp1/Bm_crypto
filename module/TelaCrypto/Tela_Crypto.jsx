import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../TelaCrypto/styles';

const CryptoScreen = ({ navigation }) => {
  const cryptoList = [
    { id: 1, name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
    { id: 2, name: 'Ethereum', icon: require('../assets/eth.png') },
    { id: 3, name: 'Stellar', icon: require('../assets/stellarcoin.png') },
    { id: 4, name: 'Litcoin', icon: require('../assets/litcoin.png') },
    // Adicione mais criptomoedas conforme necessário
  ];

  const handleCryptoSelection = (crypto) => {
    navigation.navigate('BuyScreen', { cryptoId: crypto.id });
  };

  const goToChatScreen = () => {
    navigation.navigate('ChatScreen')
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Escolha uma Criptomoeda</Text>
        <TouchableOpacity style={styles.chatButton} onPress={goToChatScreen}> 
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
        {cryptoList.map((crypto) => (
          <TouchableOpacity
            key={crypto.id}
            style={styles.cryptoCard}
            onPress={() => handleCryptoSelection(crypto)}
          >
            <Image source={crypto.icon} style={styles.cryptoIcon} />
            <Text style={styles.cryptoName}>{crypto.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CryptoScreen;


// import React from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import styles from '../TelaCrypto/styles';

// const CryptoScreen = ({ navigation }) => {
//   const cryptoList = [
//     { id: 1, name: 'Bitcoin', icon: require('../assets/bitcoin.png')},
//     { id: 2, name: 'Ethereum', icon: require('../assets/eth.png')},
//     { id: 3, name: 'Stellar', icon: require('../assets/stellarcoin.png')},
//     { id: 4, name: 'Litecoin', icon: require('../assets/litcoin.png')},
//   ];

//   const handleCryptoSelection = (crypto) => {
//     navigation.navigate('BuyScreen', { crypto });
//   };

//   const goToChatScreen = () => {
//     navigation.navigate('ChatScreen');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerText}>Escolha uma Criptomoeda</Text>
//         <TouchableOpacity style={styles.chatButton} onPress={goToChatScreen}> 
//           <Text style={styles.chatButtonText}>chat</Text>
//         </TouchableOpacity>
//         {cryptoList.map((crypto) => (
//           <TouchableOpacity
//             key={crypto.id}
//             style={styles.cryptoCard}
//             onPress={() => handleCryptoSelection(crypto)}
//           >
//             <Image source={crypto.icon} style={styles.cryptoIcon} />
//             <Text style={styles.cryptoName}>{crypto.name}</Text>
//             <Text style={styles.cryptoSymbol}>{crypto.symbol}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default CryptoScreen;


// // import React from 'react';
// // import { View, Text, TouchableOpacity, Image } from 'react-native';
// // import styles from '../TelaCrypto/styles';


// // const CryptoScreen = ({ navigation }) => {
// //   const cryptoList = [
// //     { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
// //     { name: 'Ethereum', icon: require('../assets/eth.png') },
// //     { name: 'Stellar', icon: require('../assets/stellarcoin.png') },
// //     { name: 'Litcoin', icon: require('../assets/litcoin.png') },
// //     // { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
// //     // { name: 'Ethereum', icon: require('../assets/eth.png') },
// //     // { name: 'Bitcoin', icon: require('../assets/bitcoin.png') },
// //     // { name: 'Ethereum', icon: require('../assets/eth.png') },
// //   ];

// //   const handleCryptoSelection = (crypto) => {
// //     // Navegaçao para a tela de compra/venda com a criptomoeda selecionada
// //     navigation.navigate('BuyScreen', { crypto });
  
// //   };
// //   const goToChatScreen = () => {
// //     navigation.navigate('ChatScreen')
// //   };

// //   return (
// //     <View style={styles.container}>
// //     <View style={styles.headerContainer}>
// //       <Text style={styles.headerText}>Escolha uma Criptomoeda</Text>
// //       <TouchableOpacity style = {styles.chatButton} onPress = {goToChatScreen}> 
// //       <Text style={styles.chatButontext}>chat</Text>
// //       </TouchableOpacity>
// //       {cryptoList.map((crypto) => (
// //         <TouchableOpacity
// //           key={crypto.symbol}
// //           style={styles.cryptoCard}
// //           onPress={() => handleCryptoSelection(crypto)}
// //         >
// //           <Image source={crypto.icon} style={styles.cryptoIcon} />
// //           <Text style={styles.cryptoName}>{crypto.name}</Text>
// //           <Text style={styles.cryptoSymbol}>{crypto.symbol}</Text>
// //         </TouchableOpacity>
// //       ))}
// //     </View>
// //     </View>
// //   );
// // };

// // export default CryptoScreen;