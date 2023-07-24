//declare your variables for the text field and access DOM
const email= document.getElementById('email');
const pwd = document.getElementById('password');
const confirmpwd = document.getElementById('password2');
const nameStackie = document.getElementById('stackie1');
const form = document.querySelector('#form');

//check email is valid  
const isRequired = value => value === '' ? false:true;
const isEmailValid = (email) =>{
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const checkEmail = () => {
  let valid = false;
  const emailValid= email.value.trim();
  if (!isRequired(emailValid)) {
    showError(email, 'Email cannot be empty');
  }
  else if (!isEmailValid(emailValid)) {
    showError(email, 'Email is not valid');
  }
  else{
    showSuccess(email);
    valid = true;
  }
  return valid;
}

//check that all fields have input
const checkUsername = ()=> {

  let valid = false;
  const username= nameStackie.value.trim();

  if(!isRequired(username)){
    showError(nameStackie, 'Username is required');
  }
  else{
    showSuccess(nameStackie);
    valid = true;
  }
  return valid;
}

//check input length for password
const isBetween = (length, min)=> length<min ?false : true;

const checkPassword = ()=> {
  let valid = false;
  const min = 5;
  const password = pwd.value.trim();

  if (!isBetween(password.length, min)){
    showError(pwd , `Password must be at least ${min}  characters.`);
  }
  else{
    showSuccess(pwd);
    valid = true;
  }
  return valid;
}

//check the two passwords match
const checkconfirmPassword = ()=> {

  let valid= false;
  const confirmPassword = confirmpwd.value.trim();
  const password = pwd.value.trim();

  if (!isRequired(confirmPassword)){
    showError(confirmpwd , 'Please enter the password');
  }
  else if(password.length!=confirmPassword.length){ 
      showError(confirmpwd, 'Passwords does not match');
  }
  else{
    showSuccess(confirmpwd);
    valid=true;
  }
  return valid;
}

//add event listener for Submit button
form.addEventListener('submit', function(e){
 e.preventDefault();

 let isEmailValid = checkEmail();
 isPasswordValid = checkPassword();
 isConfirmPasswordValid = checkconfirmPassword();
 isUsernameValid = checkUsername();

});

// funcions showError and showSuccess

const showError = (input, message) =>{
  const formField = input.parentElement;
  console.log(input.parentElement);

  formField.classList.remove('success');
  formField.classList.add('error');
  console.log(formField.classList);

  const error = formField.querySelector('small');
  error.textContent = message;


  console.log(document.getElementById('stackie1'))
}

const showSuccess = (input) =>{
  const formField = input.parentElement;

  formField.classList.remove('error');
  formField.classList.add('success');

  const error = formField.querySelector('small');
  error.textContent = " ";
}