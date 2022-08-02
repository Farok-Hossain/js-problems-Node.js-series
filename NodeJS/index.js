const _ = require("lodash");
const people = require("./array");

console.log(people.names);
console.log(people.numbers);
people.test();

console.log(_.last(people.names));
console.log(_.last(people.numbers));
console.log(_.first(people.names));
console.log(_.first(people.numbers));
