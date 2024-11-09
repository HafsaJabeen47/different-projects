// let boxes = document.querySelectorAll(".box");

// let box1 = document.getElementById("box1"); 

// box1.addEventListener("click", function(){
//     box1.innerHTML = "50";
// });


// let bulb = document.querySelector("#bulb");
// let btn = document.querySelector("button");

// let off = 0;

// btn.addEventListener("click", function(){
//     if(off == 0){
//         bulb.style.backgroundColor = "yellow"
//         off = 1
//     }else{
//         bulb.style.backgroundColor = "transparent"
//         off = 0
//     } 
// });


// set add friend feature
let h2 = document.querySelector("h2");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let accept = document.querySelector("#accept");




add.addEventListener("click", function(){
   add.innerHTML = "Requested"
   h2.innerHTML = "1 New Request"
});

accept.addEventListener("click", function(){
    h2.innerHTML = "Friends"
    h2.style.color = "green"
    add.innerHTML = "Accepted"
});

remove.addEventListener("click", function(){
    h2.innerHTML = "Stranger"
    h2.style.color = "red"
    add.innerHTML = "Add Friend"
});



// object oriented programming

// class students{
//     constructor(name, age, domain, location){
//         this.studentName = name;
//         this.studentAge = age;
//         this.studentDomain = domain;
//         this.studentLocation = location;
//     }
//     bio(){
//         console.log(`this is the bio details of students ${this.studentName} is a boy. He is ${this.studentAge} old. He is doing ${this.studentDomain} and he is from ${this.studentLocation}.`);
//     }
// }


// let a = new students("Bhya", 25, "Programming", "Lahore, Pakistan");
// let b = new students("Haris", 23, "Education", "Karachi, Pakistan");
// let c = new students("Zikra", 27, "Islamic Studies", "Lahore, Pakistan");

// a.bio();
// b.bio();
// c.bio();
























// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// let box4 = document.getElementById("box4");
// let box5 = document.getElementById("box5");
// let box6 = document.getElementById("box6");
// let box7 = document.getElementById("box7");
// let box8 = document.getElementById("box8");
// let box9 = document.getElementById("box9");
// let box10 = document.getElementById("box10");
// let box11 = document.getElementById("box11");
// let box12 = document.getElementById("box12");


