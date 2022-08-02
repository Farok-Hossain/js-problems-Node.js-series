class Person {
    constructor(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }

    play(status) {
        console.log(`${this.name} is playing football ${status}`);
    }
}

const person1 = new Person('Farok', 'tangail', 26);
const person2 = new Person('Atiq', 'tangail', 25);
console.log('Name: ' + person1.name, 'address: ' + person1.address, 'age: ' + person1.age);
console.log('Name: ' + person2.name, 'address: ' + person2.address, 'age: ' + person2.age);

const person3 = new Person('Ronaldo');
person3.play("well");
person1.play("very bad");
