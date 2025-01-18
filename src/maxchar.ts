/**
 * #Directions
 * Given a string, return the character that is most commonly used in the string.
 * # Examples
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

export function maxChar(str: string): string {
    const charMap: { [key: string]: number } = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = ++charMap[char] || 1;
    }

    for(let key in charMap) {
        if(charMap[key] > max) {
            max = charMap[key];
            maxChar = key;
        }
    }

    return maxChar;
}