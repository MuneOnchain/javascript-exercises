// including expressions in strings

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);

//  "I like the song Fight the Youth. I gave it a score of 90%."

// Including quotes in strings

const bigmouth = 'She said "I larp alot!"'
console.log(bigmouth);

// She said "I larp alot!"

const bigmouth2 = `I've got no right to take my place...`;
console.log(bigmouth2);

//Multiline strings

const newLine = `One day you finally 
knew what you had to do, and began,`;

console.log(newLine);

/* One day you finally 
knew what you had to do, and began,*/

console.log(1 + 2 + "3" + 4 + 5);

