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
}