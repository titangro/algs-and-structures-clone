let count = 0;
let arrayLength = 0;

export function quickSort(array: number[]): number[] {
    if (!arrayLength) {
        arrayLength = array.length;
    }

    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    const less: number[] = [];
    const greater: number[] = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === pivotIndex) {
            continue;
        }

        if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    const result = [...quickSort(less), pivot, ...quickSort(greater)];
    if (result.length === arrayLength) {
        console.log('quickSort max count = ', count);
    }
    return result;
}
