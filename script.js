const form = document.getElementById("formContainer");

// Inputs
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const birthday = document.getElementById("birthday");
const email = document.getElementById("email");
const telephone = document.getElementById("telephone");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

function validate() {
  // Input Values
  const fnameValue = firstName.value.trim();
  const lnameValue = lastName.value.trim();
  const birthdayValue = birthday.value;
  const emailValue = email.value.trim();
  const telephoneValue = telephone.value;

  // Check first name
  if (fnameValue === "") {
    clearInput(firstName);
    setErrorFor(firstName, "Name cannot be blank");
  } else if (!isFName(fnameValue)) {
    clearInput(firstName);
    setErrorFor(firstName, "Please enter valid name");
  } else {
    clearInput(firstName);
    setSuccessFor(firstName);
  }

  // Check last name
  if (lnameValue === "") {
    clearInput(lastName);
    setErrorFor(lastName, "Last name cannot be blank");
  } else if (!isLName(lnameValue)) {
    clearInput(lastName);
    setErrorFor(lastName, "Please enter valid name");
  } else {
    clearInput(lastName);
    setSuccessFor(lastName);
  }

  // Check birthday
  if (birthdayValue === "") {
    clearInput(birthday);
    setErrorFor(birthday, "Must be filled");
  } else if (!isBirtday(birthdayValue)) {
    clearInput(birthday);
    setErrorFor(birthday, "Please enter valid birthday");
  } else {
    clearInput(birthday);
    setSuccessFor(birthday);
  }

  // Check email
  if (emailValue === "") {
    clearInput(email);
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    clearInput(email);
    setErrorFor(email, "Not a valid email");
    console.log("email err");
  } else {
    clearInput(email);
    setSuccessFor(email);
  }

  // Check number
  if (telephoneValue === "") {
    clearInput(telephone);
    setErrorFor(telephone, "Phone number cannot be blank");
  } else if (!isNumber(telephoneValue)) {
    clearInput(telephone);
    setErrorFor(telephone, "Not a valid phone number");
  } else {
    clearInput(telephone);
    setSuccessFor(telephone);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector(".error");
  error.style.visibility = "visible";
  error.style.color = "red";

  const errorDisplay = formControl.querySelector(".displayError");
  errorDisplay.innerHTML = message;
  errorDisplay.style.visibility = "visible";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const success = formControl.querySelector(".success");
  success.style.visibility = "visible";
  success.style.color = "green";
}

function clearInput(input) {
  const formControl = input.parentElement;

  const error = formControl.querySelector(".error");
  error.style.visibility = "hidden";

  const success = formControl.querySelector(".success");
  success.style.visibility = "hidden";

  const errorDisplay = formControl.querySelector(".displayError");
  errorDisplay.innerHTML = "";
  errorDisplay.style.visibility = "hidden";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isNumber(number) {
  const pattern = new RegExp(
    "^\\+[1-9]{1}[0-9]{0,2}-?[2-9]{1}[0-9]{2}-?[2-9]{1}[0-9]{2}-?[0-9]{4}$"
  );

  if (pattern.test(number)) {
    return true;
  } else {
    return false;
  }
}

function isFName(fname) {
  return /^[a-zа-яA-ZА-Я]+$/.test(fname);
}
function isLName(lname) {
  return /^[a-zа-яA-ZА-Я]+$/.test(lname);
}

function isBirtday(birthday) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dateNow = `${year}-${month + 1}-${day < 10 ? "0" + day : day}`;

  console.log(`${dateNow} - NOW`);
  console.log(`${birthday} - Input`);

  if (birthday > dateNow) {
    return false;
  } else {
    return true;
  }
}
