// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// let markHigherBMI = bmiMark > bmiJohn;

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
// } else {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`)
// }

const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (97 + 112 + 101) / 3;

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log(`Dolphins (${avgDolphins}) wins!`);
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log(`Koalas (${avgKoalas}) wins!`);
} else if (avgDolphins == avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log(`Dolphins (${avgDolphins}) and Koalas (${avgKoalas}) have the same score!`);
} else {
    console.log("Noone wins with the score restrictions!")
}