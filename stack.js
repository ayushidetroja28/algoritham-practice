// 🟤 STACK PATTERN — BEGINNER FRIENDLY
// 🧠 What a Stack REALLY means (simple words)

// Last In → First Out (LIFO)
// Like a stack of plates 🍽️

// You use a stack when the current element depends on the previous one.

// 🔔 When interviewer hints “Stack”

// Your brain should immediately think STACK when you hear:

// Valid / invalid

// Matching pairs

// Previous / next greater / smaller

// Undo / back

// Nested structure

// 🧩 PROBLEM 1: VALID PARENTHESES (MOST COMMON)
// 👉 Problem

// Check if parentheses are valid:

// 1. Input/Output
// I: string
// O: boolean

// 2. Bruteforce
// special data structure
// Open bracket must be closed later
// Closing must match most recent open

// 3. PseudoCode
// create empty stack
// foor loop
// if openaing bracket
//   push to stack
// else
// if stack empty -> false
// pop from stack
// if mismatch -> false

// if stack empty -> true
// else ->false


function isValid(str) {
    const stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    for (let char of str) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            let a = stack.pop();
            if (a !== map[char]) {
                return false;
            }
        }
    }
    return stack.length === 0
}

// console.log("----", isValid("{[(]}"))


// ============================================================================================================


// 🧩 PROBLEM 2: NEXT GREATER ELEMENT
// 👉 Problem

// 1. Input/Output
// I: array
// O: array

// 2. Bruteforce
// for each element
// scan right side

// 3. PseudoCode
// add -1 into current array
// create empty stack
// foor loop
// while stack not empty AND nums[i] > nums[stack top]
//     pop index
//     result[popIndex] = nums[i]
//   push i


function next_greater_element(arr) {
    const result = new Array(arr.length).fill(-1);
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        while (stack.length && current > arr[stack[stack.length - 1]]) {
            let id = stack.pop();
            result[id] = current;
        }

        stack.push(i);

    }
    return result
}

// console.log("----", next_greater_element([4, 5, 2, 10]))


// ============================================================================================================



// 🧩 PROBLEM 3: Remove All Adjacent Duplicates In String
// 👉 Problem

// 1. Input/Output
// I: string
// O: string

// 2. Bruteforce
// for each element
// scan right side

// 3. PseudoCode
// create empty stack
// foor loop
//     if(===)
//      pop index
//     else
// push
// return stack


function remove_adjacent_duplicate(str) {
    let stack = [];
    for (const char of str) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join("");
}

// console.log("----", remove_adjacent_duplicate("azxxzy"))


// ============================================================================================================


// 🧩 PROBLEM 3: Daily Temperatures
// 👉 Problem

// 1. Input/Output
// I: string
// O: string

// 2. Bruteforce
// for each element
// scan right side

// 3. PseudoCode
// create empty stack
// foor loop
//     if(===)
//      pop index
//     else
// push
// return stack


function daily_temp(arr) {
    const result = new Array(arr.length).fill(0);
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            let a = stack.pop();
            result[a] = i - a
        }
        stack.push(i);

    }
    return result;
}

console.log("----", daily_temp([73, 74, 75, 71, 69, 72, 76, 73]))


// ============================================================================================================

