import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image
            source={require('./assets/bm investimentos.png')}
            style={styles.logo}
          />
          <Text style={styles.headerText}>Bem Vindo(a), Matheus</Text>
          {/* <Text style={styles.balanceText}>Balance</Text>
          <Text style={styles.balanceAmount}>$ 15.000</Text> */}
        </View>

        <View style={styles.bankContainer}>
          <Text style={styles.bankText}>Current Wallet Balance</Text>
          <Text style={styles.cardText}>$100.000</Text>
        </View>

      <View style={styles.container}>
          <View style={styles.CryptoContainer}>
          <View style={styles.cryptoInfo}>
          <Image
              source={require('./assets/bitcoib.png')}
              style={styles.cryptoImage}
          />
            <Text style={styles.cryptotext}>BTC</Text>
        </View>
        <Text style={styles.cryptoValue}>$5,000</Text>
    </View>
    </View>
    <View style={styles.container}>
          <View style={styles.CryptoContainer1}>
          <View style={styles.cryptoInfo1}>
          <Image
              source={require('./assets/eth.png')}
              style={styles.cryptoImageEth}
          />
            <Text style={styles.cryptotext1}>Ethereum</Text>
        </View>
        <Text style={styles.Value1}>$4,000</Text>
    </View>
    </View>
    <View style={styles.container}>
          <View style={styles.CryptoContainer2}>
          <View style={styles.cryptoInfo2}>
          <Image
              source={require('./assets/litcoin.png')}
              style={styles.cryptoImageLit}
          />
            <Text style={styles.cryptotext2}>Litcoin</Text>
        </View>
        <Text style={styles.Value2}>$3,000</Text>
        </View>
    </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10101A',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#10101A',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  balanceText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 24,
  },
  bankContainer: {
    backgroundColor:'gray',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  bankText: {
    fontSize: 18,
  },
  cardText: {
    fontSize: 40,
    marginTop: 10,
  },
  CryptoContainer:{
    backgroundColor:'gray',
    margin: 15,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row', 
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal:10,
    justifyContent: 'space-between'
  },
  cryptotext:{
    fontSize: 16,
    marginTop: 7,
  },
  cryptoImage: {
    width: 40, 
    height: 40, 
    marginRight: 10,
  },
  cryptoValue: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10
  },
  cryptoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CryptoContainer1:{
    backgroundColor:'gray',
    margin: 15,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row', 
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal:10,
    justifyContent: 'space-between'
  },
  cryptotext1:{
    fontSize: 16,
    marginTop: 7,
  },
  cryptoImageEth:{
    width: 40, 
    height: 40, 
    marginRight: 10,
  },
  cryptoValue1: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10
  },
  cryptoInfo1: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  CryptoContainer2:{
    backgroundColor:'gray',
    margin: 15,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row', 
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal:10,
    justifyContent: 'space-between'

  },
  cryptotext2:{
    fontSize: 16,
    marginTop: 7,
  },
  cryptoImageLit:{
    width: 40, 
    height: 40, 
    marginRight: 10,
  },
  cryptoValue2: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10
  },
  cryptoInfo2: {
    flexDirection: 'row',
    alignItems: 'center'
  },

});

export default App;
