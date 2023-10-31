import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#10101A'
    },
    cryptoImag: {
      width: 100,
      height: 100,
      marginBottom: 35,
      borderRadius: 50,
      overflow: 'hidden',
    },
    cryptovalue: {
      fontSize: 20,
      marginBottom: 40,
      color:'white'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
    },
    buyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'white',
    },
    sellButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'white',
    },
  });
  