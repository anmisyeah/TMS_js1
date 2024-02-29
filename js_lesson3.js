// Практика
// Задание 1
function helloUser() {
    let userName = prompt('Введите ваше имя');
    console.log(`Привет, ${userName}`);
}



// Задание 2
let x = 2;
let y = 3;
let z = 4;
function sumXYZ () {
    let sum = x + y + z;
    console.log(sum)
}

function sum (x, y, z) {
    return x + y + z;
}

function sumNum () {
    let x = 1;
    let y = 3;
    let z = 5;
    return x + y + z;
}



// // Задание 3
function isEven (num) {
    if(typeof num !== 'number') {
        console.log('Error')
        return
    }
    return num % 2 === 0;
}



// Задача 4
function strForFunction (str) {
    return `Строка ${str} состоит из ${str.length} символов`
};

let strForFunc = function (str) {
    return `Строка ${str} состоит из ${str.length} символов`
}



// Задача 5
function pow(number, n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 1 / pow(number, -n);
    } else {
        let result = 1;
        for (let i = 0; i < n; i++) {
            result *= number;
        }
        return result;
    }
}



//Задача 6
function strWithoutSpace (str) {
    let newStr = '';
    for (let symbol of str) {
        if (symbol !== ' ') {
            newStr += symbol
        }
    }
    return newStr
}