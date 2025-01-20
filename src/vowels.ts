/**
 *  # Directions
 * Write a function that returns the number of vowels used in a string.
 * Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.
 *  # Examples
 * vowels('Hi there!') --> 3
 * vowels('Why do you ask?') --> 4
 * vowels('Why?') --> 0
 */

// First solution
export function vowels(str: string): number{
    // the g is for not stopping at the first match
    // the i is for case insensitive
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// Second solution
// this is needed when you don't want to use regex
export function vowelsV2(str: string): number{
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];
    for(let char of str.toLowerCase()) {
        if(checker.includes(char)) {
            count++;
        }
    }
    return count;
}