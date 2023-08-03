// export function recursion(...items: any[]) {}

export function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        throw new Error('Число n должно быть положительным');
    }

    return n * factorial(n - 1);
}

export function fibonachi(n: number): number {
    if (n === 0) {
        return 0;
    }

    if (n === -1) {
        return 1;
    }

    if (n === -2) {
        return -1;
    }

    if (n < 0) {
        return fibonachi(n + 2) - fibonachi(n + 1);
    }

    if (n < 3) {
        return 1;
    }
    return fibonachi(n - 2) + fibonachi(n - 1);
}

// фибоначи: −8 5 −3 2 −1 1 0, 1 1 2 3 5 8 13 21
