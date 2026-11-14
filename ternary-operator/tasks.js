/*
if ("0") {
    console.log("Hello");
}

let value = prompt('Type a number', 0)
if (value > 0) {
  alert( 1 );
} else if ( value < 0 ) {
   alert( -1 );
} else {
  alert ( 0 );
}



let values = prompt('What is the "official" name of JavaScript?', '');

    if (values == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }

    
let a = 1;
let b = 2;

let result = (a + b < 3 ) ? 'Below' : 'Over';
console.log(result);
*/
let login = "Director";
let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' : '';
console.log(message);