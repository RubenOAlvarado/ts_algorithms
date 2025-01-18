/**
 * # Directions
 * Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
 * # Examples
 * chunk([1, 2, 3, 4], 2) === [[1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]
 */

export function chunkArray(array: any[], size: number): any[][] {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}