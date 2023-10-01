// var emailId  = ddocument.getElementById('email');
// console.log(emailId);
// const emailError  = document.getElementById('error_email');




// function validateEmail() {
//     var regExEmail = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(northeastern)\.edu$/;

//     if(!emailId.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//     emailError.innerHTML = "Please enter a valid email";
//     return false;
//     }
    
//     emailError.innerHTML = "";
//     return true;
// }


window.onload = () => {
    // Accessing form item by id
    // const name = document.getElementById('name');

    // Accessing form and its element by name
    // const name = document.myForm.name;
    // const email = document.myForm.email;
    // const phoneNumber = document.myForm.phoneNumber;
    // const comment = document.myForm.comment;

    // Event Listener
    // const printValue = event => {
    //     alert(event.target.value);
    // };

    // Need to add event listener in every input item - too much code
    // name.addEventListener('input', printValue);
    // email.addEventListener('input', printValue);
    // phoneNumber.addEventListener('input', printValue);
    // comment.addEventListener('input', printValue);

    // Event Delegation - One handler for all form input
    // const myForm = document.myForm;
    // myForm.addEventListener('input', printValue);

    // regular expressions for name, email and phone
    const regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const regExEmail = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(northeastern)\.edu$/;
    const regExPhone = /\d{3}-?\d{3}-\d{4}$/;
    

    const display = (elementName, isInValid) => {
        if(isInValid) {
            // You cant access non form element like below error field using name
            // Hence use the rudimentary way - getElementById or other
            document.getElementById(`error_${elementName}`).style.display = "block";
            document.myForm[elementName].style.border = "2px solid red";
        } else {
            document.getElementById(`error_${elementName}`).style.display = "none";
            document.myForm[elementName].style.border = "";
        }
    }

    let isNameInValid = true, isEmailInValid = true, isPhoneNumberInValid = true;
    const validate = event => {
        console.log('input');
        const {id, value, name,} = event.target;

        switch(id) {
            case "fname":
                if(!value.trim().toLowerCase().match(regExName)) {
                    display(name, true);
                    isNameInValid = true;
                } else {
                    display(name, false);
                    isNameInValid = false;
                }
                break;
            case "email":
                if(!value.trim().toLowerCase().match(regExEmail)) {
                    display(name, true);
                    isEmailInValid = true;
                } else {
                    display(name, false);
                    isEmailInValid = false;
                }
                break;
            case "phoneNumber":
                if(!value.trim().toLowerCase().match(regExPhone)) {
                    display(name, true);
                    isPhoneNumberInValid = true;
                } else {
                    display(name, false);
                    isPhoneNumberInValid = false;
                }
                break;
        }

        if(isNameInValid || isEmailInValid || isPhoneNumberInValid) {
            document.myForm.submit.setAttribute('disabled', true);
        } else {
            document.myForm.submit.removeAttribute('disabled');
        }
    }

    // write a function submitted
    function submitted(e){
        console.log('submit');
        // To avoid page refresh
        e.preventDefault();

        if(!isNameInValid && !isEmailInValid && !isPhoneNumberInValid){
            alert("Data entered successfully");
        }
        else{
            alert("Please enter valid details")
        }
    }

    // Event Delegation
    // https://javascript.info/event-delegation
    document.myForm.addEventListener('input', validate);
    document.myForm.addEventListener('submit', submitted);

}