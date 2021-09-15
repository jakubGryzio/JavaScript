'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive');

// function logger() {
//     console.log('My name is Kuba');
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5, 0));

// //Function declaration
// function calcAge(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge(1999);
// console.log(age1);

// //Function declaration
// const calcAge1 = function (birthYear) {
//     return 2037 - birthYear;
// }

// console.log(calcAge1(1999));

// const calcAge1 = function (birthYear) {
//     return 2037 - birthYear;
// }

// //Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(1999));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2021 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1999, 'Kuba'));
// console.log(yearsUntilRetirement(1989, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     console.log(applePieces, orangePieces);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }


// console.log(fruitProcessor(2, 3))

// const calcAverage = (firstScore, secondScore, thirdScore) =>
//     (firstScore + secondScore + thirdScore) / 3;

// const dolphinAvg = calcAverage(85, 54, 41);
// const koalasAvg = calcAverage(23, 34, 27);

// console.log(`Dolphin: ${dolphinAvg}, Koalas: ${koalasAvg}`);

// const checkWinner = function (avgDolphin, avgKoalas) {
//     if (dolphinAvg > koalasAvg) {
//         return `Dolphins win (${dolphinAvg} vs ${koalasAvg})`;
//     } else {
//         return `Koalas win (${koalasAvg} vs ${dolphinAvg})`;
//     }
// }

// const winner = checkWinner(dolphinAvg, koalasAvg);
// console.log(winner);

// const friend1 = 'Michal';
// const friend2 = 'Stefan';
// const friend3 = 'Peter';

//const friends = ['Michal', 'Peter', 'Steven'];

// const y = new Array(1991, 1999, 2001);

// console.log(friends[0]);
// console.log(friends.length);

// const calcAge1 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1991, 1923, 2000, 2005];

// console.log(calcAge1(years));

// const friends = ['Michal', 'Peter', 'Steven'];
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// const popped = friends.pop(); //Last

// console.log(popped, friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Bob'));
// console.log(friends.includes('Bob'));

// const calcTip = function (bill) {
//     if (bill >= 50 & bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(total);

// const jakub = {
//     firstName: "Jakub",
//     lastName: "Gryzio",
//     age: 2021 - 1999,
//     job: "student",
//     friends: ["Weronika", "Tomasz", "Bartlomiej"]
// };

// console.log(jakub);
// console.log(jakub.lastName);
// console.log(jakub['lastName']);

// const nameKey = 'Name';
// console.log(jakub['first' + nameKey]);
// console.log(jakub['last' + nameKey]);

// const interestedIn = prompt("What do you want to know about Jakub? Choose between firstName, lastName, job, and friends")

// if (jakub[interestedIn]) {
//     console.log(jakub[interestedIn]);
// } else {
//     console.log('Wrong request!')
// }

// jakub.location = 'Poland';
// console.log(jakub.location);
// console.log(`${jakub.firstName} has ${jakub.friends.length} ${jakub.friends.length > 1 ? 'friends' : 'friend'}, and his best friend is called ${jakub.friends[0]}`);

// const jakub = {
//     firstName: "Jakub",
//     lastName: "Gryzio",
//     birthYear: 1999,
//     job: "student",
//     friends: ["Weronika", "Tomasz", "Bartlomiej"],
//     hasDriverLicense: true,

//     // calcAge: function () {
//     //     return 2021 - this.birthYear;
//     // }
//     calcAge: function () {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },

//     describer: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
//     }
// };

// console.log(jakub.calcAge(), jakub.age);
// console.log(jakub.describer());

// const mark = {
//     firstName: "Mark",
//     lastName: "Miller",
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     firstName: "John",
//     lastName: "Smith",
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const higherBMI = function () {
//     john.calcBMI();
//     mark.calcBMI();

//     if (john.bmi > mark.bmi) {
//         return `${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s (${mark.bmi})'`;
//     } else {
//         return `${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s (${john.bmi})'`;
//     }
// }

// console.log(higherBMI());

//FOR LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🧨`);
// }

// const jakub = {
//     firstName: "Jakub",
//     lastName: "Gryzio",
//     age: 2021 - 1999,
//     job: "student",
//     friends: ["Weronika", "Tomasz", "Bartlomiej"]
// };

// for (let i = 0; i < 5; i++) {
//     console.log(jakub[i]);
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`Your rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}