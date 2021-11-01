/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

    If you want to know more: http://en.wikipedia.org/wiki/DNA

    In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

    More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

    Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]*/


/*
function DNAStrand(dna){
    let output = '';
    for (let i=0; i<dna.length; i++) {
        if (dna[i] == 'A') {
            output += 'T';
        } else if (dna[i] == 'T') {
            output += 'A';
        } else if (dna[i] == 'C') {
            output += 'G';
        } else if (dna[i] == 'G') {
            output += 'C';
        }
    }
    return output;
}*/
// --------------------------------------------------------------

/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

    Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']*/

/*
function solution(str){
    if (str.length === 0) {
        return []
    };

    return (str.length % 2 ? str + '_' : str).match(/../g);
}*/
// ----------------------------------------------

/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100*/

/*
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
        if (parens[i] == '(') n++;
        if (parens[i] == ')') n--;
        if (n < 0) return false;
    }

    return n == 0;
}*/
// ---------------------------------------------------
/*
iq test
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
    iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd*/


/*
function iqTest(numbers){
    let initNumber = numbers.split(' ').map(val=>val*1)
    let eventNumber = initNumber.filter(val=>val%2===0)
    let addNumber =initNumber.filter(val=>val%2===1)
    return eventNumber.length > addNumber.length ?
        initNumber.indexOf(addNumber[0])+1 :
        initNumber.indexOf(eventNumber[0])+1
}*/
// --------------------------------------------------------
/*Vasya - Clerk
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

    Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

    Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

    Examples:
tickets([25, 25, 50]) // => YES
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)*/

/*function tickets(peopleInLine) {
    let deposit = [0, 0, 0];
    function updateDeposit(paid) {
        for (let i = 0; i < deposit.length; i++) {
            deposit[i] = deposit[i] + paid[i];
        }
    }
    for (let index in peopleInLine) {
        if (peopleInLine[index] === 25) {
            updateDeposit([1, 0, 0])
        } else if (peopleInLine[index] === 50) {
            updateDeposit([-1, 1, 0])
        } else {// pay 100
            if (deposit[0] >= 1 && deposit[1] >= 1) {
                updateDeposit([-1, -1, 1]);
            } else if (deposit[0] >= 3 && deposit[1] == 0) {
                updateDeposit([-3, 0, 1]);
            } else {
                updateDeposit([-3, 0, 1]);
            }
        }
        if (deposit[0] < 0 || deposit[1] < 0 || deposit[2] < 0) {
            return 'NO';
        }
    }
    return 'YES';
}*/
// ==========================================
/*
Detect Pangram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.*/

/*
function isPangram(string){
    let alpha = string.toUpperCase().split("");
    for (let beta = 65; beta < 91; beta++) {
        let gamma = String.fromCharCode(beta);
        if (alpha.includes(gamma)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}*/

// ===========================================
/*

Welcome.

    In this kata you are required to, given a string, replace every letter with its position in the alphabet.

    If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

    Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)


function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var code = text.toUpperCase().charCodeAt(i)
        if (code > 64 && code < 91) result += (code - 64) + " ";
    }

    return result.slice(0, result.length - 1);
}*/
// ====================================

/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

    Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
    In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
    Beware: r must be without duplicates.*/

/*
function inArray(array1,array2){
    let arrR = array2.join(" ")
    return array1.filter(item => arrR.search(item) !== -1 && item !== undefined ).sort()
}*/
// ========================================

/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

    Your function productFib takes an integer (prod) and returns an array:

    [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

    If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

    [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

    Some Examples of Return:
    (depend on the language)

productFib(714) # should return (21, 34, true),
    # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false),
    # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
    productFib(714) # should return [21, 34, true],
    productFib(800) # should return [34, 55, false],
    -----
        productFib(714) # should return {21, 34, 1},
    productFib(800) # should return {34, 55, 0},
    -----
        productFib(714) # should return {21, 34, true},
    productFib(800) # should return {34, 55, false},
    Note:
You can see examples for your language in "Sample Tests".*/


/*function productFib(prod){
    const f = (n) => {
        let phi = (1 + Math.sqrt(5)) / 2;
        return Math.round(Math.pow(phi, n) / Math.sqrt(5))
    }

    for (let i = 0; i < Math.sqrt(prod)/2 ; i++) {
        if (f(i) * f(i+1) === prod) return [f(i), f(i+1), true]
        if (f(i) * f(i+1) < prod && f(i+1) * f(i+2) > prod) return [f(i+1), f(i+2), false]
    }
    return;
}*/
// ===================

/*Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

    For example:

    persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                          // and 4 has only one digit

persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                       // 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 // because 4 is already a one-digit number*/

/*
function persistence(num) {
    let Pi = 0;
    let wer;

    if(Number.isInteger(num) == true){

        while(num >= 10){

            wer = (num + "").split("");
            num = wer.reduce((acc,val) => acc * val);
            Pi+=1;

        } return Pi

    }
}*/
// -----------------------------------

/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

    Example:

Given an input string of:

    apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

    apples, pears
grapes
bananas
The code would be called like so:

    var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"*/


/*
function solution(input, markers) {
    let arr = input.split('\n');
    let mark;
    for (let i in arr) {
        if (arr[i].indexOf(markers[0]) !== -1) mark = arr[i].indexOf(markers[0]);
        else if (arr[i].indexOf(markers[1]) !== -1) mark = arr[i].indexOf(markers[1]);
        else continue;
        arr[i] = arr[i].slice(0, mark - 1);
    }
    return arr.join('\n');
};*/

// =====================================

/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.*/

/*function incrementString (strng) {
    if(isNaN(parseInt(strng[strng.length - 1]))) return strng + '1';
    return strng.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
        var up = parseInt(p2) + 1;
        return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    })
}*/
// ============================

/*
Perimeter of squares in a rectangle

The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

    alternative text

Hint:
    See Fibonacci sequence

Ref:
    http://oeis.org/A000045

        The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216*/

/*function perimeter(n) {
    const arr = [1];

    for(let i = 0; i < n; i++) {
        if(arr.length === 1) {
            arr.push(1);
        }
        else {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
    }

    return arr.reduce((acc, n) => acc + n, 0) * 4;
}*/
// ======================================

/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

    I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

    For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

    Example:
    "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

    "100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

    180 is before 90 since, having the same "weight" (9), it comes before as a string.

    All numbers in the list are positive numbers and the list can be empty.

    Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.*/


/*
function orderWeight(strng) {
    var weighted = strng.split(" ")
        .map((sNum) => {

            var sum = 0;

            for (var i = 0; i < sNum.length; i++) {
                sum += parseInt(sNum[i]);
            }

            return sum;
        });
    var combined = strng.split(" ")
        .map((weight, i) => [weight,weighted[i]]);
    return combined
        .sort((item1, item2) => {
            if (item1[1] === item2[1])
                return item1[0] > item2[0] ? 1 : -1;
            else
                return item1[1] - item2[1];
        })
        .map((item) => item[0])
        .join(" ");
}*/
// =====================================


// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

/*
function boolToWord( bool ){
    if (bool === true) {
        return 'Yes'
    } return 'No'
}*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Convert a Number to a String!
We need a function that can transform a number into a string.

    What ways of achieving this do you know?

    Examples:
    123 --> "123"
999 --> "999"*/
/*

function numberToString(num) {

    return num = num.toString();

}*/
// ============================================

Grasshopper - Summation

let summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i
    }
    return sum;
}

