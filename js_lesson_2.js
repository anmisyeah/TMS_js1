// Практика урок 2
// Задача 1
let x = 1;
let y = 3;
let z = 5;
let sum = x + y + z;

console.log(sum);



// Задача 2
let someString = prompt('') ?? 'Default string';

console.log(someString);



// Задача 3
// '' + 1 + 0 = '10';
// '' - 1 + 0 = -1;
// true + false = 1;
// 6 / '3' = 2;
// '2' * '3' = 6;
// 4 + 5 + 'px' = 9px;
// '$' + 4 + 5 = '$45';
// '4' - 2 = 2;
// '4px' - 2 = NaN;
// ' -9 ' + 5 = ' -9 5';
// ' -9 ' - 5 = -14;
// null + 1 = 1;
// undefined + 1 = NaN;
// ' \t \n' - 2 = -2;



// Задача 4
let userInput = prompt("Введите любое число:");

if (isNaN(userInput)) {
  alert("Ошибка ввода. Введите число.");
} else {
  let number = Number(userInput);
  if (Number.isInteger(number)) {
    if (number % 2 === 0) {
      console.log(`Число ${number} четное`);
    } else {
      console.log(`Число ${number} нечетное`);
    }
  } else {
    alert("Ошибка ввода. Введите целое число.");
  }
}



// Задача 5
let a = 15;
let b = -8;
let c = 23;

let maxNumber = Math.max(a, b, c);
console.log(`Наибольшее число: ${maxNumber}`);



// Задача 6
let i = 0;
while (i < 10) {
    console.log(i**2);
    i++
}



// Задача 7
let total = 0;
for(let i = 0; i <= 20; i++ ) {
    if(i % 5 ===0) {
        continue;
    }
    total += i;
    if(total > 15) {
        break;
    }
}
console.log(total);



// Задача 8
let number;

do {
    number = prompt("Введите число, большее 100:", '');
} while (number <= 100 && number !== null);

if (number !== null) {
    alert("число больше 100!");
} else {
    alert("Отменено");
} 