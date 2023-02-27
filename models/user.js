export class User {
  constructor({ username, avatar }) {
    if (!username || !avatar) {
      throw new Error("O usuário deve ter: username e avatar");
    }
    this.username = username;
    this.avatar = avatar;
  }
  isInvalid() {
    if (!this.username || !this.avatar) {
      return true;
    }
    return false;
  }
  getUser() {
    return {
      username: this.username,
      avatar: this.avatar,
    }
  }
}