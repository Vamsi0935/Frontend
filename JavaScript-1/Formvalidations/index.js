const form = document.getElementById("form");
const uname = document.getElementById("uname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = validate();
  if (isValid) {
    alert("Form submitted successfully!!!");
  } else {
    alert("Form Validation is failed!!");
  }
});
function setError(input, message) {
  let parent = input.parentElement;
  parent.classList.add("error");
  parent.classList.remove("success");
  parent.querySelector("small").innerText = message;
}
function setSuccess(input) {
  let parent = input.parentElement;
  parent.classList.add("success");
  parent.classList.remove("error");
}
function validate() {
  let nameValue = uname.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let cpasswordValue = cpassword.value.trim();

  //username check
  if (nameValue === "") {
    setError(uname, "Username cannot be empty");
    alert("Username cannot be empty!!");
    // alert("username cannot be empty")
  } else if (nameValue.length < 3) {
    setError(uname, "username should be minimum 3 characters");
    alert("Username conatins minimum 3 characters!!");
  } else {
    setSuccess(uname);
  }

  //email check
  if (emailValue === "") {
    setError(email, "email cannot be empty");
    alert("Email cannot be empty!!");
  } else if (!emailCheck(emailValue)) {
    setError(email, "enter valid email id");
    alert("It is not a valid email ID");
  } else {
    setSuccess(email);
  }

  //password check
  if (passwordValue === "") {
    setError(password, "password cannot be empty");
    alert("Password cannot be empty!!")
  } else if (passwordValue.length < 8) {
    setError(password, "password should be minimum 8 characters");
    alert("password contains minimun 8 characters!!");
  } else {
    setSuccess(password);
  }

  if (cpasswordValue === "") {
    setError(cpassword, "password cannot be empty");
  } else if (cpasswordValue !== passwordValue) {
    setError(cpassword, "password not matched");
  } else {
    setSuccess(cpassword);
  }
}
function emailCheck(input) {
  let emailReg = /^[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,4}$/;
  let valid = emailReg.test(input);
  console.log(valid);
  return valid;
}
