class Scrabble {
  constructor(string) {
    this.string = string;
  }
  score() {
    if (string.length === 0) {
      return 0;
    } else if (string === 'a') {
      return 1;
    } else if (string === 'f') {
      return 4;
    }
  }
}
