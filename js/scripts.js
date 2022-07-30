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

students = [ "Johnny" , "Mary", "Paul" ];
    console.log(students.length); // The console will show 3
    console.log(students[0]);  // The console will show "John"
    console.log(students[0].length)


    var courses = [ "HTML", "Python", "PHP" ];

    courses.push("Javascript");

    console.log(courses);  // The console will show [ "HTML", "Python", "PHP", "Javascript" ]

    courses.unshift("Bootstrap");

    console.log(courses);  // The console will show [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

    courses.pop();

    console.log(courses);  // The console will show [ "Bootstrap", "HTML", "Python", "PHP" ]

    courses.shift();

    console.log(courses);  // The console will show [ "HTML", "Python", "PHP" ]

    var students = [ "Peter" , "Joana", "Andrew", "Julio", "Kate", "Marie" ];
    console.log( students.slice(0,3) );