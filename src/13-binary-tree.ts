export class BinaryTree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    add(value: number) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            let node: TreeNode | null = this.root;
            let newNode = new TreeNode(value);
            while (node) {
                if (value > node.value) {
                    if (!node.right) {
                        break;
                    }
                    node = node.right;
                } else {
                    if (!node.left) {
                        break;
                    }
                    node = node.left;
                }
            }
            if (value > node.value) {
                node.right = newNode;
            } else {
                node.left = newNode;
            }
        }
    }

    print(root = this.root) {
        if (root) {
            console.log('root -> ', root?.value);
            this.print(root.left);
            this.print(root.right);
        }
    }
}

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
