//This is a comment
// console.log("Statement 1");
// console.log("Statement 2");

// ******************************************
// Lesson 4: Working with the DOM
// ******************************************
// console.log (document.getElementById("blue_box").innerHTML);
// document.getElementById("blue_box").innerHTML = "<h1>Testing</h1>";
// console.log(document.getElementById("blue_box").innerHTML = "<h1>Testing</h1>");



// ******************************************
// Lesson 5: Variables
// ******************************************
//  var user_name = "Joshua";
//  console.log(user_name);

//  document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";

// students = [ "Johnny" , "Mary", "Paul" ];
//     console.log(students.length); // The console will show 3
//     console.log(students[0]);  // The console will show "John"
//     console.log(students[0].length)


//     var courses = [ "HTML", "Python", "PHP" ];

//     courses.push("Javascript");

//     console.log(courses);  // The console will show [ "HTML", "Python", "PHP", "Javascript" ]

//     courses.unshift("Bootstrap");

//     console.log(courses);  // The console will show [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

//     courses.pop();

//     console.log(courses);  // The console will show [ "Bootstrap", "HTML", "Python", "PHP" ]

//     courses.shift();

//     console.log(courses);  // The console will show [ "HTML", "Python", "PHP" ]
//     var students = [ "Peter" , "Joana", "Andrew", "Julio", "Kate", "Marie" ];
//     console.log( students.slice(0,3) );



// ******************************************
// Lesson 16: Events
// ******************************************

// document.getElementById("click-me").onclick = function() {
//     alert("You clicked the button")
// }

// document.getElementById("hover-me").onmouseover = function() {
//     alert("You moved the cursor over me")
// }

// document.getElementById("leave-me").onmouseout = function() {
//     alert("You moved the cursor out of me")
// }

// // {/* <button id="click-me">Click here</button>
// // <button id="hover-me">Move the cursor over here</button>
// // <button id="leave-me">Move the cursor out of here</button> */}

// document.onkeydown = function(event) {
//     if(event.keyCode == 65) {
//         alert("You've just pressed the 'a' key.");
//     } else {
//         console.log("You've just pressed a different key.")
//     }
// };

// function show_alert() {
//     alert("You clicked the button.")
// }

// document.getElementById("color_button").onmouseover = function() {
//     document.getElementById("color_button").style.backgroundColor = "purple";
//     document.getElementById("color_button").style.transform = "translateY(-10px)";
// };

// document.getElementById("color_button").onmouseout = function() {
//     document.getElementById("color_button").style['background-color'] = "";
//     document.getElementById("color_button").style.transform = "translateX(0px)";
// };

// document.getElementById("color_button").onclick = function() {
//     this.style.backgroundColor = "purple";
//     this.style.transform = "translateX(60px)";
// };

// var button = document.getElementById("color_button");

// button.onmouseover = function() {
//     button.style.backgroundColor = "purple";
//     button.style.transform = "translateX(60px)"; 
// };


// ******************************************
// Lesson 18: More Get Elements
// ******************************************

// var elements = document.getElementsByClassName("example");
// console.log(elements);

// var elements = document.getElementsByTagName("p");
// console.log(elements);

// ******************************************
// Lesson 19: For and For/In Loops
// ******************************************

// for (let a = 0; a < 5; a++) {
//     console.log(a);
// };

// var students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];

// for( let a = 0; a < students.length; a++ ) {
//     console.log(students[a]);
// }

// var car = {
//     'Year': 2018,
//     'Model': 'Evoke',
//     'Manufacturer': 'Land Rover',
//     'FuelType': 'Diesel'

// }

// for (var prop in car) {
//     console.log( prop + ': ' + car[prop] );
// }

// /* ---------USING Object.keys()-------- */
// const obj = {
//     name: 'Jean-Luc Picard',
//     rank: 'Captain'
//   };
  
//   // Prints "name Jean-Luc Picard" followed by "rank Captain"
//   Object.keys(obj).forEach(key => {
//     console.log(key, obj[key]);
//   });

// /* ---------USING Object.values()-------- */
// const obj = {
//     name: 'Jean-Luc Picard',
//     rank: 'Captain'
//   };
  
//   // Prints "Jean-Luc Picard" followed by "Captain"
//   Object.values(obj).forEach(val => {
//     console.log(val);
//   });

// /* ---------USING Object.entries()-------- */
// const obj = {
//     name: 'Jean-Luc Picard',
//     rank: 'Captain'
//   };
  
//   // Prints "name Jean-Luc Picard" followed by "rank Captain"
//   Object.entries(obj).forEach(entry => {
//     const [key, value] = entry;
//     console.log(key, value);
//   });


// var elements = document.getElementsByClassName("example");

// for ( let a = 0; a < elements.length; a++ ) {
//     elements[a].style.color = "orange";
//     elements[a].style.fontWeight = "bold";
// }   