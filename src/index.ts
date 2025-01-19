import { anagrams } from './anagrams';

console.log(" --- Anagrams --- ");
console.log(`Rail safety and fairy tales are anagrams: ${anagrams('rail safety', 'fairy tales')}`);
console.log(`Rail! safety and fairy tales are anagrams: ${anagrams('RAIL! SAFETY!', 'fairy tales')}`);
console.log(`Hi there and bye there are anagrams: ${anagrams('Hi there', 'Bye there')}`);
console.log(`money coding and coding money are anagrams: ${anagrams('money coding', 'coding money')}`);