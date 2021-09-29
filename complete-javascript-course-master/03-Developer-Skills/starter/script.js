// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
    const outputString = [];

    for (let i = 1; i <= arr.length; i++) {
        outputString.push(`... ${arr[i - 1]} \u235BC in ${i} days`);
    }
    return outputString.join(' ')
}

const forecast = printForecast([12, 5, -5, 0, 4]);
console.log(forecast);