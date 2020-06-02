'use strict';

let scrabble;
let string;

describe('Scrabble', function() {

  scrabble = new Scrabble(string);

  it('returns 0 when the input is an empty string', function() {
    string = '';
    expect(scrabble.score()).toEqual(0);
  })

  it('returns 1 when the input is "a"', function() {
    string = 'a';
    expect(scrabble.score()).toEqual(1);
  })

  it('returns 4 when the input is "f"', function() {
    string = 'f';
    expect(scrabble.score()).toEqual(4);
  })
})
