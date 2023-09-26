// mockApi.js
const users = [];

export const api = {
  getUsers: () => {
    return Promise.resolve(users);
  },
  createUser: (userData) => {
    const newUser = { id: Date.now(), ...userData };
    users.push(newUser);
    return Promise.resolve(newUser);
  },
  loginUser: (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    return Promise.resolve(user);
  },
};
