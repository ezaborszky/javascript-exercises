const sumAll = function() {
    const numbersArray = [];
    let sum = 0;
    let firstNumber;
    let secondNumber;

if ((typeof arguments[0]) !== "number" || (typeof arguments[1]) !== "number" || arguments[0] < 0 || arguments[1] < 0) {
return "ERROR";  
} else {

if (arguments[0]>arguments[1]) {
firstNumber = arguments[1];
secondNumber = arguments[0];
} else {
firstNumber = arguments[0];
secondNumber = arguments[1];
}




for (let i = firstNumber; i <= secondNumber; i++) {
numbersArray.push(i);
}

for (let x in numbersArray) {
sum = sum + numbersArray[x];

}
return sum;
}

};

// Do not edit below this line
module.exports = sumAll;
