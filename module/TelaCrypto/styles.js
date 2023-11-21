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
    padding: 5,
    borderRadius: 50,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  cryptoIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cryptoInfo: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginLeft: 10, 
  },
  // cryptoDescription: {
  //   color: 'white',
  //   fontSize: 16,
  //   marginLeft: 50,
  // },
  cryptoName: {
    color: 'black',
    fontSize: 18,
    marginTop: 10,

  },
  cryptoType: {
    color: 'white',
    fontSize: 16,
    marginLeft: 50, 
  },
  cryptoValue: {
    color: 'white',
    fontSize: 16,
    marginLeft: 50,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },
  chatButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
    position: 'absolute',
    top: -5,
    right: 20,
  },
  chatButtonText: {
    color: 'black',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white', 
    textAlign:"center",
    width: '100%',
    
  },
  walletValue: {
    fontSize: 20,
    color: 'white', 
    marginBottom: 16,
    textAlign:"center",
    width: '100%',
  },
});


