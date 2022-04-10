var myPetsArray = [
    {
        animals_type: "Dog",
        name:"Pujdo"
    },
    {
        animals_type: "Cat" ,
        name:"Maca"
    },
    {
        animals_type: "Bird",
        name: "Tweety"
    }
];
function myPetsFunction(pets) {
    return pets;
}
console.log(myPetsFunction(myPetsArray[1]));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;