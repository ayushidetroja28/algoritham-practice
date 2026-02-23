// 🟣 SLIDING WINDOW — BEGINNER FRIENDLY
// 🧠 What Sliding Window REALLY means (simple words)

// Instead of recalculating again and again,
// reuse previous work by moving a window

// Think of a window that:

// Expands ➡️

// Shrinks ⬅️

// Moves ➡️

// 🔔 When interviewer hints “Sliding Window”

// Your brain should immediately think this when you hear:

// Subarray

// Substring

// Continuous elements

// Longest / smallest

// Sum / count / length

// ⚠️ If elements must be continuous → Sliding Window

// 🧩 TYPE 1: FIXED SIZE SLIDING WINDOW


// 🧩 PROBLEM 1 (VERY BASIC)
// 👉 Problem

// Find max sum of subarray of size k

// 1. Input/Output
// I: array, int
// O: int

// 2. Bruteforce
// take every subarray of size k
// calculate sum, max sum

// 3. PseudoCode
// declare two variable, currunt sum, max sum
// for loop, if i === k, maxsum = (maxsum, currentsum) and currentsum - arr[k-i]


function maxsum_subarray(arr, k) {
    let currentsum = 0;
    let maxsum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentsum += arr[i];
        if (i >= k - 1) {
            maxsum = Math.max(currentsum, maxsum);
            currentsum -= arr[i - (k - 1)]
        }
    }
    return maxsum;
}

// console.log("----", maxsum_subarray([2, 1, 5, 1, 3, 2], 3))


// ============================================================================================================



// 🧩 PROBLEM 2 (VERY BASIC)
// 👉 Problem

// Average of subarrays of size K

// 1. Input/Output
// I: array, int
// O: int

// 2. Bruteforce
// take every subarray of size k
// calculate sum, max sum / k

// 3. PseudoCode
// declare two variable, currunt sum, max sum
// for loop, if i === k, maxsum = (maxsum, currentsum) and currentsum - arr[i - (k-i)] return maxsum/k


function avgsum_subarray(arr, k) {
    let currentsum = 0;
    let maxsum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentsum += arr[i];
        if (i >= k - 1) {
            maxsum = Math.max(currentsum, maxsum);
            currentsum -= arr[i - (k - 1)]
        }
    }
    return maxsum / k;
}

// console.log("----", avgsum_subarray([1, 12, -5, -6, 50, 3], 4))


// ============================================================================================================




// 🧩 PROBLEM 3 (VERY BASIC)
// 👉 Problem

// Min sum of subarray size K

// 1. Input/Output
// I: array, int
// O: int

// 2. Bruteforce
// take every subarray of size k
// calculate sum, min sum 

// 3. PseudoCode
// declare two variable, currunt sum, min sum, find first minimum sum using for loop
// for loop, if i === k, minsum = (minsum, currentsum) and currentsum - arr[i - (k-i)] 


function minsum_subarray(arr, k) {
    let currentsum = 0;
    let minsum = 0;
    for (let i = 0; i < k; i++) {
        minsum += arr[i];
    }

    for (let i = 0; i < arr.length; i++) {
        currentsum += arr[i];
        if (i >= k - 1) {
            minsum = Math.min(currentsum, minsum);
            currentsum -= arr[i - (k - 1)]
        }
    }
    return minsum;
}

// console.log("----", minsum_subarray([1, 12, -5, -6, 50, 3], 4))


// ============================================================================================================



// 🧩 PROBLEM 4 (VERY BASIC)
// 👉 Problem

// Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

// 1. Input/Output
// I: array, k, threshold
// O: int

// 2. Bruteforce
// take every subarray of size k
// calculate sum and target,  if it's sum of sum >= target count++

// 3. PseudoCode
// declare two variable, sum count, find first sum using for loop and find target k*threshold
// for loop, add sum of subarray and check sum >= target count++ return count.


function avg_threshold_subarray(arr, k, threshold) {
    if (arr.length < k) return 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }

    const target = k * threshold;
    let count = sum >= target ? 1 : 0;

    for (let i = k; i < arr.length; i++) {
        sum += arr[i] - arr[i - k];
        if (sum >= target) {
            count++;
        }
    }
    return count;
}

// console.log("----", avg_threshold_subarray([2, 2, 2, 2, 5, 5, 5, 8], 3, 4))


// ============================================================================================================

// 🟢 TYPE 2: VARIABLE SIZE SLIDING WINDOW (VERY IMPORTANT)

// 🧩 PROBLEM 1 (VERY BASIC)
// 👉 Problem

// Smallest subarray with sum ≥ target

// 1. Input/Output
// I: array, k, threshold
// O: int

// 2. Bruteforce
// Check all subarrays
// Find smallest length

// 3. PseudoCode
// left = 0 sum = 0 minLength = Infinity
// for loop right 0 to n-1
// sum += num[right]
// while(sum >= target)
//     update minLength
//     sum -= nums[left]
//     left++


function smallest_subarray(arr, target) {
    let left = 0;
    let sum = 0;
    let minLength = Infinity;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= arr[left];
            left++;
        }

    }

    return minLength
}

// console.log("----", smallest_subarray([2, 3, 1, 2, 4, 3], 7))


// ============================================================================================================


// 🧩 PROBLEM 2 (VERY BASIC)
// 👉 Problem

// Longest substring without repeating characters

// 1. Input/Output
// I: string
// O: int

// 2. Bruteforce
// Check all substring
// Find max length

// 3. PseudoCode
// left = 0 map = [] maxLength = 0
// for loop right 0 to n-1
// currchar = str[right]
//  if(map.has(char)){
// 
// }
// update maxLength
// char add map



function longest_substring(str) {
    let left = 0;
    let maxLength = 0;
    let char = new Map();

    for (let right = 0; right < str.length; right++) {
        const currchar = str[right];
        if (char.has(currchar) && char.get(currchar) >= left) {
            left = char.get(currchar) + 1;
        }

        char.set(currchar, right);
        maxLength = Math.max(maxLength, right - left + 1);

    }



    return maxLength
}

// console.log("----", longest_substring("abcabcdbb"))


// ============================================================================================================



// 🧩 PROBLEM 3 (VERY BASIC)
// 👉 Problem

// 2️⃣ Longest substring with at most K distinct characters

// 1. Input/Output
// I: string, k
// O: int

// 2. Bruteforce
// Check all substring
// Find max length of string with k disrinct char

// 3. PseudoCode
// newStr = [] maxLength = 0
// if unique char length < k return -1
// for loop i 0 to n-1
// newStr.push(char)
//  if(uniquearray > k){
//  remove first char
// }
// update maxLength
// return maxlength



function longest_substring_with_k(str, k) {
    let maxLength = 0;
    let newStr = [];
    if ([...new Set(str.split(""))].length < k) {
        return -1;
    }

    for (let i = 0; i < str.length; i++) {
        newStr.push(str[i]);
        let a = [...new Set(newStr)]
        if (a.length > k) {
            newStr.splice(str[i - (k - 1)], 1);
        }
        maxLength = Math.max(maxLength, newStr.length);
    }

    return maxLength
}

// console.log("----", longest_substring_with_k("aabacbebebe", 3))


// ============================================================================================================



// 🧩 PROBLEM 4 (VERY BASIC)
// 👉 Problem

// Fruits into baskets

// 1. Input/Output
// I: array
// O: int

// 2. Bruteforce
// Check all substring
// Find max length of string with 2 same char

// 3. PseudoCode
// maxLength = 0
// for loop i 0 to n-1
// newStr.push(char)
//  if(uniquearray > 2){
//  remove first char
// }
// update maxLength
// return maxlength



function fruit_into_basket(fruits) {
    const arrayLength = fruits.length;
    const fruitTypeCount = new Map();
    let maxFruits = 0;

    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arrayLength; windowEnd++) {
        const currentFruit = fruits[windowEnd];
        const currentCount = fruitTypeCount.get(currentFruit) || 0;
        fruitTypeCount.set(currentFruit, currentCount + 1);

        while (fruitTypeCount.size > 2) {
            const leftFruit = fruits[windowStart];
            const leftFruitCount = fruitTypeCount.get(leftFruit);

            fruitTypeCount.set(leftFruit, leftFruitCount - 1);

            if (fruitTypeCount.get(leftFruit) === 0) {
                fruitTypeCount.delete(leftFruit);
            }

            windowStart++;
        }

        const currentWindowSize = windowEnd - windowStart + 1;
        maxFruits = Math.max(maxFruits, currentWindowSize);
    }

    return maxFruits;

}

console.log("----", fruit_into_basket([1, 2, 3, 2, 2]))


// ============================================================================================================