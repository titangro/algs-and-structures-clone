import { linearSearch } from './1-linear-search';
import { binarySearch } from './2-binary-search';

const randomArray = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
console.log(linearSearch(randomArray, 111)); // count = 11 - длине массива

const sequentialArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(binarySearch(sequentialArray, 20));
