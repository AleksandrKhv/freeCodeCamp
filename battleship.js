//задание переменных

let location1 = 3
let location2 = 4
let location3 = 5
let guess
let hits = 0
let guesses = 0
let isSunk = false

//создание цикла, проверка данных

while (isSunk === false) {
    guess = prompt('Готов, стреляем!(введите число от 0 до 6):')
    if (guess < 0 || guess > 6) {
        alert('введите число от 0 до 6!')
    } else {
        guesses += 1

        if (guess === location1 || guess === location2 || guess === location3) {
            alert('Попали!')
            hits += 1
            if (hits === 3) {
                isSunk = true;
                alert('Вы потопили корабль! поздравляем с победой!')
            }
        } else {
            alert('Промах!')
        }
    }
}

let stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + (3 / guesses)
alert(stats)

//проверка попаданий

/*if (guess === location1) {
    hits +=1
} else if (guess === location2) {
    hits +=1
} else if (guess === location2) {
    hits +=1
}*/ //упрощение кода сравнивания попаданий

/*if (guess === location1||guess === location2||guess === location3) {
    hits +=1
}*/

//проверка на количество попаданий , небыл ли корабль потоплен

/*
if (hits === 3) {
    isSunk = true;
    alert('Вы потопили корабль! поздравляем с победой!')
}*/
