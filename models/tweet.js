export class Tweet {
  constructor({ username, avatar, tweet }) {
    if (!username || !avatar || !tweet) {
      throw new Error("O tweet deve ter: username, avatar e tweet");
    }
    this.username = username;
    this.avatar = avatar;
    this.tweet = tweet;
  }
  isInvalid() {
    if (!this.username || !this.avatar || !this.tweet) {
      return true;
    }
    return false;
  }
  getTweet() {
    return {
      username: this.username,
      avatar: this.avatar,
      tweet: this.tweet,
    }
  }
}