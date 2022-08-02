const numbers = [1,3,4, 6, 3, 5, 6,6,5,7,89,2,5,3,2,1,5,6,9,10,4,10];

const duplictes = numbers.filter(function(value, index,array){
    return array.indexOf(value) === index;
});
console.log(duplictes);