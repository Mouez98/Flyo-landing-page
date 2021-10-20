const form = document.getElementById('form');
let email = document.getElementById("email");
const form2 = document.getElementById('form2');
let email2 = document.getElementById("ex-email");

form.addEventListener("submit", (e) => {
   e.preventDefault();
 
   checkInputs();
 });
form2.addEventListener("submit", (e) => {
   e.preventDefault();
 
   checkInputs2();
 });


 function checkInputs2() {
   const emailValue = email2.value.trim(); 
   if(emailValue === '') {
      setErrorFor(email2 , "Please check your Email") ;
   } else if(!isEmail(emailValue)){
      setErrorFor(email2 , "Not a valid email") ;
   }
   else {
      setSuccessFor(email2);
   }
}
 function checkInputs() {
   const emailValue = email.value.trim(); 
   if(emailValue === '') {
      setErrorFor(email , "Please check your Email") ;
   } else if(!isEmail(emailValue)){
      setErrorFor(email , "Not a valid email") ;
   }
   else {
      setSuccessFor(email);
   }
}
function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const paragraph = formControl.querySelector("small");
   paragraph.innerText = message;
   //add error class
   formControl.className = "form-control error";
 }
 function setSuccessFor(input) {
   const formControl = input.parentElement;
   formControl.className = "form-control succes";
}

function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }