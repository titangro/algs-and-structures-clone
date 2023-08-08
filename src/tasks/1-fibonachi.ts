// 1, 1, 2, 3, 5, 8, 13, 21
export function fibonachi(n: number): number {
    if (n === 0) {
        return 0;
    }

    if (n < 0) {
        return fibonachi(n + 2) - fibonachi(n + 1);
    }

    if (n < 3) {
        return 1;
    }

    return fibonachi(n - 2) + fibonachi(n - 1);
}

export function iterationFibonachi(n: number) {
    let count = 0;
    let result = 0;
    let second = 1;

    if (n < 0) {
        while (n !== count) {
            let tmp = result;
            result = second - result;
            second = tmp;

            count--;
        }

        return result;
    }

    while (n !== count) {
        let tmp = second;
        second = second + result;
        result = tmp;
        count++;
    }

    return result;
}
