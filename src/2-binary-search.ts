let count = 0;

export function binarySearch(array: number[], item: number) {
    let start = 0;
    let end = array.length;
    let middle: number;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);
        if (array[middle] === item) {
            found = true;
            position = middle;
            console.log('binarySearch current count = ' + count);
            return position;
        }
        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    console.log('binarySearch max count = ' + count);
    return position;
}

let count2 = 0;
export function recursiveBinarySearch(
    array: number[],
    item: number,
    start: number,
    end: number,
) {
    let middle = Math.floor((start + end) / 2);
    count2 += 1;
    if (item === array[middle]) {
        console.log('end recursiveBinarySearch max count = ' + count2);
        return middle;
    }
    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, 0, middle - 1);
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end);
    }
}
