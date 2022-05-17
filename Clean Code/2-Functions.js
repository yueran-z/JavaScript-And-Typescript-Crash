// Functions should only be one level of abstraction
function parseBetterJSAlternative(code) {
    const REGEXES = [
        // ...
    ];
    const statements = code.split(' ');
    const tokens = [];
    REGEXES.forEach((REGEX) => {
        statements.forEach((statement) => {
            // ...
        });
    });
    const ast = [];
    tokens.forEach((token) => {
        // lex...
    });
    ast.forEach((node) => {
        // parse...
    });
}
// !! GOOD******
function tokenize(code) {
    const REGEXES = [
        // ...
    ];

    const statements = code.split(' ');
    const tokens = [];
    REGEXES.forEach((REGEX) => {
        statements.forEach((statement) => {
            tokens.push( /* ... */ );
        });
    });
    return tokens;
}
function lexer(tokens) {
    const ast = [];
    tokens.forEach((token) => {
        ast.push( /* ... */ );
    });
    return ast;
}
function parseBetterJSAlternative(code) {
    const tokens = tokenize(code);
    const ast = lexer(tokens);
    ast.forEach((node) => {
        // parse...
    });
}
// Avoid conditionals and use polymorphism
class Airplane {
    // ...
    getCruisingAltitude() {
        switch (this.type) {
            case '777':
                return this.getMaxAltitude() - this.getPassengerCount();
            case 'Air Force One':
                return this.getMaxAltitude();
            case 'Cessna':
                return this.getMaxAltitude() - this.getFuelExpenditure();
        }
    }
}
class Airplane {
    // ...
}
class Boeing777 extends Airplane {
    // ...
    getCruisingAltitude() {
        return this.getMaxAltitude() - this.getPassengerCount();
    }
}
class AirForceOne extends Airplane {
    // ...
    getCruisingAltitude() {
        return this.getMaxAltitude();
    }
}
class Cessna extends Airplane {
    // ...
    getCruisingAltitude() {
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
}
// Encapsulate conditionals
function shouldShowSpinner(fsm, listNode) {
    return fsm.state === 'fetching' && isEmpty(listNode);
}
if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
    // ...
}

// Remove duplicate code,use object prams
function showList(employee) {
    developers.forEach((employee) => {
        const expectedSalary = employee.calculateExpectedSalary();
        const experience = employee.getExperience();

        let portfolio = employee.getGithubLink();

        if (employee.type === 'manager') {
            portfolio = employee.getMBAProjects();
        }
        const data = {
            expectedSalary,
            experience,
            portfolio
        };
        render(data);
    });
}

//2. Avoid side effects
let name = 'Beau Carnes';
function splitIntoFirstAndLastName() {
    return name.split(' ');
}
const newName = splitIntoFirstAndLastName(name);
console.log(name);
console.log(newName);

// Don't write to global functions
class SuperArray extends Array {
    diff(comparisonArray) {
        const hash = new Set(comparisonArray);
        return this.filter(elem => !hash.has(elem));
    }
}
//  Favor functional programming over imperative programming
const programmerOutput = [{
    name: 'Uncle Bobby',
    linesOfCode: 500
}, {
    name: 'Suzie Q',
    linesOfCode: 1500
}, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
}, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
}];
const INITIAL_VALUE = 0;
const totalOutput = programmerOutput
    .map((programmer) => programmer.linesOfCode)
    .reduce((acc, linesOfCode) => acc + linesOfCode, INITIAL_VALUE);

// Use method chaining
//!!GOOD
class Car {
    constructor() {
        this.make = 'Honda';
        this.model = 'Accord';
        this.color = 'white';
    }

    setMake(make) {
        this.make = make;
        // NOTE: Returning this for chaining
        return this;
    }

    setModel(model) {
        this.model = model;
        // NOTE: Returning this for chaining
        return this;
    }

    setColor(color) {
        this.color = color;
        // NOTE: Returning this for chaining
        return this;
    }

    save() {
        console.log(this.make, this.model, this.color);
        // NOTE: Returning this for chaining
        return this;
    }
}

const car = new Car()
    .setColor('pink')
    .setMake('Ford')
    .setModel('F-150')
    .save();

// BAD
class Car {
    constructor() {
        this.make = 'Honda';
        this.model = 'Accord';
        this.color = 'white';
    }

    setMake(make) {
        this.make = make;
    }

    setModel(model) {
        this.model = model;
    }

    setColor(color) {
        this.color = color;
    }

    save() {
        console.log(this.make, this.model, this.color);
    }
}
const car2 = new Car();
car.setColor('pink');
car.setMake('Ford');
car.setModel('F-150');
car.save();









// Functions should do one thing
function emailClients(clients) {
    clients
        .filter(isClientActive)
        .forEach(email);
}
function isClientActive(client) {
    const clientRecord = database.lookup(client);
    return clientRecord.isActive();
}

// Function arguments (2 or fewer ideally)
const menuConfig = {
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
};
function createMenu(menuConfig) {
    // ...
}

// Don't use flags as function parameters
function createFile(name) {
    fs.create(`./temp/${name}`);
}
function createTempFile(name) {
    fs.create(name);
}
// Function names should say what they do
function addMonthToDate(month, date) {
    // ...
}
const date = new Date();
addToDate(1, date);





