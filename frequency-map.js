// 🧩 PROBLEM 1 (VERY BASIC)
// 👉 Problem

// Check if a string has all unique characters

// 1. Input/Output
// 2. Bruteforce
// compare every char with other char
// 3. PseudoCode
// empty set
// for loop of str
// check if char exist in set return false else ADD char

function unique_char(str) {
    let stack = new Set();

    for (let s of str) {
        if (stack.has(s)) {
            return false;
        } else {
            stack.add(s)
        }
    }
    return true;
}

// console.log("----", unique_char("abc"))


// ===========================================================================================================


// 🧩 PROBLEM 2 (VERY BASIC)
// 👉 Problem

// Valid Anagram

// 1. Input/Output
// I: two string
// O: boolean

// 2. Bruteforce
// compare every char of one string with other char of string

// 3. PseudoCode
// if both length not same return false
// sort both string, trim()
// comapre sorted string return true if ok otherwise false

function check_anagram(str1, str2) {
    if (str1.trim().length !== str2.trim().length) {
        return false;
    }
    let a = str1.split("").sort();
    let b = str2.split("").sort();
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

// console.log("----", check_anagram("abc", "cba"))


// ============================================================================================================

// 🧩 PROBLEM 3 (VERY BASIC)
// 👉 Problem

// First non-repeating character

// 1. Input/Output
// I: string
// O: char

// 2. Bruteforce
// count of all char and store in map

// 3. PseudoCode
// declare map
// using for loop add map with key and value: char and count
// for loop on str and get char of 1 count

function first_non_repeat_char(str) {
    let stroe = new Map();

    for (let a of str) {
        stroe.set(a, (stroe.has(a) || 0) + 1);
    }
    for (let b of str) {
        if (stroe.get(b) === 1) {
            return b;
        }
    }

    return null;
}

// console.log("----", first_non_repeat_char("aabc"))


// ============================================================================================================


// 🧩 PROBLEM 4 (VERY BASIC)
// 👉 Problem

// Majority element

// 1. Input/Output
// I: array
// O: number

// 2. Bruteforce
// count add if same numebr found and remove if another

// 3. PseudoCode
// count and number
// using for loop count increse if same number and descre if another number

function majority_element(arr) {
    let count = 0;
    let char = 0;

    for (let a of arr) {
        if (count === 0) {
            char = a;
        }
        count = (a === char) ? (count + 1) : (count - 1);
    }
    return char
}

// console.log("----", majority_element([3, 2, 3, 2, 2, 2]))


// ============================================================================================================


// 🧩 PROBLEM 5 (VERY BASIC)
// 👉 Problem

// Find duplicate number

// 1. Input/Output
// I: array
// O: array

// 2. Bruteforce
// check with each element

// 3. PseudoCode
// create set and one array
// using for loop if element is not in set then add in set else add in array

function duplicate_number(arr) {
    let unique = new Set();
    let duplicate = [];

    for (let a of arr) {
        if (unique.has(a)) {
            duplicate.push(a);
        } else {
            unique.add(a)
        }
    }

    return duplicate;

}

// console.log("----", duplicate_number([3, 2, 3, 2, 4]))


// ============================================================================================================


// 🧩 PROBLEM 6 (VERY BASIC)
// 👉 Problem

// Two Sum (map version)

// 1. Input/Output
// I: array, target
// O: array

// 2. Bruteforce
// check with each element

// 3. PseudoCode
// create Map 
// using for loop if target - element is not in Map then add otherwise return

function to_sum(nums, target) {
    const numsele = new Map();

    for (let i = 0; i < nums.length; i++) {
        let c = target - nums[i];
        if (numsele.has(c)) {
            return [numsele.get(c), i];
        }
        numsele.set(nums[i], i)
        console.log("----", numsele)
    }
}

// console.log("----", to_sum([11, 15, 2, 7], 9))


// ============================================================================================================
// ============================================================================================================


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
    if (k === 0) return 0;

    let left = 0;
    let maxLen = 0;
    let map = new Map(); // char -> frequency

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // add current character to map
        map.set(char, (map.get(char) || 0) + 1);

        // if distinct characters > k, shrink window
        while (map.size > k) {
            const leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);

            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }

            left++;
        }
        // update maximum length
        maxLen = Math.max(maxLen, right - left + 1);
        console.log("-------", right, left, maxLen, map);
    }

    return maxLen;
};


console.log("----------", lengthOfLongestSubstringKDistinct("eceba", 2))