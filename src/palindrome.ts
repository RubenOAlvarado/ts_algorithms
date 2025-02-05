/*
    # Directions
    Given a string, return true if the string is a palindrome
    or false if it is not.  Palindromes are strings that form the same word if it is reversed.

    # Examples
    palindrome("abba") === true
    palindrome("abcdefg") === false
    palindrome("hello") === false
*/

export function palindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}