
// Followed new tutorial by (Nilesh Dadheech) channel
// sab se pehly input tag me ek id bnani hai or ek span tag create kr k us me b id lgani hai then in sab ids ko variable me store krna hai. then conditional statement lgani hai according to need. Then logical operator OR|| ka use krna hai or "return" true/false output lena. Then return ko b variable me store kna hai.
let contactName, phoneNo, email, textArea, nameError, phoneError, emailError, messageError, result;

    contactName = document.getElementById("contact-name");
    phoneNo = document.getElementById("phone-no");
    email = document.getElementById("email");
    textArea = document.getElementById("text-area");

    // span tag data stored here
    nameError = document.getElementById("name-error");
    phoneError = document.getElementById("phone-error");
    emailError = document.getElementById("email-error");
    messageError = document.getElementById("message-error");

    function validateName(){

        if (phoneNo.value == ""){
            phoneError.innerHTML = "*Number is required";
        }
        else{
            phoneError.innerHTML = "";
        }

        if (email.value == ""){
            emailError.innerHTML = "*Email is required";
        }
        else{
            emailError.innerHTML = "";
        }

        if (textArea.value == ""){
            messageError.innerHTML = "*This feild is required";
        }
        else{
            messageError.innerHTML = "";
        }

        if ((contactName.value == "") || (phoneNo.value == "") || (email.value == "") || (textArea.value == "")) {
            result = false;
        }
        else{
            result = true;
        }
        return result;
    };
