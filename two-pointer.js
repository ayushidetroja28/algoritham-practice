
// 🟡 PATTERN 2: TWO POINTERS
// When to use:

// Sorted array

// Pair problems

// Opposite direction movement

// 🧩 PROBLEM 1 (VERY BASIC)
// 👉 Problem

// Check if pair exists with sum = target (sorted array)

// 1. Input/Output
// I: array, target
// O: boolean

// 2. Bruteforce
// Check all pairs

// 3. PseudoCode
// sort array
// declare two variable left and right
// while left < right check sum of left and right if === return true, if big so left


function pair_with_target_sum(nums, target) {
    nums.sort();
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return true;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

// console.log("----", pair_with_target_sum([1, 2, 3, 4, 5, 6], 6))


// ============================================================================================================


// 🧩 PROBLEM 2 (VERY BASIC)
// 👉 Problem

// Pair with given sum

// 1. Input/Output
// I: array, target
// O: array

// 2. Bruteforce
// Check all pairs

// 3. PseudoCode
// sort array
// declare two variable left and right
// while left < right check sum of left and right if === return true, if big so left


function pair_with_given_sum(nums, target) {
    nums.sort();
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [nums[left], nums[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

// console.log("----", pair_with_given_sum([1, 2, 3, 4, 6], 6))


// ============================================================================================================


// 🧩 PROBLEM 3 (VERY BASIC)
// 👉 Problem

// Reverse string

// 1. Input/Output
// I: string
// O: string

// 2. Bruteforce
// Check string and add new string

// 3. PseudoCode
// declare one string
// declare two variable left and right
// while left <= right add each char in new string and r--


function reverse_string(str) {
    let new_str = "";
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        new_str += str[right];
        right--;
    }
    return new_str
}

// console.log("----", reverse_string("abc"))


// ============================================================================================================



// 🧩 PROBLEM 4 (VERY BASIC)
// 👉 Problem

// Palindrome check

// 1. Input/Output
// I: string
// O: boolean

// 2. Bruteforce
// create reverse string and compare

// 3. PseudoCode
// declare one string
// declare two variable left and right
// while left <= right add each char in new string and r--
// check reversestr and oldstring return true false


function palindrome_string(str) {
    let rev_str = "";
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        rev_str += str[right];
        right--;
    }
    return rev_str === str
}

// console.log("----", palindrome_string("abcba"))


// ============================================================================================================



// 🧩 PROBLEM 5 (VERY BASIC)
// 👉 Problem

// Remove duplicates (sorted array)

// 1. Input/Output
// I: array
// O: array

// 2. Bruteforce
// check all element and remove duplicate

// 3. PseudoCode
// declare one array and map
// for loop, if not has in map, then add Map and new array


function remove_duplicate(arr) {
    let a = new Map();
    let new_arr = [];
    for (let b of arr) {
        if (!a.has(b)) {
            a.set(b);
            new_arr.push(b);
        }
    }

    return new_arr
}

console.log("----", remove_duplicate([1, 1, 2, 2, 3, 4, 4, 4, 5]))


// ============================================================================================================