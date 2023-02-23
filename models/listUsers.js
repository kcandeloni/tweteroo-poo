export class listUsers {
  constructor(list = []) {
    this.users = list;
  }

  newUser(user) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  getUserByName(name) {
    return this.users.find(user => user.username === name);
  }
}