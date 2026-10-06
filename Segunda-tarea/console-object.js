const WELCOME_MESSAGE = "Welcome to the application!";
const INFO_MESSAGE = "This is an informational message.";
const WARNING_MESSAGE = "This is a warning message.";
const ERROR_MESSAGE = "This is an error message.";

console.log(WELCOME_MESSAGE);
console.info(INFO_MESSAGE);
console.warn(WARNING_MESSAGE);
console.error(ERROR_MESSAGE);

let name1 = "John";
let age1 = 30;
let city1 = "New York";
let name2 = "Jane";
let age2 = 25;
let city2 = "Los Angeles";
let name3 = "Mike";
let age3 = 35;
let city3 = "Chicago";

console.table([
    { name: name1, age: age1, city: city1 },
    { name: name2, age: age2, city: city2 },
    { name: name3, age: age3, city: city3 }
])