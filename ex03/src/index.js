function rangeOfNumbers(startN, endN) { 
        if (startN <= endN) {
            var ans = [];
            for (let i = startN; i <= endN; i++) {
                ans.push(i);
            }
            return ans;
        } else {
        return "The starting number will always be less than or equal to the ending number";
        }
    }
console.log(rangeOfNumbers(1, 7)); 
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;