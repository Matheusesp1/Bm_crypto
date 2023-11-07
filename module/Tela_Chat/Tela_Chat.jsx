import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { text: 'O que seu acessor Matheus poderia te ajudar?', sender: 'user1' },
        // { text: 'Olá, Estou com uma quantia boa para poder investir em criptomoedas, qual voce me aconcelharia? ', sender: 'user2' },
      ],
      newMessage: '',
    };
  }

  handleSendMessage = () => {
    const { messages, newMessage } = this.state;
    if (newMessage) {
      const updatedMessages = [...messages, { text: newMessage, sender: 'user1' }];
      this.setState({ messages: updatedMessages, newMessage: '' });
    }
  };

  renderMessageItem = ({ item }) => {
    return (
      <View style={[styles.messageBubble, item.sender === 'user1' ? styles.senderMessageBubble : styles.receiverMessageBubble]}>
        <Text>{item.text}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.messages}
          renderItem={this.renderMessageItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.messageContainer}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua mensagem..."
            value={this.state.newMessage}
            onChangeText={(text) => this.setState({ newMessage: text })}
          />
          <TouchableOpacity onPress={this.handleSendMessage}>
            <Text>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ChatScreen;
