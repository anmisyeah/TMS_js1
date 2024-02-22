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



// дз 1
let variable1 = 'true';
let variable2 = false;
let variable3 = undefined;
let variable4 = null;
let variable1Type = typeof(variable1);
let variable2Type = typeof(variable2);
let variable3Type = typeof(variable3);
let variable4Type = typeof(variable4);
console.log(variable1Type, variable2Type, variable3Type, variable4Type);



// дз 2
let height = 15;
let width = 20;
if (height > width) {
    console.log("Наибольшее число: " + height);
} else {
    console.log("Наибольшее число: " + width);
}



// дз 3
for(let i = 0;i < 20; i++) {
    if(i % 3 == 0) {
        console.log(i);
    }
}



// дз 4
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;
let shouldGoToWork = (key && documents && pen) && (apple || orange);
console.log(shouldGoToWork);



// дз 5
let fizBuzNum = Number(prompt('Введите число'));
if(fizBuzNum % 3 ==0 && fizBuzNum % 5 ==0) {
    console.log('FizBuz');
}else if(fizBuzNum % 3 == 0) {
    console.log('Buz');
}else if(fizBuzNum % 5 == 0) {
    console.log('Fiz');
}else {
    console.log('Число не делиться ни на 3 ни на 5');
}



// дз 6
let age = prompt('Твой возраст?');
if(age >= 16 && age <18) {
    alert('Можешь выкурить сигаретку, только маме не говори')
} else if(age < 18) {
    alert('Пей колу');
} else if(age >= 18) {
    alert('Попей пивка');
}



// дз 7
let north = 'север';
let south = 'юг';
let west = 'запад';
let east = 'восток';
let questi = prompt('Какую сторону света вы бы хотели посетить?');
let questiLowerCase = questi.toLowerCase();
switch(questiLowerCase) {
        case 'север': alert('на север пойдешь много денег найдешь');
    break;
        case 'юг': alert('на юг пойдешь счастье найдешь');
    break;
        case 'запад': alert('на запад пойдешь верного друга найдешь');
    break;
        case 'восток': alert('на восток пойдешь разработчиком станешь');
    break;
    default: console.log('Неверные данные, попробуйте еще раз');
}



// дз продвинутый уровень
// 1
let userName = prompt('Введите свое имя');
let userNameToLowerCase = userName.toLowerCase();
let userNameSplit = userNameToLowerCase.split(' ');
let firstLetters = userNameSplit.map(word => word[0].toUpperCase() + word.slice(1));
let userNameJoin = firstLetters.join(' ');
console.log(userNameJoin);



// 2
let userNum = Number(prompt('Введите число'));
let howMinus = Number(prompt('Сколько отнять?'));
let userNumMinus = userNum - howMinus;
let howPlus = Number(prompt('Сколько добавить?'));
let userNumPlus = userNumMinus + howPlus;
let howMult = Number(prompt('На сколько умножить?'));
let userNumMult = userNumPlus * howMult;
let howDiv = Number(prompt('На сколько разделить?'));
let userNumDiv = userNumMult / howDiv;
alert('((((',userNum,'-',howMinus,') + ',howPlus,') *',howMult,') /',howDiv,'=', userNumDiv);



// 3
let steps = 6;
for (let i = 1; i <= steps; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += '#';
    }
    console.log(row);
}