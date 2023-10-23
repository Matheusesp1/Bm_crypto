import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10101A', // Cor de fundo
  },
  messageContainer: {
    flex: 1,
  },
  messageBubble: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    maxWidth: '70%',
  },
  senderMessageBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6', // Cor da mensagem enviada
  },
  receiverMessageBubble: {
    alignSelf: 'flex-start',
    backgroundColor: 'white', // Cor da mensagem recebida
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
});

export default styles;
