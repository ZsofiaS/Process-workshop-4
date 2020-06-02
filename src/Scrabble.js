class Scrabble {
  constructor(string) {
    this.string = string;
  }
  score() {
    if (string.length === 0) {
      return 0;
    } else {
      return 1;
    }
  }
}
