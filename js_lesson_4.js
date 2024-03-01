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