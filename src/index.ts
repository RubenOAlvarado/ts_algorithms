import { chunkArray } from './chunkarray';

console.log(" --- Chunk array --- ");
console.log(`Chunk array [1, 2, 3, 4] with size 2: ${JSON.stringify(chunkArray([1, 2, 3, 4], 2))}`);
console.log(`Chunk array [1, 2, 3, 4, 5] with size 2: ${JSON.stringify(chunkArray([1, 2, 3, 4, 5], 2))}`);
console.log(`Chunk array [1, 2, 3, 4, 5, 6, 7, 8] with size 3: ${JSON.stringify(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3))}`);
console.log(`Chunk array [1, 2, 3, 4, 5] with size 4: ${JSON.stringify(chunkArray([1, 2, 3, 4, 5], 4))}`);