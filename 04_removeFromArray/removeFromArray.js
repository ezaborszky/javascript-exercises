const removeFromArray = function() {
    
    numbersArray = arguments[0]
    for (const x in arguments) {
        if ((numbersArray.indexOf(arguments[x])>-1)){
            //console.log(`The number ${arguments[x]} was found at index ${numbersArray.indexOf(arguments[x])}`);
            numbersArray.splice(numbersArray.indexOf(arguments[x]),1);
            

        }
        
    }
       
return numbersArray  
};

// Do not edit below this line
module.exports = removeFromArray;
