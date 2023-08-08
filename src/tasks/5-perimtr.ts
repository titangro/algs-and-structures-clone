export const matrix = ['XOOXO', 'XOOXO', 'OOOXO', 'XXOXO', 'OXOOO'];

export function perimetr(matrix: string[]): number {
    let result = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'X') {
                result += +(j === 0 || matrix[i][j - 1] === 'O');
                result += +(i === 0 || matrix[i - 1][j] === 'O');
                result += +(
                    i === matrix.length - 1 || matrix[i + 1][j] === 'O'
                );
                result += +(
                    j === matrix[i].length - 1 || matrix[i][j + 1] === 'O'
                );
            }
        }
    }

    return result;
}
