let day = "thursday";
switch (day) {
    case "thursday":
    console.log(day);
    break;

    case "monday":
    console.log(day);
    break;

    default:
        console.log("no match")


}


let a = 2 + 2;

switch(a) {
    case 3:
        alert( 'Too Small' )
        break;
    case 4:
        alert( 'Exactly' ); // Exactly will be the output
        break;
    case 5:
        alert( 'Too Big' );
        break;
    default:
        alert( "I don't know such values")   

} 



switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

// Rewriting the "switch" into an "if"

let browser;

if (browser == "Edge") {
    alert( "You've got the Edge!" );
} else if 
    (browser == "Chrome" 
        || browser == "Firefox" 
        || browser == "Safari" 
        || browser == "Opera"){
        alert( 'Okay we support these browsers too');
    }
 else {
    alert( 'We hope that this page looks ok!' );

 }

