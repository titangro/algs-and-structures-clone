import { linearSearch } from './1-linear-search';
import { binarySearch, recursiveBinarySearch } from './2-binary-search';
import { selectionSort } from './3-selection-sort';

// линейный поиск
const randomArray = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11]; // count = 11 - длине массива
console.log('linearSearch ->', linearSearch(randomArray, 111)); // O(n)

// бинарный поиск
const sequentialArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('binarySearch ->', binarySearch(sequentialArray, 20)); // O(log2n)
// вариант через рекурсию
console.log(
    'recursiveBinarySearch -> ',
    recursiveBinarySearch(sequentialArray, 0, 0, sequentialArray.length),
);

// сортировка выбором
const selectionSortArray = [
    0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
    3, 32,
]; // [0,1,1,2,3.......]
console.log('selectionSort ->', selectionSort(selectionSortArray)); // O(n*n)
