import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10101A',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  cryptoCard: {
    backgroundColor: 'white',
    padding: 0,
    borderRadius: 7,
    marginBottom: 7,
    alignItems: 'center',
  },
  cryptoIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
      
  },
  cryptoName: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,
  },
  cryptoSymbol: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
    
  },
  chatButton: {
    position: 'absolute',
    bottom: '30%',  
    right: '1%',  
    backgroundColor: 'white',
    width: '15%',  
    height: '15%', 
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  chatButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },

});