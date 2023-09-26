// const handleSignUp = async () => {
//     try {
//       // Verificar se todos os campos foram preenchidos
//       if (!name || !email || !password) {
//         alert('Por favor, preencha todos os campos.');
//         return;
//       }
  
//       // Fazer a requisição para o mokapi (substitua a URL com a correta)
//       const response = await fetch('https://mokapi.com/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//         }),
//       });
  
//       // Verificar se a requisição foi bem-sucedida
//       if (response.ok) {
//         alert('Cadastro realizado com sucesso.');
//       } else {
//         alert('Erro ao cadastrar. Por favor, tente novamente mais tarde.');
//       }
//     } catch (error) {
//       console.error('Erro:', error);
//       alert('Ocorreu um erro. Por favor, tente novamente mais tarde.');
//     }
//   };
  

// const handleSignUp = () => {
//   if (!name || !email || !password) {
//     alert('Por favor, preencha todos os campos.');
//     return;
//   }

//   alert(`Nome: ${name}\nEmail: ${email}\nSenha: ${password}`);
// };
