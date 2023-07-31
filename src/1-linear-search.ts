let count = 0;
export function linearSearch(array: number[], item: number) {
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (array[i] === item) {
            console.log('current count = ', count);
            return i;
        }
    }

    console.log('max count = ', count);
    return null;
}
