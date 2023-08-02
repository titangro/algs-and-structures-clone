interface ITreeBranch {
    value: number;
    children?: ITreeBranch[];
}

export const tree: ITreeBranch[] = [
    {
        value: 5,
        children: [
            {
                value: 10,
                children: [
                    {
                        value: 11,
                    },
                ],
            },
            {
                value: 7,
                children: [
                    {
                        value: 5,
                        children: [
                            {
                                value: 1,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        value: 5,
        children: [
            {
                value: 10,
            },
            {
                value: 15,
            },
        ],
    },
];

export function recursive(tree?: ITreeBranch[]) {
    if (!tree) {
        return 0;
    }

    let sum = 0;
    tree.forEach((node) => {
        sum += node.value + recursive(node.children);
    });

    return sum;
}

export function iteration(tree: ITreeBranch[]) {
    if (!tree.length) {
        return 0;
    }
    let sul = 0;
    let stack = [];
}
