/*
 # Directions
    Given a string, return a new string with the reversed order of characters
 # Examples
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

export function reverse(str: string): string {
    return str.split('').reverse().join('');
}