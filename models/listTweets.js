export class listTweets {
  constructor(list = []) {
    this.tweets = list;
  }

  newTweet(tweet) {
    this.tweets.push(tweet);
  }

  getTweets() {
    return this.tweets;
  }
}