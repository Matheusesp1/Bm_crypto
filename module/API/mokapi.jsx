const API_URL = 'https://6511f228b8c6ce52b3953705.mockapi.io/';

export const api = {
  getUsers: () => {
    return fetch(API_URL + 'users')
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching users:', error);
        throw error; // Você pode optar por tratar o erro de outra forma aqui
      });
  },
  createUser: (userData) => {
    return fetch(API_URL + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .catch(error => {
        console.error('Error creating user:', error);
        throw error; // Você pode optar por tratar o erro de outra forma aqui
      });
  },
  loginUser: (email, password) => {
    return fetch(API_URL + 'users')
      .then(response => response.json())
      .then(users => {
        const user = users.find(u => u.email === email && u.password === password);
        return user;
      })
      .catch(error => {
        console.error('Error logging in:', error);
        throw error; // Você pode optar por tratar o erro de outra forma aqui
      });
  },
};

