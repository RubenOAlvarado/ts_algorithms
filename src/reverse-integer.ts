/*
    # Directions
        Given an integer, return an integer that is the reverse ordering of numbers
    # Examples
        reverse(15) === 51
        reverse(981) === 189
        reverse(500) === 5
        reverse(-15) === -51
        reverse(-90) === -9
*/

export function reverseInt(n: number): number {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n);
}