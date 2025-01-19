/*
    # Directions
    Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.
    # Examples
    titleCase('a short sentence') --> 'A Short Sentence'
    titleCase('a lazy fox') --> 'A Lazy Fox'
    titleCase('look, it is working!') --> 'Look, It Is Working!'
*/

export function titleCase(str: string): string {
    const words = str.split(' ');
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}