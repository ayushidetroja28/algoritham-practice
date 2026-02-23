// 🟣 RECURSION — BEGINNER MASTER GUIDE
// 🧠 What Recursion REALLY is (simple words)

// A function that solves a smaller version of the same problem

// That’s it. Nothing more.

// 🔔 When interviewer hints “Recursion”

// Think recursion when you hear:

// Tree

// Nested structure

// Subset / permutation

// DFS

// Backtracking

// 🔑 THE GOLDEN RULE (VERY IMPORTANT)

// Every recursion MUST have:

// 1️⃣ Base case → when to STOP
// 2️⃣ Recursive call → smaller problem

// If you miss either → infinite loop ❌

// 🧩 PROBLEM 1: PRINT NUMBERS (FOUNDATION)
// 👉 Problem

// 1. Input/Output
// I: n
// O: number

// 2. Bruteforce
// print(n - 1)
// then print n


// 3. PseudoCode
// function print(n){
//  if n === 1
//     print n
//     return
// print(n-1)
// print n
// }


function print_n_number(n) {
    if (n === 1) {
        console.log(1);
        return;
    }
    print_n_number(n - 1);
    console.log(n);

}

// console.log("----", print_n_number(5))


// ============================================================================================================


// 🧩 PROBLEM 2: FACTORIAL (CLASSIC)
// 👉 Problem

// 1. Input/Output
// I: n
// O: number

// 2. Bruteforce
// n*(n - 1)


// 3. PseudoCode
// function factorial(n){
//  if n === 1
//     return 1
// return n * factorial(n - 1)
// }


function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);

}

// console.log("----", factorial(5))


// ============================================================================================================



// 🧩 PROBLEM 3: REVERSE STRING (INTERVIEW FAVORITE)
// 👉 Problem

// 1. Input/Output
// I: string
// O: string

// 2. Bruteforce
// Reverse rest of string
// Add first character at end


// 3. PseudoCode
// function reverse_string(str){
//  if str.length === 1
//     return str
// return reverse_string(str.slice(1)) + str[0]
// }


function reverse_string(str) {
    if (str.length === 1) {
        return str;
    }
    return reverse_string(str.slice(1)) + str[0];

}

// console.log("----", reverse_string("abcd"))


// ============================================================================================================



// 🧩 PROBLEM 4: Sum of array
// 👉 Problem

// 1. Input/Output
// I: array
// O: int

// 2. Bruteforce
// sum all int


// 3. PseudoCode
// function sum_array(arr, index = 0){
//  if index === arr.length return 0
// return arr[index] + sum_array(arr, index - 1)
// }


function sum_array(arr, index = 0) {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sum_array(arr, index + 1);

}

// console.log("----", sum_array([1, 2, 3, 4], 0))


// ============================================================================================================

// 🧩 PROBLEM 5: Fibonacci
// 👉 Problem

// 1. Input/Output
// I: array
// O: int

// 2. Bruteforce
// sum all int

// 3. PseudoCode
// function fibonacci(index){
//  if index === 0 || 1 ? return 0 || 1
//  return fibonacci[index - 1] + fibonacci(index - 2)
// }


function fibonacci(index) {
    if (index === 0) {
        return 0;
    }
    if (index === 1) {
        return 1;
    }
    return fibonacci(index - 1) + fibonacci(index - 2);

}

// console.log("----", fibonacci(8))


// ============================================================================================================

// 🧩 PROBLEM 6: Power of number
// 👉 Problem

// 1. Input/Output
// I: int, int: 2,3
// O: int:8

// 2. Bruteforce
// prod of 2 itself 3 time.

// 3. PseudoCode
// function power_of_number(n, p){
//  if n === 0  return 0 
//  if p === 0 return 1
//  return n * power_of_number(n, p-1)
// }


function power_of_number(n, p) {
    if (n === 0) {
        return 0;
    }
    if (p === 0) {
        return 1;
    }
    return n * power_of_number(n, p - 1);

}

// console.log("----", power_of_number(2, 3))


// ============================================================================================================

// 🧩 PROBLEM 7: Palindrome check
// 👉 Problem

// 1. Input/Output
// I: string
// O: boolean

// 2. Bruteforce
// check reverse string

// 3. PseudoCode
// function palindrome(str){
//  if str.length === 1 return str;
//  return palindrome(str.slice(1)) + str[0] === str
// }


function palindrome(str) {
    if (str.length === 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false
    }
    return palindrome(str.slice(1, -1))

}

console.log("----", palindrome("cdabadc"))


// ============================================================================================================
