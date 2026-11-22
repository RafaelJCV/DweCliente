console.clear();

const welcome = "%cWelcome to the application!";
const info = "%cThis is a informational message.";
const warning = "%cThis is a warning. Be cautious.";
const error = "%cError! Something went wrong.";

const welcome_cs = "color: blue; font-size: 18px; font-weight: bold";
const info_cs = "color: green; font-size: 16px";
const warning_cs = "color: yellow; font-size: 16px";
const error_cs = "color: red; font-size: 16px";

const info_table = [
    {
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        name: "Jane",
        age: 25,
        city: "San Francisco"
    },
    {
        name: "Bob",
        age: 40,
        city: "Chicago"
    }
];

console.log(welcome, welcome_cs);
console.log(info, info_cs);
console.warn(warning, warning_cs);
console.error(error, error_cs);
console.table(info_table, ["name", "age", "city"])