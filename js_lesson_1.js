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