//1
console.log("This is ex1.js")

//2
var firstName = "Josh";
var lastName = "Gayanelo";
var yearOfBirth = 1991;
var currentYear = 2022;
var age = currentYear - yearOfBirth;

message = "Hi, my name is " + firstName + " " + lastName + "." + " I'm " + age.toString() + " years old and Im learning JavaScript.";
document.getElementById("student_message").innerHTML = message;


//3
var num1 = document.getElementById("num_1").innerHTML
var num2 = document.getElementById("num_2").innerHTML

var result = (parseInt(num1) + parseInt(num2)) / 2;
//console.log(result);

document.getElementById("result").innerHTML = result.toFixed(2);

//4
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

function validate(phoneNumber){

    if(phoneNumber.length == 9) {
        console.log("Valid")
    } else {
        console.log("Invalid")
    }
    
}
validate(phone1.toString());
validate(phone2.toString());
validate(phone3.toString());

//5
let operate = Math.pow(32,6);
console.log(operate);

//6
console.log("Allowed. But should adhere to naming standards");
console.log("Allowed, variable names can start with a $(dollar) sign ");
console.log("Not allowed. Typeof is a JavaScript reserved word");
console.log("Not allowed. Dash is prohibited");
console.log("Allowed. Adheres to standard naming convention");
console.log("Not allowed. Should not start with an integer or number.");
console.log("Not allowed. Empty space is not allowed.");

//7
var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); 
console.log( (7+5) / number + 2 ); 
console.log(pressure); 
console.log(temperature); 
console.log(typeof pressure); 
console.log(typeof temperature);

// 2525
// 4
// undefined
// ull
// undefined
// object

//8
var url_1 = document.getElementById("url_1").innerHTML;
//var url_2 = document.getElementById("url_2").innerHTML;
var url_3 = document.getElementById("url_3").innerHTML;
//var url_4 = document.getElementById("url_4").innerHTML;

document.getElementById("url_2").innerHTML = `https://${url_1}`
document.getElementById("url_4").innerHTML = url_3.replace("https://", "")