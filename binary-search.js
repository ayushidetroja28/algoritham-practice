// 🔵 BINARY SEARCH — BEGINNER MASTER GUIDE
// 🧠 What Binary Search REALLY means (simple words)

// Binary Search is NOT just “searching in a sorted array”.

// It is:

// Eliminating half of the search space every step

// 🔔 When interviewer hints “Binary Search”

// Think Binary Search when you hear:

// Sorted array

// Min / Max possible answer

// Monotonic behavior

// First / last occurrence

// Search space reduction

// 🧩 TYPE 1: CLASSIC BINARY SEARCH

// 🧩 PROBLEM 1: Find target in sorted array
// 👉 Problem

// 1. Input/Output
// I: array, target
// O: index or -1

// 2. Bruteforce
// Scan array


// 3. PseudoCode
// left = 0; right = n-1
// while left <= right
//  mid = floor((left+rigth)/2)
//     if(nums[mid] === target)
//      return mid
//     else if(nums[mid] < target)
//      left = mid + 1
//     else
//      right = mid - 1
// return -1


function find_target_in_sorted_array(arr, target) {
    arr.sort();
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// console.log("----", find_target_in_sorted_array([1, 3, 5, 7, 9], 7))


// ============================================================================================================


// 🟢 TYPE 2: FIRST / LAST OCCURRENCE (VERY COMMON)
// 🧩 PROBLEM 2: Find first occurrence of target
// 👉 Problem

// 1. Input/Output
// I: array, target
// O: index or -1

// 2. Bruteforce
// Scan array
// Continue searching left


// 3. PseudoCode
// left = 0; right = n-1
// while left <= right
//  mid = floor((left+rigth)/2)
//     if(nums[mid] === target)
//      return mid
//     else if(nums[mid] < target)
//      left = mid + 1
//     else
//      right = mid - 1
// return -1


function firstOccurrence(arr, target) {
    let left = 0, right = arr.length - 1;
    let result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

// console.log("----", firstOccurrence([1, 2, 3, 2, 3], 3))


// ============================================================================================================


// 🟠 TYPE 3: BINARY SEARCH ON ANSWER (INTERVIEW FAVORITE)
// 🧩 PROBLEM 3: Minimum number in rotated sorted array
// 👉 Problem

// 1. Input/Output
// I: array
// O: int

// 2. Bruteforce
// Array is partially sorted
// One half is always sorted


// 3. PseudoCode
// left = 0; right = n-1
// while left < right
//  mid = floor((left+rigth)/2)
//     if(nums[mid] > nums[rigth])
//      left = mid + 1
//     else
//      right = mid
// return nums[left]


function findMin(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return arr[left];
}

console.log("----", findMin([4, 5, 6, 7, 0, 1, 2]))


// ============================================================================================================
