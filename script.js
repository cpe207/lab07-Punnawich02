const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector('#last-name-input');
const EmailInput = document.querySelector('#email-input');
const PassInput = document.querySelector('#password-input');
const submitBtn = document.querySelector("#submit-btn");


//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
}

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
}

EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-valid");
  EmailInput.classList.remove("is-invalid");
}

PassInput.onkeyup = () => {
  PassInput.classList.remove("is-invalid");
  PassInput.classList.remove("is-valid");
}

submitBtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isPasswordOk = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  }else{
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastNameInput.value === ""){
    lastNameInput.classList.add("is-invalid");
  }else{
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

  if(!validateEmail(EmailInput.value)){
    EmailInput.classList.add("is-invalid");
  }else{
    EmailInput.classList.add("is-valid");
  }

  if(PassInput.value.length < 6){
    PassInput.classList.add('is-invalid');
  }else{
    PassInput.classList.add("is-valid");
    isPasswordOk = true;
  }

  if(isFirstNameOk && isLastNameOk && validateEmail(EmailInput.value) && isPasswordOk){
    alert('Register successfully');
  }
};
