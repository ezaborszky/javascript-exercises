const reverseString = function(text) {
    let outputText = [];

for (let i = 0; i < (text.length); i++) {
  x = text.length-i-1;
  outputText[outputText.length] = text[x];
}

return (outputText.join(""));

};

reverseString("hello");
reverseString("hello there");
reverseString('123! abc!');
reverseString('');   
// Do not edit below this line
module.exports = reverseString;
