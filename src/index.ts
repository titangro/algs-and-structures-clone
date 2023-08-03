import { linearSearch } from './1-linear-search';
import { binarySearch, recursiveBinarySearch } from './2-binary-search';
import { selectionSort } from './3-selection-sort';
import { bubbleSort } from './4-bubble-sort';
import { quickSort } from './5-quick-sort';
import { factorial, fibonachi } from './6-reqursion';
import {
    breadthSearch,
    graph as breadthSearchGraph,
} from './7-poisk-v-shirinu';
import { matrix } from './8-matrix-smeznosti';
import { shortPath, graph as shortPathGraph } from './9-algoritm-dijkstra';
import { iterationTree, recursiveTree, tree } from './10-tree-algs';
import { cashFunction, factorialIteration } from './11-cash';
import { LinkedList } from './12-linked-list';
import { BinaryTree } from './13-binary-tree';
import { map, set } from './15-set-map';

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

const bubbleSortArray = [
    0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
    3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1,
    7, -1, -5, 23,
];
// сортировка пузырьком
console.log('bubbleSort ->', bubbleSort(bubbleSortArray)); // O(n*n)

// быстрая сортировка или Хоаро
const quickSortArray = [
    0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
    3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1,
    7, -1, -5, 23,
];
console.log('quickSort ->', quickSort(quickSortArray)); // O(log2n*n)

// рекурсия на примере факториала и фибоначи
console.log('factorial -> ', factorial(4));
console.log('fibonachi -> ', fibonachi(8));

// графы

// поиск в ширину
console.log('breadthSearch ->', breadthSearch(breadthSearchGraph, 'a', 'g'));

// матрица смежности
console.log('matrix ->', matrix);

// поиск кратчайшего пути в графе
console.log('shortPath ->', shortPath(shortPathGraph, 'a', 'g'));

// деревья

// рекурсивный обход дерева
console.log('recursiveTree ->', recursiveTree(tree));
// итеративный обход дерева
console.log('iterationTree ->', iterationTree(tree));

// кеш функция
const cachedFactorial = cashFunction(factorial);
console.log('cachedFactorial 3 ->', cachedFactorial(3));
console.log('cachedFactorial 5 ->', cachedFactorial(5));
console.log('cachedFactorial 3 ->', cachedFactorial(3));

// итеративный факториал
console.log('iterationTree ->', factorialIteration(6));

// связанный список
const list = new LinkedList();
list.add(5);
list.add(3);
list.add(2);
list.add(5);
list.add(7);

console.log('LinkedList print ->', list.print(), ', size -> ', list.getSize());

// бинарное дерево
const binaryTree = new BinaryTree();
binaryTree.add(5);
binaryTree.add(2);
binaryTree.add(6);
binaryTree.add(2);
binaryTree.add(1);
binaryTree.print();
// console.log('BinaryTree print ->', binaryTree.print());

// Map пример
const objKey = { id: 5 };
map.set(objKey, 'anything');
console.log('value from Map by key of object objKey -> ', map.get(objKey));

// Set пример
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(5);
set.add(4);
set.add(3);
console.log(set);
