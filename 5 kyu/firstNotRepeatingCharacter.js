/*
TASK:
Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("");
† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
*/

/* SOLUTION: */

function firstNonRepeatingLetter(s) {
  let occurrences = new Map();

  for (let char of s) {
    let lowerCaseChar = char.toLowerCase();
    occurrences.set(lowerCaseChar, (occurrences.get(lowerCaseChar) || 0) + 1);
  }

  for (let char of s) {
    if (occurrences.get(char.toLowerCase()) === 1) {
      return char;
    }
  }

  return "";
}
