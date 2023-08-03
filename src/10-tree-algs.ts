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

export function recursiveTree(tree?: ITreeBranch[]) {
    if (!tree) {
        return 0;
    }

    let sum = 0;
    tree.forEach((node) => {
        sum += node.value + recursiveTree(node.children);
    });

    return sum;
}

export function iterationTree(tree: ITreeBranch[]) {
    if (!tree.length) {
        return 0;
    }
    let sum = 0;
    let stack: ITreeBranch[] = [];

    tree.forEach((node) => stack.push(node));
    while (stack.length) {
        const node = stack.pop();
        sum += node?.value || 0;
        if (node?.children) {
            node.children.forEach((node) => stack.push(node));
        }
    }

    return sum;
}
