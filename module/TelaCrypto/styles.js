import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  cryptoCard: {
    backgroundColor: '#0000CD',
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row', // Alteração aqui para exibir na horizontal
    justifyContent: 'space-between', // Espaço igual entre os elementos
  },
  cryptoIcon: {
    width: 50,
    height: 50,
  },
  cryptoInfo: {
    flexDirection: 'row', // Exibe as informações na mesma linha
    alignItems: 'center', // Centraliza os elementos verticalmente
    marginLeft: 10, // Adiciona um pequeno espaçamento entre o ícone e as informações
  },
  cryptoDescription: {
    color: 'white',
    fontSize: 16,
    marginLeft: 50, // Espaçamento entre as informações
  },
  cryptoName: {
    color: 'white',
    fontSize: 16,
    marginLeft: 50, // Espaçamento entre as informações
  },
  cryptoType: {
    color: 'white',
    fontSize: 16,
    marginLeft: 50, // Espaçamento entre as informações
  },
  cryptoValue: {
    color: 'white',
    fontSize: 16,
    marginLeft: 50, // Espaçamento entre as informações
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  infoContainer: {
    marginLeft: 100, // Adiciona um espaçamento entre as informações
  },
  infoText: {
    color: 'white',
    fontSize: 160,
    marginBottom: 50, // Adiciona um espaçamento entre as informações
  },
});


