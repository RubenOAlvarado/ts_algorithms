/* 
    # Directions
    Check to see if two provided strings are anagrams of each other. 
    One string is an anagram of another if it uses the same characters in the same quantity. 
    Only consider characters, not spaces or punctuation. 
    Consider capital letters to be the same as lower case.

    # Examples
    anagrams('rail safety', 'fairy tales') --> True
    anagrams('RAIL! SAFETY!', 'fairy tales') --> True
    anagrams('Hi there', 'Bye there') --> False
*/

// First solution
/* export function anagrams(stringA: string, stringB: string): boolean {
    const charmapA: { [key: string]: number } = charMap(stringA);
    const charmapB: { [key: string]: number } = charMap(stringB);
    if(Object.keys(charmapA).length !== Object.keys(charmapB).length) {
        return false;
    }
    for(let key in charmapA) {
        if(charmapA[key] !== charmapB[key]) {
            return false;
        }
    }

    return true;
}

function charMap(string: string): { [key: string]: number } {
    const charmap: { [key: string]: number } = {};
    string = string.toLowerCase().replace(/[^\w]/g, '');
    for(let char of string) {
        charmap[char] = charmap[char] + 1 || 1;
    }
    return charmap;
} */

// Second solution
export function anagrams(stringA: string, stringB: string): boolean {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string: string): string {
    return string.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('');
}