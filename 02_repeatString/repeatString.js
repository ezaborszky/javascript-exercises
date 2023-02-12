const repeatString = function(text,iteration) {
   const textOut = [];
   if (iteration < 0) {
    return ("ERROR")
   } else {
    for (let i = 0; i < iteration; i++) {
    textOut[textOut.length] = text;
   }}
   return textOut.join("");
};

repeatString("hey", 3)
repeatString("hey", 10)
repeatString("hey", 1)
repeatString("hey", 0)
repeatString("hey", -1)
repeatString("hey",)
repeatString("",10)
// Do not edit below this line
module.exports = repeatString;
