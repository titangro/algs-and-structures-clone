function one(action?: Function): number {
    return action ? action(1) : 1;
}
function two(action?: Function): number {
    return action ? action(2) : 2;
}
function three(action?: Function): number {
    return action ? action(3) : 3;
}
function four(action?: Function): number {
    return action ? action(4) : 4;
}
function five(action?: Function): number {
    return action ? action(5) : 5;
}
function six(action?: Function): number {
    return action ? action(6) : 6;
}
function seven(action?: Function): number {
    return action ? action(7) : 7;
}
function eight(action?: Function): number {
    return action ? action(8) : 8;
}
function nine(action?: Function): number {
    return action ? action(9) : 9;
}

function plus(number?: number) {
    if (!number) {
        throw new Error('function plus must have a number');
    }

    return function (newNumber: number) {
        return newNumber + number;
    };
}
function minus(number?: number) {
    if (!number) {
        throw new Error('function plus must have a number');
    }

    return function (newNumber: number) {
        return newNumber - number;
    };
}
function divide(number?: number) {
    if (!number) {
        throw new Error('function plus must have a number');
    }

    return function (newNumber: number) {
        return newNumber / number;
    };
}
function mult(number?: number) {
    if (!number) {
        throw new Error('function plus must have a number');
    }

    return function (newNumber: number) {
        return newNumber * number;
    };
}

// one(plus(three())) = 4
// four(mult(three())) = 12

export const calcConsole = () => {
    console.log(
        '1 + 3 * 4 * 3 -> ',
        one(plus(three(mult(four(mult(three())))))),
        ' -- 37 ',
    );
    console.log('4 * 3 -> ', four(mult(three())), ' -- 12 ');
    console.log('9 / 3 -> ', nine(divide(three())), ' -- 3 ');
    console.log('8 - 7 -> ', eight(minus(seven())), ' -- 1 ');
};
