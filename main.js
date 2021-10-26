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


/*
function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    return result;
}
testElse(4)*/

/*function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    }else {
        return "Between 5 and 10";
    }
}
testElseIf(7);*/

/*
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}
orderMyLogic(7);*/

/*
function testSize(num) {
    if (num < 5) {
        return 'Tiny'
    } else if (num < 10) {
        return 'Small'
    } else if (num < 15) {
        return 'Medium'
    } else if (num < 20) {
        return 'Large'
    } else if (num >= 20) {
        return 'Huge'
    }
    return 'Change Me';
}

testSize(7);*/

/*
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return 'Hole-in-one!'
    } else if (strokes <=par-2){
        return 'Eagle'
    } else if (strokes ==par-1){
        return 'Birdie'
    }else if (strokes ==par){
        return 'Par'
    }else if (strokes ==par+1){
        return 'Bogey'
    }else if (strokes ==par+2){
        return 'Double Bogey'
    }else if(strokes >=par+3) {
        return 'Go Home!'
    }
    return "Change Me";
}
golfScore(5, 4);*/

/*
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
    }
    return answer;
}

caseInSwitch(1);*/

/*
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case 'a':
            answer = 'apple';
            break;
        case 'b':
            answer = 'bird';
            break;
        case 'c':
            answer = 'cat';
            break;
        default:
            answer = 'stuff';
            break;}
    return answer;
}
switchOfStuff(1);*/

/*
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
sequentialSizes(1);

function chainToSwitch(val) {
    var answer = "";
    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}
chainToSwitch(7);*/

/*function isLess(a, b) {
    return a < b;
}
isLess(10, 15);*/

/*
function abTest(a, b) {
    if (a < 0 || b<0) {
        return undefined
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);*/


/*
var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
    return "Change Me";
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');*/

/*
let myDog = {
    name: "Gav",
    legs: 4,
    tails : 2,
    friends : [2,2,2,]
}*/

/*
// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line*/

/*
// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line*/

/*
// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line

var playerNumber = 16 ;       // Change this line
var player = testObj[playerNumber];   // Change this line*/

/*
// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myDog["name"]='Happy Coder'*/


/*
// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails*/


/*
// Setup
function phoneticLookup(val) {
    var result = ""
    // Only change code below this line
    let lookup = {
        "alpha": "Adams",
        "bravo":  "Boston",
        "charlie":  "Chicago",
        "delta":  "Denver",
        "echo": "Easy",
        "foxtrot": "Frank",
    }
    result = lookup[val]
    // Only change code above this line
    return result;
}
phoneticLookup("charlie");*/


/*
function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
    return "Change Me!";
    // Only change code above this line
}*/

// ============================

/*
Управление сложными объектами
Иногда вам может понадобиться хранить данные в гибкой структуре данных . Объект JavaScript - это один из способов обработки гибких данных. Они допускают произвольные комбинации строк , чисел , логических значений , массивов , функций и объектов .

    Вот пример сложной структуры данных:

    var ourMusic = [
        {
            "artist": "Daft Punk",
            "title": "Homework",
            "release_year": 1997,
            "formats": [
                "CD",
                "Cassette",
                "LP"
            ],
            "gold": true
        }
    ];
Это массив, внутри которого находится один объект. Объект содержит различные метаданные об альбоме. Он также имеет вложенный formatsмассив. Если вы хотите добавить больше записей альбома, вы можете сделать это, добавив записи в массив верхнего уровня. Объекты содержат данные в свойстве, имеющем формат "ключ-значение". В приведенном выше примере "artist": "Daft Punk"это свойство, имеющее ключ artistи значение Daft Punk. Нотация объектов JavaScript или JSONсвязанный формат обмена данными, используемый для хранения данных.

{
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
    "CD",
    "Cassette",
    "LP"
],
    "gold": true
}
Примечание. Вам нужно будет поставить запятую после каждого объекта в массиве, если это не последний объект в массиве.

    Добавьте в myMusicмассив новый альбом . Сложите artistи titleстроки, release_yearчисло и formatsмассив строк.*/

/*
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Alisa",
        "title": "Hi",
        "release_year": 2001,
        "formats": [
            "vinil",
            "99"
        ]
    }
];*/

// ====================================

/*
Доступ к вложенным объектам
Доступ к подсвойствам объектов можно получить, объединив в цепочку обозначение точки или скобки.

    Вот вложенный объект:

    var ourStorage = {
        "desk": {
            "drawer": "stapler"
        },
        "cabinet": {
            "top drawer": {
                "folder1": "a file",
                "folder2": "secrets"
            },
            "bottom drawer": "soda"
        }
    };
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
ourStorage.cabinet["top drawer"].folder2будет строкой secrets, и ourStorage.desk.drawerбудет строкой stapler.

    Получите доступ к myStorageобъекту и присвойте переменной содержимое
glove boxсвойства gloveBoxContents. По возможности используйте точечную
нотацию для всех свойств, в противном случае используйте скобку.*/


/*
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];*/

// ======================================

/*
Доступ к вложенным массивам
Как мы видели в предыдущих примерах, объекты могут содержать как вложенные объекты, так и вложенные массивы. Подобно доступу к вложенным объектам, скобки массива могут быть связаны для доступа к вложенным массивам.

    Вот пример того, как получить доступ к вложенному массиву:

    var ourPets = [
        {
            animalType: "cat",
            names: [
                "Meowzer",
                "Fluffy",
                "Kit-Cat"
            ]
        },
        {
            animalType: "dog",
            names: [
                "Spot",
                "Bowser",
                "Frankie"
            ]
        }
    ];
ourPets[0].names[1];
ourPets[1].names[0];
ourPets[0].names[1]будет строкой Fluffy, и ourPets[1].names[0]будет строкой Spot.

    Используя точечную и квадратную нотацию, установите переменную secondTreeна второй элемент в treesсписке из myPlantsобъекта.*/

/*
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];*/

// ===================================

/*
Коллекция записей
Вам дается буквальный объект, представляющий часть вашей коллекции музыкальных альбомов. Каждый альбом имеет уникальный идентификационный номер в качестве ключа и несколько других свойств. Не все альбомы содержат полную информацию.

    Вы начинаете с updateRecordsфункции, которая принимает объектный литерал, recordsсодержащий коллекцию музыкальных альбомов, an id, a prop(like artistor tracks) и a value. Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный в функцию.

    Ваша функция всегда должна возвращать весь объект коллекции записей.
    Если propнет , tracksи valueне пустая строка, обновление или набор этого альбома propв value.
    Если propесть, tracksно у альбома нет tracksсвойства, создайте пустой массив и добавьте valueк нему.
    Если propесть tracksи valueне является пустой строкой, добавьте valueв конец существующего tracksмассива альбома .
    Если valueэто пустая строка, удалите данное propсвойство из альбома.
    Примечание:recordCollection для тестов используется копия объекта.*/

/*

// Setup
var recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && 'value' !== ''){
        records[id][prop]=value
    }
    if (prop === 'tracks'){
        if(!records[id].hasOwnProperty('tracks')){
            records[id][prop] = []
        }
    }
    if (prop === 'tracks' && 'value' !== ''){
        records[id][prop].push(value)
    }
    if (value === ''){
        delete records[id][prop]
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');*/
// ==============================

/*
Итерировать с помощью JavaScript в циклах while
    Вы можете запускать один и тот же код несколько раз, используя цикл.

    Первый тип цикла, который мы изучим, называется whileциклом, потому что он выполняется, пока заданное условие истинно, и останавливается, когда это условие перестает быть истинным.

    var ourArray = [];
var i = 0;
while(i < 5) {
    ourArray.push(i);
    i++;
}
В приведенном выше примере кода whileцикл будет выполняться 5 раз и добавлять числа от 0 до 4 к ourArray.

    Давайте попробуем заставить работать цикл while, помещая значения в массив.

    Сложите числа от 5 до 0 (включительно) в порядке убывания, чтобы myArrayиспользовать whileцикл.*/

/*
// Setup
let myArray = [];
let i = 5;
while(i >= 0) {
    myArray.push(i);
    i--;
}*/
