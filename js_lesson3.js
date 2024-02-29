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



// Дз 1
function getSum (param) {
    let sum = 0;
    for(let i = 0; i <=param; i++) {
        sum += i;
    }
    return sum
}



// Дз 2
function calculateOverpayment (sum) {
    const annualInterestRate = 0.17;
    const numOfYears = 5;
    let overPayment = sum * annualInterestRate * numOfYears;
    return overPayment;
}



// Дз 3
function trimString (str, from, to) {
    return str.slice(from, to + 1)
}



// Дз 4
function getSumNumbers(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}



// Дз 5
function getSumma(a,b) {
    let sum = 0;
    for (a;a <=b; a++) {
        sum +=a
    }
    return sum
}



//Дз 6 
function fooboo(boolValue, foo, boo) {
    if(boolValue) {
        foo()
    } else {
        boo()
    }
}

function foo() {
    console.log('foo')
}

function boo() {
    console.log('boo')
}



// hw next level
// 1
function threeNum(a, b, c) {
    if(a + b > c || a + c > b || b + c > a) {
        return true
    }else {
        return false
    }
}



// 2 
function choko(n, m) {
    if (n <= 0 || m <= 0) {
        return 0;
    }else {
        return (n * m) -1;
    }
}



// 3
const TAX_RATE = 0.08;
const PHONE_PRICE = 500;
const ACCESSORY_PRICE = 50;
let bankBalance = 1000;

function calculateTax(amount) {
    return amount * TAX_RATE;
}

function formatPrice(amount) {
    return "$" + amount.toFixed(2);
}

function canAfford(amount) {
    return bankBalance >= amount;
}

let totalAmount = 0;
while (canAfford(totalAmount + PHONE_PRICE)) {
    totalAmount += PHONE_PRICE;
    if (canAfford(totalAmount + ACCESSORY_PRICE)) {
        totalAmount += ACCESSORY_PRICE;
    }
}

totalAmount += calculateTax(totalAmount);

console.log("Total amount: " + formatPrice(totalAmount));

if (canAfford(totalAmount)) {
    console.log("You can afford it!");
} else {
    console.log("You cannot afford it.");
}