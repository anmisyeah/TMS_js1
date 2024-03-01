// Практика 1
let user = {
    name: 'Andrei',
    age: 26,
    phone: 77936472192,
    email: 'aksjgnsk@gmail.com',
    password: 123456,
}
user.password = 654321;
console.log(user.password);
user.city = 'Almaty'
console.log(user);
delete user.phone;
console.log(user);



// Практика 3
for (key in user) {
    console.log(`Ключ: {${key}}, значение: {${user[key]}}`)
}



// Практика 4
let user2 = Object.assign({}, user);
console.log(user2);
user2.name = 'Kris';
console.log(user2);

let user3 = {};
for (key in user) {
    user3[key] = user[key];
}
user3.name = 'Valera';
console.log(user3);



// Практика 5
let developer1 = {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Javascript'
}

let developer2 = {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 23,
    language: 'Python'
}
function getLocation (developer) {
    return `${developer.continent}, ${developer.country}`;
}



// Дз 1
let myObject = {
    key1: 'value1',
    key2: 'value2'
};

console.log('Объект до удаления ключей:', myObject);

delete myObject.key1;
delete myObject.key2;

console.log('Объект после удаления ключей:', myObject);



// Дз 2
let myObj = {
    key1: 'value1',
    key2: 'value2'
}

function checkKey(obj, key) {
    return obj.hasOwnProperty(key);
}



// Дз 3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (key in student) {
    console.log(key, student[key])
}



// Дз 4
const colors = {
    'ru pum pu ru rum': {
    red: 'красный',
    green: 'зеленый',
    blue: 'синий'
    },
}
console.log(colors['ru pum pu ru rum'].red,colors['ru pum pu ru rum'].blue);



// Дз 5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}

let sum = 0;

for (key in salaries) {   
    sum += salaries[key];
}

console.log(sum)



// Дз 6
let login = prompt('Введите логин:');
let pass = prompt('Введите пароль:');
let loginPass = {
    login: login,
    pass: pass,
}
let checkLogin = prompt('Подтвердите логин:');
let checkPass = prompt('Подтвердите пароль:');

if (login === checkLogin && pass ===checkPass) {
    console.log('Добро пожаловать!');
}else {
    console.log('Неверные данные!')
}



// Дз продвинутый уровень
// 1
function convertScore(score) {
    const scores = score.split(':');
    const team1 = parseInt(scores[0]);
    const team2 = parseInt(scores[1]);

    if (homeTeamScore > 9 || awayTeamScore > 9) {
        console.log('Счет не может превышать 9 мячей для каждой команды.');
        return;
    }

    const numbers = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];

    console.log(`Счет ${numbers[homeTeamScore]}:${numbers[awayTeamScore]}`);
}



// 2
let student1 = {
    name: 'Polina',
    age: 27,
}

    let student2 = {
    name: 'Polina',
    age: 27,
}

let isEqual = JSON.stringify(student1) === JSON.stringify(student2);
console.log(isEqual);



// 4
const animals = {
    cat: {
        name: 'Енчик',
        age: 3,
    },
    dog: {
        name: 'Орео',
        age: 2,
    }
};

let birdName = animals.bird?.name;
if (birdName) {
    console.log('Имя птицы:', birdName);
} else {
    console.log('Птицы нет в объекте');
}