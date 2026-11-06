let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let length = text.length; // JavaScript String length
console.log(text.length);


let text2 = "Apple, Banana, kiwi";
let part = text2.slice(7, 13); // JavaScript String slice()
console.log(part);


let text1 ="Hello World";
let texts = text1.toUpperCase(); // JavaScript String toUpperCase() example
console.log(texts);


let highCase = "HELLO WORLD!";
let lowCase = highCase.toLowerCase(); // JavaScript String toLowerCase()
console.log(lowCase);

let trim = "       Hello World!      ";
let trim2 = trim.trim(); // JavaScript String trim()
console.log(trim);
console.log(trim2);
console.log("[" + trim2 + "]");

let trimEnd ="     Hello World     ";
let trimEnd2 = trimEnd.trimEnd(); // JavaScript String trimEnd()
console.log("[" + trimEnd2 + "]");


let leftPadding = "     Hello World!    ";
let leftPadding2 = leftPadding.trimStart(); // JavaScript String trimStart()
console.log("[" + leftPadding2 + "]")


let character = "Hello World!"
let character2 = character.charAt(20);
console.log(character2);

let char = "Hello World";
let char2 = char[20];
console.log(char2);

let school = "W3Schools";
let letter = school.at(2);
console.log(letter);

let school2 = "hello world!";
let letter2 = school2.at(-1);
console.log(letter2);
