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


function iqTest(numbers){
    let initNumber = numbers.split(' ').map(val=>val*1)
    let eventNumber = initNumber.filter(val=>val%2===0)
    let addNumber =initNumber.filter(val=>val%2===1)
    return eventNumber.length > addNumber.length ?
        initNumber.indexOf(addNumber[0])+1 :
        initNumber.indexOf(eventNumber[0])+1
}