let display = document.getElementById("inputBox");                   //get id from input 
let buttons = document.querySelectorAll("button");                //get all button tag from HTML

let buttonsArray = Array.from(buttons);         //ab buttons ki value ko aik array me convert kr dia hai 
let string = "";

buttonsArray.forEach((btn)=>{   // for each loop k sath arrow function use kia hai
    
    btn.addEventListener("click", (e) => {

        if(e.target.innerHTML == "DEL"){
            string = string.substring(0., string.length-1);
            display.value = string;
        }else if(e.target.innerHTML == "AC"){
            string = "";
            display.value = string;
        }else if(e.target.innerHTML == "="){
            string = eval(string);
            display.value = string;
        }else{
            string += e.target.innerHTML;
            display.value = string;
        }          
    });
});


