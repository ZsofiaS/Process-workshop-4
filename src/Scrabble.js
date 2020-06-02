class Scrabble {
  constructor(string) {
    this.string = string;
    //create a hash that represents the scores for letters
    this.table = {
      'AEIOULNRST': 1,
      'DG': 2,
      'BCMP': 3,
      'FHVMY': 4,
      'K': 5,
      'JX': 8,
      'QZ': 10
    }
  }
  score() {
    if (string === null || string.length === 0 ) {
      return 0;
    } else {
      let array = string.split('');
      let total = 0;
      array.forEach((arrayItem, i) => {
        Object.keys(this.table).forEach((row, i) => {
          if (row.includes(arrayItem.toUpperCase())) {
            total = total + this.table[row];
          }
        });
      });
      return total;
    }
  }
}
