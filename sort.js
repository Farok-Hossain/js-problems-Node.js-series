const fruits = ["orrange", "banana", "apple", "mango", "watermelon"];
console.log(fruits.sort());

const numbers = [4, 3, 6, 2, 7, 1, 9, 20, 40, 8, 32, 23];
console.log(numbers.sort(function(a,b){
    return a-b;
}));
