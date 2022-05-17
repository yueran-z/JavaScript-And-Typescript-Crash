//1. Use searchable names
var MINUTES_IN_A_YEAR = 525600
for (var i = 0; i < MINUTES_IN_A_YEAR; i++) {
    runCronJob();
}

//2. Don't add unneeded context
var Car = {
    make: 'Honda',
    model: 'Accord',
    color: 'Blue'
};

function paintCar(car) {
    car.color = 'Red';
}

//3. Short-circuiting is cleaner than conditionals
function createMicrobrewery(name) {
    var breweryName = name || 'Hipster Brew Co.';
}

// Use meaningful and pronounceable variable names
var yearMonthDay = moment().format('YYYY/MM/DD');

// Use ES6 constants when variable values do not change
const FIRST_US_PRESIDENT = "George Washington";

// Use the same vocabulary for the same type of variable
getUser();







