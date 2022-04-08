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
    return myPetsArray[1].name;
}
console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;