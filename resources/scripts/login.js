const correctUsername = "myusername";
const correctPassword = "mypassword";

const usernameInput = document.getElementById("usernameBox");
const passwordInput = document.getElementById("passwordBox");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function() {

const enteredUsername = usernameInput.value;
const enteredPassword = passwordInput.value;

if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
    window.location.href = 'admin.html';
} else {
    alert("Incorrect username or password. Please try again.");
}
});





