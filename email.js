const error = document.querySelector(".error");
const errorText = document.querySelector(".error-text");
const success = document.querySelector(".success");
const focusMe = document.querySelector(".focus-me");

function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        error.classList.remove("active");
        errorText.classList.remove("active");
        success.classList.add("active");
        document.form.reset();
        focusMe.focus();
        return true;
    }else{
        success.classList.remove("active");
        error.classList.add("active");
        errorText.classList.add("active");
        document.form.reset();
        focusMe.focus();
        return false;
    }
}