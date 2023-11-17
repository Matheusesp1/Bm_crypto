import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { text: 'Olá! Meu nome é InvesteAssist. Como posso ajudar você hoje?', sender: 'bot', step: 1 },
        { text: 'Bem vindo ao atendimento da BM.\nEscolha uma opção:\n1. Abertura de Conta\n2. Informações sobre os melhores investimentos a serem feitos\n3. Dúvida sobre como vender cripto-moedas\n4. Falar com um Consultor\n5. Como escolher a melhor cripto-moedas atualmente \n6. Principais dúvidas sobre o mercado financeiro \n7. Encerrar atendimento', sender: 'bot', step: 2 },
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
          const updatedMessagesWithOptions = [...updatedMessagesWithResponse, { text: `Atendimento se encontra na fase ${currentStep}.\nEscolha uma opção disponivel:\n` + this.options.join('\n'), sender: 'bot', step: currentStep + 2 }];
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
      const endMessage = 'Obrigado por usar nosso serviço! Como você avalia nosso atendimento? Responda com uma letra de "1" a "5", sendo "1" a pior nota e "5" a melhor nota.';
      const updatedMessagesWithEnd = [...updatedMessages, { text: endMessage, sender: 'bot', step: currentStep + 2 }];
      this.setState({ messages: updatedMessagesWithEnd, isEnding: true, currentStep: currentStep + 1 });
    } else {
      // Se o usuário optar por não encerrar, reenviar lista de opções
      const notEndedMessage = 'O chat não foi encerrado. Como mais posso ajudar? Escolha uma nova opção:';
      const updatedMessagesWithNotEnded = [...updatedMessages, { text: notEndedMessage, sender: 'bot', step: currentStep + 2 }];
      const updatedMessagesWithOptions = [...updatedMessagesWithNotEnded, { text: this.options.join('\n'), sender: 'bot', step: currentStep + 3 }];
      this.setState({ messages: updatedMessagesWithOptions, isEnding: false, currentStep: currentStep + 2 });
    }
  };
  
  processEvaluationAndEnd = (evaluation) => {
    // Lógica para processar a avaliação
    const { messages, currentStep } = this.state;
    const thankYouMessage = 'Agradecemos por sua avaliação! O chat foi encerrado.';
    
    // Se o chat já foi encerrado, não adicione mensagens adicionais
    if (this.state.isEnding) {
      this.setState({ messages: [...messages], isEnding: true });
    } else {
      const updatedMessages = [...messages, { text: thankYouMessage, sender: 'bot', step: currentStep + 1 }];
      this.setState({ messages: updatedMessages, isEnding: true });
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
        return (
        'Para realizar os melhores investimentos a serem feitos, temos como informações: \n' +
        'a)Diversificação: Espalhe seus investimentos por diferentes classes de ativos (ações, títulos, imóveis, criptomoedas, etc.) para reduzir o risco.\n' +
        'b)Horizonte de investimento: Considere o tempo que você planeja manter seus investimentos. O horizonte de investimento pode influenciar a escolha dos ativos.\n' +
        'c)Perfil de Risco: Avalie sua tolerância ao risco antes de investir. Algumas pessoas são mais avessas ao risco do que outras, e a alocação de ativos deve refletir isso. \n' + 
        'd)Pesquisa de Mercado: Mantenha-se informado sobre as condições econômicas, políticas e de mercado. Acompanhe notícias financeiras e use análises fundamentais e técnicas para tomar decisões de investimento.\n' +  
        'e)Consulte um Profissional Financeiro: Se possível, consulte um consultor financeiro para orientação personalizada com base em sua situação financeira específica.\n' +   
        'f)Avaliação de Custos: Considere os custos associados aos investimentos, como taxas de corretagem, impostos e outras despesas.');
      case 3:
        return (
          'Como Vender Criptomoedas:\n' +
          'a). Acesse a plataforma de câmbio ou carteira que você está usando para armazenar suas criptomoedas.\n' +
          'b). Selecione a criptomoeda que você deseja vender. Muitas plataformas oferecem uma lista de suas criptomoedas disponíveis na interface..\n' +
          'c). Especifique a quantidade de criptomoedas que deseja vender. Isso pode ser uma quantidade específica em unidades da criptomoeda ou um valor em moeda fiduciária.\n' +
          'd). Escolha entre uma ordem de mercado (venda imediata pelo preço de mercado atual) ou uma ordem limitada (venda a um preço específico).\n' +
          'e). Confirme os detalhes da transação, incluindo a quantidade e o método de venda. \n' +
          'f). Após a execução bem-sucedida da ordem, os fundos serão creditados em sua conta na plataforma. \n' +
          'Para mais assistência ou dúvidas específicas, entre em contato com nosso consultor.'          
        );
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
        <Text>{item.sender === 'bot' ? item.text : `${item.step}. ${item.text}`}</Text>
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