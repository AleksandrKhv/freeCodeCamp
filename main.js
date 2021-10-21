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
setTimeout(wakeUp, 3000)

function wakeUp() {
    let name = "Joe";
    let i = 0;
    while (i < 2) {
        i += 1
        document.write("Happy Birthday to you.<br>");
    }
    document.write("Happy Birthday dear " + name + ",<br>");
    document.write("Happy Birthday to you.<br>");
}

var word = "bottles";
var count = 99;
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