## Process workshop - Scrabble Solver

#### Requirements:
Given a word, compute the scrabble score for that word.

Letter values:

|Letter	                       | Value|
| ---------------------------- |:-----|
|A, E, I, O, U, L, N, R, S, T  |  1   |
|D, G	                         |  2   |
|B, C, M, P	                   |  3   |
|F, H, V, W, Y	               |  4   |
|K	                           |  5   |
|J, X	                         |  8   |
|Q, Z                          |  10  |

Example scoring:  
"cabbage" should be scored as worth 14 points:
* 3 points for C
* 1 point for A, twice
* 3 points for B, twice
* 2 points for G
* 1 point for E

Example usage:
```
scrabble = new Scrabble('')
scrabble.score // => 0
```
```
scrabble = new Scrabble('aa')
scrabble.score // => 2
```
This challenge was solved using Javascript and Jasmine (TDD).
