//exo1
// let day = prompt("What day is it today ?")

// switch (day) {
//     case "monday" :
//         alert("Have a good monday");
//         break;
//     case "tuesday" :
//         alert("Have a good tuesday");
//         break;
//     case "wednesday" :
//         alert("Have a good wednesday");
//         break;
//     case "thursday" :
//         alert("Have a good thursday");
//         break;
//     case "friday" :
//         alert("Have a good friday");
//         break;
//     case "saturday" :
//         alert("Have a good saturday");
//         break;
//     case "sunday" :
//         alert("Have a good sunday");
//         break;
//     default :
//         alert("Are you sure it s a day of the week ?")
//         break;
// }

//exo2

// let weather = prompt("What s the weather like today ?")

// switch (weather){
//     case "rain" :
//         alert("Take an umbrella");
//         break;
//     case "sunny" :
//         alert("Don t forget your sunglasses");
//         break;
//     case "cloudy" :
//         alert("Going to be chill so wear a coat");
//         break;
//     case "snowy" :
//         alert("Christmas time !!!!!!!!!");
//         break;
//     default :
//         alert("Hey thats not a type of weather !")
// }

//exo3

// let numero = prompt("Gimme a number !");
// let divide = numero % 2 ;

// switch (divide) {
//     case 0 :
//         alert("Le nombre est un multiple de 2.");
//         break;
//     case 1 :
//         alert("Le nombre n est pas un multiple de 2");
//         break ;
//     default :
//         alert("Ceci n est pas un nombre")
//         break;

// }

//exo4

let result;
const number1 = parseFloat(prompt('Enter first number: '));
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        alert(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        alert(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        alert(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        alert(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}