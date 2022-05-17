//!! Use searchable names (抽一层)
var MINUTES_IN_A_YEAR = 525600
for (var i = 0; i < MINUTES_IN_A_YEAR; i++) {
    runCronJob();
}

//!! Don't add unneeded context （简洁但精确）
var Car = {
    make: 'Honda',
    model: 'Accord',
    color: 'Blue'
};

function paintCar(car) {
    car.color = 'Red';
}
// Use the same vocabulary for the same type of variable
getUser();

//!! Short-circuiting is cleaner than conditionals（简洁）
function createMicrobrewery(name) {
    var breweryName = name || 'Hipster Brew Co.';
}

//3. Use explanatory variables
const cityStateRegex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/;
const match = cityStateRegex.match(cityStateRegex);
const city = match[1];
const state = match[2]
saveCityState(city, state);








// Use ES6 constants when variable values do not change
const FIRST_US_PRESIDENT = "George Washington";

// Use meaningful and pronounceable variable names
var yearMonthDay = moment().format('YYYY/MM/DD');











