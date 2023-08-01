let count = 0;
export function bubbleSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count += 1;
        }
    }

    console.log('bubbleSort max count = ', count);
    return array;
}
