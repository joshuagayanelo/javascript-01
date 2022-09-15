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
    // }   star 

// ******************************************
// Lesson 20: Nested Loops and Conditions
// ******************************************

    // var isMember = false;
    // var age = 12;

    // if ( isMember || age >= 65 ) {
    //     console.log('Free');
    // } else {
    //     if ( age < 18 ) {
    //         console.log('$ 6.00')
    //     } else {
    //         console.log( '$ 12.00' )
    //     }
    // }

    // var employees = [
            
    //     {
    //         'name': 'Charles Silva',
    //         'age': 45,
    //         'children': ['Andrew Silva', 'Maria Silva']
            
    //     },

    //     {
    //         'name': 'Elizabeth Green',
    //         'age': 32,
    //         'children': ['Peter Green']
            
    //     },

    //     {
    //         'name': 'George Banks',
    //         'age': 39,
    //         'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
            
    //     }

    // ];

    // document.getElementById("children").innerHTML = "";

    // for ( let a = 0; a < employees.length; a++ ) {
        
    //     //console.log(employees[a])
    //     let childrenList = employees[a].children;
    //     //console.log(childrenList)

    //     for ( let b = 0; b < childrenList.length; b++ ) {
        
    //         let child = childrenList[b];
    //          //console.log(child)
    //         document.getElementById("children").innerHTML += "<li>" + child + "</li>";
        
    //     }
    // }

    /* ------ forEach Codeblock sample ------ */
    // employees.forEach( a => {

    //     let childrenList = a.children;
    //     //console.log(childrenList)

    //     childrenList.forEach( b => {
    //         let child = b;
    //         //console.log(b)

    //         document.getElementById("children").innerHTML += "<li>" + b + "</li>";

    //     } )
    // })
    /* --------------------------------------- */

// ******************************************
// Lesson 21: Variable Scope
// ******************************************

    // let personsName = 'John'

    // function create_name() {
    //     let personsName = 'Mary';
    //     console.log(personsName)
    // }

    // create_name();

    // let personsName = 'John'

    // if(true){
    //     let personsName = 'Mary';
    //     console.log(personsName)
    // }

    // console.log(personsName);

    // var a = 0;

    // if (true) {
    //     let a = 20;
    // }

    // console.log(a);

    // for ( let a = 0; a < 3; a++ ) {
    //     console.log('Parent loop count:', a)

    //     for ( let a = 0; a < 3; a++ ) {
    //         console.log('child loop count:', a)
    //     }

    // }

    // function create_name() {
    //     myName = 'Mary';
    //     console.log(myName);
    // }

    // create_name();
    // console.log(myName);

// ******************************************
// Lesson 26: Browser Object Model
// ******************************************

    // var dateObj = new Date();

    // console.log(dateObj.getDay());
    // console.log(dateObj.getTime());


// Get date
// Problem: If a product is ordered on March 26, 2020 and delivered on April, 02, 2020, how many days does it take to be delivered?
// Solution

    // let orderDate = new Date("Mar 26 2020");
    // let deliveryDate = new Date("Apr 02 2020");

    // let leadTime = Math.floor((deliveryDate - orderDate)/ 86400000);
    //     //Math.floor always rounds down to the nearest integer.
    // console.log(leadTime);

    // document.getElementById("delivery_time").innerHTML = leadTime;

    // // CHALLENGE: Order date  + 10 days delivery date  = get new Delivey Date

    // let orderDateB = new Date ("Mar 26 2020").getTime(); // get the Epoch
    // console.log(orderDateB);

    // let leadTimeB = 10 * 86400000; // Convert 10 days lead time to Epoch
    // console.log(leadTimeB);

    // let result = orderDateB + leadTimeB // both variables contains the Epoch value
    // let deliveryDateB = new Date(result) // convert to Date by passing the "result" as parameter to the new Date()
    // console.log(deliveryDateB);