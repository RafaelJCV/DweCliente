console.clear();

let welcome = "%cWelcome to the application!";
let info = "%cThis is a informational message.";
let warning = "%cThis is a warning. Be cautious.";
let error = "%cError! Something went wrong.";

let welcome_cs = "color: blue; font-size: 18px; font-weight: bold";
let info_cs = "color: green; font-size: 16px";
let warning_cs = "color: yellow; font-size: 16px";
let error_cs = "color: red; font-size: 16px";

let info_table = [
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