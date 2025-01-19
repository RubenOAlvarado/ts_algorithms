import { titleCase } from "./titlecase";

console.log(" --- Title Case --- ");
console.log(`Title Casing: 'a short sentence'`);
console.log(titleCase('a short sentence')); // 'A Short Sentence'
console.log(`Title Casing: 'a lazy fox'`);
console.log(titleCase('a lazy fox')); // 'A Lazy Fox'
console.log(`Title Casing: 'look, it is working!'`);
console.log(titleCase('look, it is working!')); // 'Look, It Is Working!'