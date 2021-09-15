// //Variable name conventions
// let $function = '27'

// /*
// let javaScriptIsFun = true;
// console.log(!javaScriptIsFun);

// // console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "String");

// javaScriptIsFun = 'YES!'
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// console.log(typeof null);
// */

// let age = 30;
// age = 31;

// const birthYear = 1999;
// // birthYear = 2000; cannot

// //const job; have to assign value

// var job = 'programmer';
// job = 'teacher';

// // lastName = 'Gryzio';
// // console.log(lastName);

// const isIsland = false;
// let language;
// // console.log(isIsland);
// // console.log(language);

// language = 'Polish';

// const nowYear = 2037
// const ageJonas = nowYear - 1999;
// const ageSarah = nowYear - 2001;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Gryzio';
// console.log(firstName + ' ' + lastName);

// // let x = 10 + 5;
// // x += 10;
// // console.log(x);

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 37);

// const isFullAge = ageSarah >= 18;

// console.log(nowYear - 1991 > nowYear - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// const firstName = 'Jakub';
// const job = 'developer';
// const birthYear = 1999;

// const kuba = "I'm " + firstName + ', a ' +
//     (2021 - birthYear) + ' years old ' + job + '!';
// console.log(kuba);

// const kubaNew = `I'm ${firstName}, a ${2021 - birthYear} years old ${job}!`;
// console.log(kubaNew);

// console.log(`Just a regular string...`);
// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//     console.log(`You can drive!`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`You can not start driving license! Only ${yearsLeft} years left!`);
// }

// const birthYear = 1999;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

/* type conversion
const inputYear = '1999';
console.log(Number(inputYear), inputYear);

console.log(Number('Jonas'));

console.log(String(23), 23);
*/

//type coersion
// console.log("I am " + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' > '18');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// Falsy values: 0, '', undefined, null, NaN
// !Falsy values -> Truthy values
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(NaN));

// const money = 2;
// if (money) {
//     console.log("Don't spend it all!");
// } else {
//     console.log("You should get a job");
// }

// let height;
// if (height != undefined) {
//     console.log('YAY!');
// } else {
//     console.log("Height is undefined");
// }

// const age = '18';
// if (age === 18) console.log('You just became an adult! (strict)');

// if (age == 18) console.log('You just became an adult! (loose)');

// const fav = Number(prompt("What's your favourtie number?"));
// console.log(fav);

// if (fav === 23) {
//     console.log("Cool!");
// } else if (fav == 7) {
//     console.log("7 is also cool")
// } else {
//     console.log(`Number is ${fav}`);
// }

// const day = 'sunday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log("Not valid day!");
// }

// const age = 9;
// age >= 18 ? console.log('I like to drink wine') : console.log("Under the age");
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);