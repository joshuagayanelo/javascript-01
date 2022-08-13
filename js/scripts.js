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
// Lesson 19: While and do/while Loops
// ******************************************

// var count = 0;

// while(count < 5) {
//     console.log(count);
//     count++;
// }

// var count = 10;

// do {
//     console.log(count);
//     count++;
// } while(count < 5);

// var name = "Hola";

// if (total) {
//     console.log("I sold something");
// } else {
//     console.log("I sold nothing.")
// }

// console.log(name ? "The name is " + name : "The name is not informed.");

var employees = [
        
    {
        'name': 'Charles Silva',
        'age': 45,
        'children': ['Andrew Silva', 'Maria Silva']
        
    },

    {
        'name': 'Elizabeth Green',
        'age': 32,
        'children': ['Peter Green']
        
    },

    {
        'name': 'George Banks',
        'age': 39,
        'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
        
    }

];

for (var a = 0; a < employees.length; a++) {
    var childrenList = employees[a].children;

    for (var b = 0; b < childrenList.length; b++){
        var child = childrenList[b];
        console.log(child);
    }
}