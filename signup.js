function validateForm() {

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let age = document.getElementById("age").value;
let username = document.getElementById("username").value.trim();
let password = document.getElementById("password").value;
let confirmPassword = document.getElementById("confirmPassword").value;
let ageGroup = document.getElementById("ageGroup").value;
let terms = document.getElementById("terms").checked;

let genderSelected = document.querySelector('input[name="gender"]:checked');
let errorMsg = document.getElementById("errorMsg");

errorMsg.innerHTML = "";

if (
name === "" || email === "" || phone === "" ||
age === "" || username === "" ||
password === "" || confirmPassword === ""
) {
errorMsg.innerHTML = "All fields are required.";
return false;
}

if (!genderSelected) {
errorMsg.innerHTML = "Please select a gender.";
return false;
}

if (phone.length !== 10 || isNaN(phone)) {
errorMsg.innerHTML = "Enter a valid 10-digit phone number.";
return false;
}

if (age < 1 || age > 100) {
errorMsg.innerHTML = "Enter a valid age.";
return false;
}

if (ageGroup === "") {
errorMsg.innerHTML = "Please select an age group.";
return false;
}

if (password.length < 6) {
errorMsg.innerHTML = "Password must be at least 6 characters.";
return false;
}

if (password !== confirmPassword) {
errorMsg.innerHTML = "Passwords do not match.";
return false;
}

if (!terms) {
errorMsg.innerHTML = "You must accept the terms.";
return false;
}
alert("Account created successfully! Please login.");

window.location.href = "login.html";

return false;

}