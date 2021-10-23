/*var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3 ;
c *= 10;*/


/*var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

var myStr; // Change this line
myStr= 'FirstLine\n\t\\SecondLine\nThirdLine';*/

/*// Only change code below this line
var myName;
var myStr;
myName = 'Aleksandr';
myStr = 'My name is '+myName+' and I am well!';*/

/*// Change code below this line

var someAdjective;
var myStr = "Learning to code is ";
someAdjective = 'cool!';
myStr += someAdjective;*/

/*// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;*/


/*//найти первый симол в строке
// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line*/

/*//поиск буквы в строке
// Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line*/

/*
//удаление первого значения массива и добовление на его места нового
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);
// Only change code below this line*/

/*
//создание и вызов функции
function reusableFunction () {
    console.log ('Hi World')
}
reusableFunction()*/


/*
//глобальный обьем и функции
// Declare the myGlobal variable below this line
var myGlobal = 10

function fun1() {
    oopsGlobal =5

}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}*/

/*
//локальные и глобальные переменные по приоритетам
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    var myOutfit = 'sweater'
    return myOutfit



    // Only change code above this line
    return outerWear;
}

myOutfit();*/


/*
setTimeout(upUser, 3000)
function upUser () {
    alert('hi? wake up!')
}*/


/*setTimeout(wakeUp, 3000)

function wakeUp() {
    let name = "Joe";
    let i = 0;
    while (i < 2) {
        i += 1
        document.write("Happy Birthday to you.<br>");
    }
    document.write("Happy Birthday dear " + name + ",<br>");
    document.write("Happy Birthday to you.<br>");
}*/

/*
let word = "bottles";
let count = 99;
while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + word + " of beer on the wall.");
    } else {
        console.log("No more " + word + " of beer on the wall.");
    }
}
*/


/*

function nextInLine(arr, item) {
    arr.push(item)
    let number = arr.shift()
    return number;
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
*/

/*
function welcomeToBooleans() {
    if (5+5 === 10)
        return true;
}
*/

/*
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return 'Yes, that was true'
    } return 'No, that was false'
}*/

/*
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);*/

/*
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);*/

/*
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");*/

/*
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);*/

/*
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);*/

/*
function testGreaterThan(val) {
    if (val>100) {  // Change this line
        return "Over 100";
    }

    if (val>10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);*/

/*
function testGreaterOrEqual(val) {
    if (val >=20) {  // Change this line
        return "20 or Over";
    }

    if (val >=10) {  // Change this line
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);*/

/*
function testLessThan(val) {
    if (val<25) {  // Change this line
        return "Under 25";
    }

    if (val<55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);*/


/*
function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
testLessOrEqual(10);

function testLogicalAnd(val) {
    if (val<=50 && val >=25) {
        return "Yes";
    }
    return "No";
}

testLogicalAnd(10);*/

/*
function testLogicalOr(val) {
    if (val<10 || val>20) {
        return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);*/


function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
testElse(4)