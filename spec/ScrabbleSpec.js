'use strict';

let scrabble;
let string;

describe('Scrabble', function() {

  scrabble = new Scrabble(string);

  it('returns 0 when the input is an empty string', function() {
    string = '';
    expect(scrabble.score()).toEqual(0);
  })
})
