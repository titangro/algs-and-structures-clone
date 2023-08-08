// Написать функцию, которая возвращает
// массив только с уникальными значениями
// [1,1,2,2,3,4,5,5] -> [3,4]

export const arr = [1, 1, 2, 2, 3, 4, 5, 5];

export function withoutRepeat(arr: number[]) {
    const repeats: Record<string, number> = {};

    arr.forEach((number) => {
        if (repeats[number] === undefined) {
            repeats[number] = 0;
        } else {
            repeats[number] += 1;
        }
    });

    return Object.keys(repeats)
        .filter((number) => !repeats[number])
        .map(Number);
}
