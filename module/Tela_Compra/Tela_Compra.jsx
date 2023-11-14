import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../Tela_Compra/styles';

// Importe as imagens diretamente
import bitcoinIcon from '../assets/bitcoin.png';
import ethereumIcon from '../assets/eth.png';

const BuyScreen = ({ route }) => {
  const { cryptoId } = route.params;

  const cryptoList = [
    { id: 1, name: 'Bitcoin', icon: require('../assets/bitcoin.png'), value: 173.66718 },
    { id: 2, name: 'Ethereum', icon: require('../assets/eth.png'), value: 345.12345 },
    { id: 3, name: 'Stellar', icon: require('../assets/stellarcoin.png'), value: 789.36278 },
    { id: 4, name: 'Litcoin', icon: require('../assets/litcoin.png'), value: 123.9870 },
    // Adicione mais informações sobre criptomoedas conforme necessário
  ];

  const selectedCrypto = cryptoList.find(crypto => crypto.id === cryptoId);

  if (!selectedCrypto) {
    return (
      <View>
        <Text>Erro: Criptomoeda não encontrada</Text>
      </View>
    );
  }

  const handleBuy = () => {
    alert('Ação de compra realizada');
    console.log('Ação de compra realizada');
  };

  const handleSell = () => {
    alert('Ação de venda realizada');
    console.log('Ação de venda realizada');
  };

  return (
    <View style={styles.container}>
      <Image source={selectedCrypto.icon} style={styles.cryptoImage} />
      <Text style={styles.cryptoName}>{selectedCrypto.name}</Text>
      <Text style={styles.cryptoValue}>Valor: ${selectedCrypto.value}</Text>
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

// // import React from 'react';
// // import { View, Text, Image, TouchableOpacity } from 'react-native';
// // import styles from '../Tela_Compra/styles';

// // const BuyScreen = ({ route }) => {
// //   const { cryptoId } = route.params;

// //   // Suponha que você tenha um array de criptomoedas com seus IDs e informações
// //   const cryptoList = [
// //     { id: 1, name: 'Bitcoin', icon: require('../assets/bitcoin.png'), value: 173.66718 },
// //     { id: 2, name: 'Ethereum', icon: require('../assets/ethereum.png'), value: 345.12345 },
// //     // ... Adicione outras criptomoedas conforme necessário
// //   ];

// //   // Encontrar a criptomoeda com o ID correspondente
// //   const selectedCrypto = cryptoList.find(crypto => crypto.id === cryptoId);

// //   if (!selectedCrypto) {
// //     return (
// //       <View>
// //         <Text>Erro: Criptomoeda não encontrada</Text>
// //       </View>
// //     );
// //   }

// //   const handleBuy = () => {
// //     alert('Ação de compra realizada');
// //     console.log('Ação de compra realizada');
// //   };

// //   const handleSell = () => {
// //     alert('Ação de venda realizada');
// //     console.log('Ação de venda realizada');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Image source={selectedCrypto.icon} style={styles.cryptoImage} />
// //       <Text style={styles.cryptoName}>{selectedCrypto.name}</Text>
// //       <Text style={styles.cryptoValue}>Valor: ${selectedCrypto.value}</Text>
// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
// //           <Text>Comprar</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.sellButton} onPress={handleSell}>
// //           <Text>Vender</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // export default BuyScreen;


// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';
// import styles from '../Tela_Compra/styles';

// const BuyScreen = ({ route }) => {
//   const { cryptoId } = route.params;

//   // Suponha que você tenha um array de criptomoedas com seus IDs e informações
//   const cryptoList = [
//     { id: 1, name: 'Bitcoin', icon: require('../assets/bitcoin.png'), value: 173.66718 },
//     { id: 2, name: 'Ethereum', icon: require('../assets/eth.png'), value: 345.12345 },
//     // ... Adicione outras criptomoedas conforme necessário
//   ];

//   // Encontrar a criptomoeda com o ID correspondente
//   const selectedCrypto = cryptoList.find(crypto => crypto.id === cryptoId);

//   if (!selectedCrypto) {
//     return (
//       <View>
//         <Text>Erro: Criptomoeda não encontrada</Text>
//       </View>
//     );
//   }

//   const handleBuy = () => {
//     alert('Ação de compra realizada');
//     console.log('Ação de compra realizada');
//   };

//   const handleSell = () => {
//     alert('Ação de venda realizada');
//     console.log('Ação de venda realizada');
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={selectedCrypto.icon} style={styles.cryptoImage} />
//       <Text style={styles.cryptoName}>{selectedCrypto.name}</Text>
//       <Text style={styles.cryptoValue}>Valor: ${selectedCrypto.value}</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
//           <Text>Comprar</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.sellButton} onPress={handleSell}>
//           <Text>Vender</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default BuyScreen;
