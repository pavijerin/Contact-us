const usernameinput = document.querySelector("#username");
const email =  document.querySelector("#email");
const password = document.querySelector("#password");
const address = document.querySelector("#address");
const age = document.querySelector("#age");
const contact = document.querySelector("#contact");
const message = document.querySelector("#message");
const success = document.querySelector("#success");


const name_error = document.querySelector(".name_error");
const email_error = document.querySelector(".email_error");
const password_error = document.querySelector(".password_error");
const address_error = document.querySelector(".address_error");
const age_error =document.querySelector(".age_error");
const contact_error = document.querySelector(".contact_error");
const message_error = document.querySelector(".message_error");

function validateform()

{   
    event.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errorflag=false;
    if(usernameinput.value.length<1)
    {   
        name_error.innerHTML = "Username Required";
        errorflag=true;
    }
    else
    {
        name_error.innerHTML = "";

    }
    if(!emailPattern.test(email.value))
    {   
        email_error.innerHTML = "Email Required"
        errorflag=true;
    }
    else
    {
        email_error.innerHTML = ""
    }
    if(password.value.length<8)
    {
        password_error.innerHTML = "Password Should in 8 characters"
        errorflag=true;
    }
    else
    {
        password_error.innerHTML = "";
    }

   
    if(address.value<1)
    {
        address_error.innerHTML = "Address Required"
        errorflag=true;
    }
    else
    {
        address_error.innerHTML = "";
    }
    if(age.value === "")
        {
            age_error.innerHTML = "Age Required"
            errorflag=true;
        }
        else
        {
            age_error.innerHTML = "";
        }
    if(contact.value.length<10)
     {
         contact_error.innerHTML = "Contact Required"
         errorflag=true;
     }
     else
    {
       contact_error.innerHTML = "";
    }

    if(message.value<1)
    {
        message_error.innerHTML = "Message Required"
        errorflag=true;
    }
    else
    {
        message_error.innerHTML = "";
    }
    
    
    if(errorflag==false)
    {
        alert("Login Successfully & Thank You")
        errorflag=false;
        validateform.reset();  
    }

}