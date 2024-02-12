// Задание 1

let name = 'Andrei';
let student = name;
console.log(name, student);



// Задание 2
let text = 'Hello';
let counter = 100500;
let isOpen = true;
let someValue = null;

let typeText = typeof(text);
let typeCounter = typeof(counter);
let typeIsOpen = typeof(isOpen);
let typeSomeValue = typeof(someValue);

console.log(typeText, typeCounter, typeIsOpen, typeSomeValue);



// Задание 3
String(5);  // '5'
String(-2); // '-2'
Boolean('Some string');  //true
Boolean('');   // false
Boolean(' ');  // true
String(0);     // '0'
String(NaN);   // 'NaN'
Number(false); // 0
Number('Hi');  // NaN
Boolean(-25);  // true
+' ';         // 0
Number(' \n \t '); // 0
String(undefined); // 'undefined'
+null;  // 0
Boolean(undefined);  // false
Number(undefined);   // NaN



// Задание 4
let a = prompt('Введите имя', );
let b = prompt('Введте фамлю', );
let result = alert(a +' ' + b);



// Задание 5
let pavelSalary = 1500;
let olgaSalary = 1200;
let markSalary = 2100;
let totalSalary = pavelSalary + olgaSalary + markSalary;

alert('Суммарная зарплата =' + ' ' + totalSalary);



// HOMEWORK
// task 1
let x = 20;
let y = 58;
let z = 42;
let resultHw = x + y + z;

console.log(resultHw);



// task 2 
let secondInMinute = 60;
let minuteInHour = 60;
let hourInDay = 24;
let dayInYear = 365;
let myAgeInSeconds = 26 * dayInYear * hourInDay * minuteInHour * secondInMinute + 6 * hourInDay * minuteInHour * secondInMinute;
console.log(myAgeInSeconds);



// task 3
let count = 42;
let userName = '42';

console.log(String(count), Number(userName));
console.log(count.toString(), +userName);



// task 4
let e = 1;
let r = 2;
let t = 'белых медведей';

console.log(e.toString() + r.toString() + ' ' + t);



// task 5
let strFirst = 'доступ';
let strSecond = 'морпех';
let strThird = 'наледь';
let strFours = 'попрек';
let strFives = 'рубило';
let lengthWords = strFirst.length + strSecond.length + strThird.length + strFours.length + strFives.length;

console.log(lengthWords);