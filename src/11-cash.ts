export function cashFunction(func: Function) {
    let cash: Record<string, any> = {};

    return function (x: any) {
        if (cash[x]) {
            console.log('Значение взято из кеша: ', cash[x]);
            return cash[x];
        }

        cash[x] = func(x);
        return cash[x];
    };
}

export function factorialIteration(n: number) {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        throw new Error('Число n должно быть положительным');
    }

    let result = 1;
    while (n != 1) {
        result *= n;
        n -= 1;
    }
    return result;
}
