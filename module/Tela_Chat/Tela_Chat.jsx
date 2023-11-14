// import React, { Component } from 'react';
// import { View, Text, FlatList, TextInput, TouchableOpacity, Linking } from 'react-native';
// import styles from './styles';

// class ChatScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [
//         { text: 'Olá! Como posso ajudar você hoje?', sender: 'bot' },
//         { text: 'Escolha uma opção:\n1. Abertura de Conta\n2. Informações sobre os melhores investimentos a serem feitos\n3. Duvida sobre como vender cripto-moedas\n4. Falar com um Consultor\n5. Como escolher a melhor cripto-moedas atualmente \n6. Principais duvidas sobre o mercado financeiro \n7. Encerar atendimento', sender: 'bot' },
//       ],
//       newMessage: '',
//     };

//     this.options = [
//       '1. Abertura de Conta',
//       '2. Informações sobre os melhores investimentos a serem feitos',
//       '3. Duvida sobre como vender cripto-moedas',
//       '4. Falar com um Consultor da BM',
//       '5. Como escolher a melhor cripto-moedas atualmente',
//       '6. Principais duvidas sobre o mercado financeiro',
//       '7. Encerar atendimento',
//     ];
//   }

//   handleSendMessage = async () => {
//     const { messages, newMessage } = this.state;

//     // Primeira mensagem do usuário
//     const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
//     this.setState({ messages: updatedMessages, newMessage: '' });

//     // Se a opção for válida, processar a resposta
//     if (!isNaN(newMessage) && parseInt(newMessage) >= 1 && parseInt(newMessage) <= this.options.length) {
//       const option = parseInt(newMessage);
//       const botResponse = this.getBotResponse(option);
//       const updatedMessagesWithResponse = [...updatedMessages, { text: botResponse, sender: 'bot' }];
//       this.setState({ messages: updatedMessagesWithResponse });
//     } else {
//       // Se a opção não for válida, reenviar a lista
//       const botResponse = 'Opção inválida. Escolha uma opção válida:\n' + this.options.join('\n');
//       const updatedMessagesWithResponse = [...updatedMessages, { text: botResponse, sender: 'bot' }];
//       this.setState({ messages: updatedMessagesWithResponse });
//     }
//   };

//   getBotResponse = (option) => {
//     // Lógica simples de resposta baseada na opção escolhida
//     switch (option) {
//       case 1:
//         return (
//           'Para abrir uma conta conosco, siga estes passos simples:\n' +
//           '1. Visite nosso site e clique na opção "Abrir Conta".\n' +
//           '2. Preencha o formulário de inscrição com suas informações pessoais.\n' +
//           '3. Envie os documentos necessários conforme indicado no site.\n' +
//           '4. Aguarde a análise e aprovação do seu pedido.\n' +
//           'Para mais assistência ou dúvidas específicas, entre em contato com nosso consultor.'
//         );
//       case 2:
//         return 'Resposta para Informações de Pagamento';
//       case 3:
//         return 'Resposta para Acompanhar Pedido';
//       case 4:
//         this.redirectToConsultant();
//         return 'Para falar com um consultor, você será redirecionado para o WhatsApp. Estamos prontos para ajudar com suas dúvidas e fornecer suporte personalizado.';
//       case 5:
//         return (
//           'Para escolher a melhor cripto-moedas atualmente:\n' +
//           '1. As criptomoedas são ativos digitais que utilizam criptografia para garantir transações seguras. Exemplos incluem Bitcoin, Ethereum e Binance Coin.\n' +
//           '2. Para investir em criptomoedas, crie uma conta em uma exchange, deposite fundos e escolha as criptomoedas desejadas para compra.\n' +
//           '3. A volatilidade é comum no mercado de criptomoedas, os preços podem variar significativamente em curtos períodos.\n' +
//           '4. As criptomoedas são armazenadas em carteiras digitais, que podem ser online (hot wallets) ou offline (cold wallets). Cada tipo tem suas vantagens.\n' +
//           '5. Existem várias estratégias para investir em criptomoedas, incluindo HODLing (manter a longo prazo), trading e participação em ICOs. \n' +
//           'Para mais assistência ou dúvidas específicas, entre em contato com nosso consultor.'
//         );
//       case 6:
//         return (
//           'Atualmente as principais duvidas sobre o mercado financeiro, seriam:\n' +
//           '1. O mercado financeiro engloba diversos ativos, como ações, títulos, commodities e criptomoedas. Cada um tem suas características e riscos.\n' +
//           '2. Investir na bolsa de valores envolve comprar e vender ações de empresas. É importante realizar análises e acompanhar o desempenho das empresas.\n' +
//           '3. Os títulos públicos, como o Tesouro Direto, são considerados investimentos de baixo risco. Eles podem ser uma opção para quem busca segurança.\n' +
//           '4. Diversificar investimentos significa distribuir seus recursos em diferentes tipos de ativos, reduzindo o risco de perdas significativas.\n' +
//           '5. Ao investir, é fundamental entender seu perfil de investidor, metas financeiras e horizonte de investimento para tomar decisões mais alinhadas. \n' +
//           'Para mais assistência ou dúvidas específicas, entre em contato com nosso consultor.'
//         );
//       case 7:
//         return 'Resposta para Acompanhar Pedido.';
//       default:
//         return 'Como posso ajudar?';
//     }
//   };

//   redirectToConsultant = () => {
//     // Substitua 'NUMERO_DO_CONSULTOR' pelo número de telefone do consultor
//     const consultantPhoneNumber = '5527998249777';
//     const whatsappLink = `https://wa.me/${consultantPhoneNumber}`;
//     Linking.openURL(whatsappLink);
//   };

//   renderMessageItem = ({ item }) => {
//     return (
//       <View style={[styles.messageBubble, item.sender === 'user' ? styles.senderMessageBubble : styles.receiverMessageBubble]}>
//         <Text>{item.text}</Text>
//       </View>
//     );
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.messages}
//           renderItem={this.renderMessageItem}
//           keyExtractor={(item, index) => index.toString()}
//           contentContainerStyle={styles.messageContainer}
//         />
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Digite sua mensagem..."
//             value={this.state.newMessage}
//             onChangeText={(text) => this.setState({ newMessage: text })}
//           />
//           <TouchableOpacity onPress={this.handleSendMessage}>
//             <Text>Enviar</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// export default ChatScreen;

// import React, { Component } from 'react';
// import { View, Text, FlatList, TextInput, TouchableOpacity, Linking } from 'react-native';
// import styles from './styles';

// class ChatScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messages: [
//         { text: 'Olá! Como posso ajudar você hoje?', sender: 'bot' },
//         { text: 'Escolha uma opção:\n1. Abertura de Conta\n2. Informações sobre os melhores investimentos a serem feitos\n3. Duvida sobre como vender cripto-moedas\n4. Falar com um Consultor\n5. Como escolher a melhor cripto-moedas atualmente \n6. Principais duvidas sobre o mercado financeiro \n7. Encerar atendimento', sender: 'bot' },
//       ],
//       newMessage: '',
//     };

//     this.options = [
//       '1. Abertura de Conta',
//       '2. Informações sobre os melhores investimentos a serem feitos',
//       '3. Duvida sobre como vender cripto-moedas',
//       '4. Falar com um Consultor da BM',
//       '5. Como escolher a melhor cripto-moedas atualmente',
//       '6. Principais duvidas sobre o mercado financeiro',
//       '7. Encerar atendimento',
//     ];
//   }

//   handleSendMessage = async () => {
//     const { messages, newMessage } = this.state;

//     // Primeira mensagem do usuário
//     const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
//     this.setState({ messages: updatedMessages, newMessage: '' });

//     // Se a opção for válida, processar a resposta
//     if (!isNaN(newMessage) && parseInt(newMessage) >= 1 && parseInt(newMessage) <= this.options.length) {
//       const option = parseInt(newMessage);
//       const botResponse = this.getBotResponse(option);
//       const updatedMessagesWithResponse = [...updatedMessages, { text: botResponse, sender: 'bot' }];
//       this.setState({ messages: updatedMessagesWithResponse });

//       // Enviar novamente a lista de opções
//       const updatedMessagesWithOptions = [...updatedMessagesWithResponse, { text: 'Escolha uma opção:\n' + this.options.join('\n'), sender: 'bot' }];
//       this.setState({ messages: updatedMessagesWithOptions });
//     } else {
//       // Se a opção não for válida, reenviar a lista
//       const botResponse = 'Opção inválida. Escolha uma opção válida:\n' + this.options.join('\n');
//       const updatedMessagesWithResponse = [...updatedMessages, { text: botResponse, sender: 'bot' }];
//       this.setState({ messages: updatedMessagesWithResponse });
//     }
//   };

//   getBotResponse = (option) => {
//     // Lógica simples de resposta baseada na opção escolhida
//     switch (option) {
//       case 1:
//         return (
//           'Para abrir uma conta conosco, siga estes passos simples:\n' +
//           '1. Visite nosso site e clique na opção "Abrir Conta".\n' +
//           '2. Preencha o formulário de inscrição com suas informações pessoais.\n' +
//           '3. Envie os documentos necessários conforme indicado no site.\n' +
//           '4. Aguarde a análise e aprovação do seu pedido.\n' +
//           'Para mais assistência ou dúvidas específicas, entre em contato com nosso consultor.'
//         );
//       case 2:
//         return 'Resposta para Informações de Pagamento';
//       case 3:
//         return 'Resposta para Acompanhar Pedido';
//       case 4:
//         this.redirectToConsultant();
//         return 'Para falar com um consultor, você será redirecionado para o WhatsApp. Estamos prontos para ajudar com suas dúvidas e fornecer suporte personalizado.';
//       case 5:
//         return (
//           'Para escolher a melhor cripto-moedas atualmente:\n' +
//           '1. As criptomoedas são ativos digitais que utilizam criptografia para garantir transações seguras. Exemplos incluem Bitcoin, Ethereum e Binance Coin.\n' +
//           '2. Para investir em criptomoedas, crie uma conta em uma exchange, deposite fundos e escolha as criptomoedas desejadas para compra.\n' +
//           '3. A volatilidade é comum no mercado de criptomoedas, os preços podem variar significativamente em curtos períodos.\n' +
//           '4. As criptomoedas são armazenadas em carteiras digitais, que podem ser online (hot wallets) ou offline (cold wallets). Cada tipo tem suas vantagens.\n' +
//           '5. Existem várias estratégias para investir em criptomoedas, incluindo HODLing (manter a longo prazo), trading e participação em ICOs. \n' +
//           'Para mais assistência ou dúvidas específicas, entre em contato com nosso consultor.'
//         );
//       case 6:
//         return (
//           'Atualmente as principais duvidas sobre o mercado financeiro, seriam:\n' +
//           '1. O mercado financeiro engloba diversos ativos, como ações, títulos, commodities e criptomoedas. Cada um tem suas características e riscos.\n' +
//           '2. Investir na bolsa de valores envolve comprar e vender ações de empresas. É importante realizar análises e acompanhar o desempenho das empresas.\n' +
//           '3. Os títulos públicos, como o Tesouro Direto, são considerados investimentos de baixo risco. Eles podem ser uma opção para quem busca segurança.\n' +
//           '4. Diversificar investimentos significa distribuir seus recursos em diferentes tipos de ativos, reduzindo o risco de perdas significativas.\n' +
//           '5. Ao investir, é fundamental entender seu perfil de investidor, metas financeiras e horizonte de investimento para tomar decisões mais alinhadas. \n' +
//           'Para mais assistência ou dúvidas específicas, entre em contato com nosso consultor.'
//         );
//       case 7:
//         return 'Atendimento encerrado. Obrigado por usar nosso serviço! Se precisar de mais alguma coisa, estamos aqui para ajudar.';
//       default:
//         return 'Como posso ajudar?';
//     }
//   };

//   redirectToConsultant = () => {
//     // Substitua 'NUMERO_DO_CONSULTOR' pelo número de telefone do consultor
//     const consultantPhoneNumber = '5527998249777';
//     const whatsappLink = `https://wa.me/${consultantPhoneNumber}`;
//     Linking.openURL(whatsappLink);
//   };

//   renderMessageItem = ({ item }) => {
//     return (
//       <View style={[styles.messageBubble, item.sender === 'user' ? styles.senderMessageBubble : styles.receiverMessageBubble]}>
//         <Text>{item.text}</Text>
//       </View>
//     );
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={this.state.messages}
//           renderItem={this.renderMessageItem}
//           keyExtractor={(item, index) => index.toString()}
//           contentContainerStyle={styles.messageContainer}
//         />
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Digite sua mensagem..."
//             value={this.state.newMessage}
//             onChangeText={(text) => this.setState({ newMessage: text })}
//           />
//           <TouchableOpacity onPress={this.handleSendMessage}>
//             <Text>Enviar</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// export default ChatScreen;

import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { text: 'Olá! Meu nome é InvesteAssist. Como posso ajudar você hoje?', sender: 'bot', step: 1 },
        { text: 'Você está no atendimento 1.\nEscolha uma opção:\n1. Abertura de Conta\n2. Informações sobre os melhores investimentos a serem feitos\n3. Dúvida sobre como vender cripto-moedas\n4. Falar com um Consultor\n5. Como escolher a melhor cripto-moedas atualmente \n6. Principais dúvidas sobre o mercado financeiro \n7. Encerrar atendimento', sender: 'bot', step: 2 },
      ],
      newMessage: '',
      isEnding: false, // Flag para indicar se o atendimento está sendo encerrado
      currentStep: 2, // Etapa inicial do atendimento
    };

    this.options = [
      '1. Abertura de Conta',
      '2. Informações sobre os melhores investimentos a serem feitos',
      '3. Dúvida sobre como vender cripto-moedas',
      '4. Falar com um Consultor da BM',
      '5. Como escolher a melhor cripto-moedas atualmente',
      '6. Principais dúvidas sobre o mercado financeiro',
      '7. Encerrar atendimento',
    ];
  }

  handleSendMessage = async () => {
    const { messages, newMessage, isEnding, currentStep } = this.state;
  
    // Primeira mensagem do usuário
    const updatedMessages = [...messages, { text: newMessage, sender: 'user', step: currentStep }];
    this.setState({ messages: updatedMessages, newMessage: '' });
  
    // Se o atendimento estiver sendo encerrado, processar a resposta do encerramento
    if (isEnding) {
      // Se a última mensagem foi a solicitação de confirmação, então processar a resposta do usuário
      if (messages[messages.length - 1].text.startsWith('Gostaria de encerrar o atendimento?')) {
        this.handleEndConfirmation(newMessage);
      } else if (currentStep === messages[messages.length - 1].step) {
        // Se a mensagem do bot solicitando confirmação foi a última mensagem, então processar a resposta do usuário
        this.handleEndConfirmation(newMessage);
      }
    } else {
      // Se a opção for válida, processar a resposta
      if (!isNaN(newMessage) && parseInt(newMessage) >= 1 && parseInt(newMessage) <= this.options.length) {
        const option = parseInt(newMessage);
        const botResponse = this.getBotResponse(option);
        const updatedMessagesWithResponse = [...updatedMessages, { text: botResponse, sender: 'bot', step: currentStep + 1 }];
        this.setState({ messages: updatedMessagesWithResponse, currentStep: currentStep + 1 });
  
        // Se a opção for a de encerrar atendimento, solicitar confirmação
        if (option === this.options.length) {
          const confirmMessage = 'Gostaria de encerrar o atendimento? Responda com "S" para Sim ou "N" para Não para encerrar o mesmo.';
          const updatedMessagesWithConfirm = [...updatedMessagesWithResponse, { text: confirmMessage, sender: 'bot', step: currentStep + 1 }];
          this.setState({ messages: updatedMessagesWithConfirm, isEnding: true });
        } else {
          // Enviar novamente a lista de opções
          const updatedMessagesWithOptions = [...updatedMessagesWithResponse, { text: `Você está no atendimento ${currentStep + 1}.\nEscolha uma opção:\n` + this.options.join('\n'), sender: 'bot', step: currentStep + 2 }];
          this.setState({ messages: updatedMessagesWithOptions });
        }
      } else {
        // Se a opção não for válida, reenviar a lista
        const botResponse = 'Opção inválida. Escolha uma opção válida:\n' + this.options.join('\n');
        const updatedMessagesWithResponse = [...updatedMessages, { text: botResponse, sender: 'bot', step: currentStep + 1 }];
        this.setState({ messages: updatedMessagesWithResponse });
      }
    }
  };

  handleEndConfirmation = (confirmation) => {
    // Processar a resposta de encerramento
    const { messages, currentStep } = this.state;
    const updatedMessages = [...messages, { text: confirmation, sender: 'user', step: currentStep + 1 }];

    // Se o usuário confirmar o encerramento, exibir mensagem de agradecimento e solicitar avaliação
    if (confirmation.toLowerCase() === 's') {
      const endMessage = '. Como você avalia nosso atendimento? Responda com uma letra de "A" a "J", sendo "A" a pior nota e "J" a melhor nota.';
      const updatedMessagesWithEnd = [...updatedMessages, { text: endMessage, sender: 'bot', step: currentStep + 2 }];
      this.setState({ messages: updatedMessagesWithEnd, isEnding: false });
    } else {
      // Se o usuário optar por não encerrar, reiniciar o atendimento
      const restartMessage = 'Atendimento encerrado. Gostaria de iniciar um novo atendimento? Responda com "S" para Sim ou "N" para Não.';
      const updatedMessagesWithRestart = [...updatedMessages, { text: restartMessage, sender: 'bot', step: currentStep + 1 }];
      this.setState({ messages: updatedMessagesWithRestart, isEnding: false, currentStep: currentStep + 1 });
    }
  };

  getBotResponse = (option) => {
    // Lógica simples de resposta baseada na opção escolhida
    switch (option) {
      case 1:
        return (
          'Para abrir uma conta conosco, siga estes passos simples:\n' +
          'a). Visite nosso site e clique na opção "Abrir Conta".\n' +
          'b). Preencha o formulário de inscrição com suas informações pessoais.\n' +
          'c). Envie os documentos necessários conforme indicado no site.\n' +
          'd). Aguarde a análise e aprovação do seu pedido.\n' +
          'Para mais assistência ou dúvidas específicas, entre em contato com nosso consultor.'
        );
      case 2:
        return 'Resposta para Informações de Pagamento';
      case 3:
        return 'Resposta para Acompanhar Pedido';
      case 4:
        this.redirectToConsultant();
        return 'Para falar com um consultor, você será redirecionado para o WhatsApp. Estamos prontos para ajudar com suas dúvidas e fornecer suporte personalizado.';
      case 5:
        return (
          'Para escolher a melhor cripto-moedas atualmente:\n' +
          'a). As criptomoedas são ativos digitais que utilizam criptografia para garantir transações seguras. Exemplos incluem Bitcoin, Ethereum e Binance Coin.\n' +
          'b). Para investir em criptomoedas, crie uma conta em uma exchange, deposite fundos e escolha as criptomoedas desejadas para compra.\n' +
          'c). A volatilidade é comum no mercado de criptomoedas, os preços podem variar significativamente em curtos períodos.\n' +
          'd). As criptomoedas são armazenadas em carteiras digitais, que podem ser online (hot wallets) ou offline (cold wallets). Cada tipo tem suas vantagens.\n' +
          'e). Existem várias estratégias para investir em criptomoedas, incluindo HODLing (manter a longo prazo), trading e participação em ICOs. \n' +
          'Para mais assistência ou dúvidas específicas, entre em contato com nosso consultor.'
        );
      case 6:
        return (
          'Atualmente as principais dúvidas sobre o mercado financeiro, seriam:\n' +
          'a). O mercado financeiro engloba diversos ativos, como ações, títulos, commodities e criptomoedas. Cada um tem suas características e riscos.\n' +
          'b). Investir na bolsa de valores envolve comprar e vender ações de empresas. É importante realizar análises e acompanhar o desempenho das empresas.\n' +
          'c). Os títulos públicos, como o Tesouro Direto, são considerados investimentos de baixo risco. Eles podem ser uma opção para quem busca segurança.\n' +
          'd). Diversificar investimentos significa distribuir seus recursos em diferentes tipos de ativos, reduzindo o risco de perdas significativas.\n' +
          'e). Ao investir, é fundamental entender seu perfil de investidor, metas financeiras e horizonte de investimento para tomar decisões mais alinhadas. \n' +
          'Para mais assistência ou dúvidas específicas, entre em contato com nosso consultor.'
        );
      case 7:
        return 'Agradecemos então pelo ajuda que pudemos oferecer, quaisquer outras duvidas so nos contactar.';
      default:
        return 'Como posso ajudar?';
    }
  };

  redirectToConsultant = () => {
    // Substitua 'NUMERO_DO_CONSULTOR' pelo número de telefone do consultor
    const consultantPhoneNumber = '5527998249777';
    const whatsappLink = `https://wa.me/${consultantPhoneNumber}`;
    Linking.openURL(whatsappLink);
  };

  renderMessageItem = ({ item }) => {
    return (
      <View style={[styles.messageBubble, item.sender === 'user' ? styles.senderMessageBubble : styles.receiverMessageBubble]}>
        <Text>{`${item.step}. ${item.text}`}</Text>
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