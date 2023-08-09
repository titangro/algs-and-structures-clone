interface ITreeBranch {
    value: number;
    children?: ITreeBranch[];
}

export const tree: ITreeBranch[] = [
    {
        value: 5,
        children: [
            {
                value: 5,
            },
            {
                value: 10,
                children: [
                    {
                        value: 11,
                    },
                ],
            },
            {
                value: 11,
                children: [
                    {
                        value: 12,
                        children: [
                            {
                                value: 5,
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
                value: 7,
            },
            {
                value: 12,
                children: [
                    {
                        value: 11,
                    },
                ],
            },
            {
                value: 14,
            },
        ],
    },
];

export function treeSum(tree: ITreeBranch[]): number {
    let result = 0;
    let stack: ITreeBranch[] = [];

    tree.forEach((branch) => stack.push(branch));

    while (stack.length) {
        const node = stack.pop();
        if (node) {
            result += node.value;
            node.children?.forEach((branch) => stack.push(branch));
        }
    }

    return result;
}
