// 1️⃣ DFS example
// 2️⃣ BFS example

// Same tree, same input, clear output.

// 🌳 EXAMPLE TREE (INPUT)

// Tree structure:

//         1
//        / \
//       2   3
//      / \   \
//     4   5   6

// 🟢 INPUT (What interviewer gives)
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const root = new TreeNode(1);
const root2 = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.right = new TreeNode(6);

root2.left = new TreeNode(2);
root2.right = new TreeNode(3);

root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);

root2.right.left = new TreeNode(6);


// DFS TYPES (Quick Recall)
// Type	Order
// Preorder	Root → Left → Right
// Inorder	Left → Root → Right
// Postorder	Left → Right → Root

// We’ll do Preorder (most common in interviews).

// 👉 Problem
// 🟣 DFS EXAMPLE (PREORDER)
// Return preorder traversal of tree.

// ✍️ PSEUDOCODE
// function preorder(root):
//   if root is null:
//     return empty list

//   add root value
//   preorder(left)
//   preorder(right)

function preorderTraversal(root) {
    const result = [];

    function dfs(node) {
        if (node === null) return;

        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return result;
}

// console.log("---pre---", preorderTraversal(root))


// ============================================================================================================


// 👉 Problem
// 🟣 DFS EXAMPLE (inorder)
// Return inorder traversal of tree.

// ✍️ PSEUDOCODE
// function inorder(root):
//   if root is null:
//     return empty list

//   inorder(left)
//   add root value
//   inorder(right)

function inorderTraversal(root) {
    const result = [];

    function dfs(node) {
        if (node === null) return;

        dfs(node.left);
        result.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return result;
}

// console.log("--in----", inorderTraversal(root))


// ============================================================================================================


// 👉 Problem
// 🟣 DFS EXAMPLE (postorder)
// Return postorder traversal of tree.

// ✍️ PSEUDOCODE
// function postorder(root):
//   if root is null:
//     return empty list

//   preorder(left)
//   preorder(right)
//   add root value

function postorderTraversal(root) {
    const result = [];

    function dfs(node) {
        if (node === null) return;

        dfs(node.left);
        dfs(node.right);
        result.push(node.val);
    }
    dfs(root);
    return result;
}

// console.log("---post---", postorderTraversal(root))


// ============================================================================================================


// 🟢 BFS EXAMPLE (LEVEL ORDER)
// 👉 Problem

// Return level order traversal.

// ✍️ PSEUDOCODE
// function levelOrder(root):
//   if root is null:
//     return empty list

//   queue = [root]

//   while queue not empty:
//     node = queue.dequeue()
//     add node value

//     if node.left exists:
//       queue.enqueue(node.left)
//     if node.right exists:
//       queue.enqueue(node.right)



function levelOrderTraversal(root) {
    const result = [];
    if (root === null) return result;

    const queue = [root];
    console.log("---w--", queue)
    while (queue.length > 0) {
        const node = queue.shift();
        result.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return result;
}

// console.log("---level-BFS---", levelOrderTraversal(root))


// ============================================================================================================



// 🟢 MAX DEPTH (DFS CLASSIC)
// 👉 Problem

// max depth

// ✍️ PSEUDOCODE
// function maxdepth(root):
//   if !root return 0:
//   return 1 + max(maxdepth(root.left), maxdepth(root.right))


function maxdepth(root) {
    if (!root) {
        return 0;
    }
    return 1 + Math.max(maxdepth(root.left), maxdepth(root.right))
}

// console.log("---level-BFS---", maxdepth(root))


// ============================================================================================================


// 🟢 SAME TREE 
// 👉 Problem

// same tree

// ✍️ PSEUDOCODE
// function isSameTree(p,q):
//   if p === null && q === null return true
//   if p === null || q === null || p.val !== q.val return false
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)


function isSameTree(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null || p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

// console.log("---level-BFS---", isSameTree(root, root))


// ============================================================================================================

// 🟢 Invert TREE 
// 👉 Problem

// Invert tree

// ✍️ PSEUDOCODE
// function invertTree(root):
//   if !root return root;
//   root.left = invertTree(root.right);
//   root.rigth = invertTree(root.left);
// return root;



function invertTree(root) {
    if (!root) return root;
    const leftSubTree = invertTree(root.left);
    const rightSubTree = invertTree(root.right);

    root.left = rightSubTree;
    root.right = leftSubTree;

    return root;
}

// console.log("---level-BFS---", invertTree(root))


// ============================================================================================================


// 🟢 level order traversal
// 👉 Problem

// level order traversal


// 1. Input/Output
// I: TreeNode
// O: number[][]

// 2. Bruteforce
// check left to right tree.

// 3. PseudoCode
// function level_order_traversal(root):
//   if !root return root;
//   root.left = level_order_traversal(root.right);
//   root.rigth = level_order_traversal(root.left);
// return root;

const a = new TreeNode();

function level_order_traversal(root) {
    const result = [];
    if (!root.val) {
        return result;
    }
    result.push([root.val]);
    function dfs(node) {
        if (node === null) return;

        let a = [];

        if (node.left) {
            a.push(node.left.val)
        }
        if (node.right) {
            a.push(node.right.val)
        }
        a.length > 0 && result.push(a);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return result;
}

console.log("---level-BFS---", level_order_traversal(a))


// ============================================================================================================

// Diameter of tree
// ✔ Lowest common ancestor