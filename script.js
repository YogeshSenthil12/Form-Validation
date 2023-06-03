// JavaScript code
function validateForm(event) {
    event.preventDefault();
    //get element ID 
    //username
    var username = document.getElementById("username").value;
    var usernameError = document.getElementById("usernameError");
    var usernameField = document.getElementById("username");
    //email
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    var emailField = document.getElementById("email");
    //country
    var country = document.getElementById("country").value;
    var countryError = document.getElementById("countryError");
    var countryField = document.getElementById("country");
    //password
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("passwordError");
    var passwordField = document.getElementById("password");
    //password1
    var password1 = document.getElementById("password1").value;
    var password1Error = document.getElementById("password1Error");
    var password1Field = document.getElementById("password1");
    //empty storing
    usernameError.textContent = "";
    emailError.textContent = "";
    countryError.textContent = "";
    passwordError.textContent = "";
    password1Error.textContent = "";
    usernameField.style.borderColor = "";
    emailField.style.borderColor = "";
    countryField.style.borderColor = "";
    passwordField.style.borderColor = "";
    password1Field.style.borderColor = "";
    //check if there is empty field
    if (username === "" || email === "" ||  password === "" || password1 === "") {
        usernameError.textContent = "Username cannot be blank";
        emailError.textContent = "Email cannot be blank";
        countryError.textContent = "Select your country";
        passwordError.textContent = "Password cannot be blank";
        password1Error.textContent = "Please enter the password again";
        return;
    }
    //username
    if (username.trim() === "") {
        usernameError.textContent = "Username cannot be blank.";
        return;
    } else if (username.length < 3 || username.length > 25) {
        usernameError.textContent = "Username must be between 3 and 25 characters";
    } else {
        usernameError.textContent = "";
        usernameField.style.borderColor = "green";
    }
    //email
    if (email === "") {
        emailError.textContent = "Email cannot be blank.";
        return;
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        emailError.textContent = "Email not found";
        return;
    } else {
        emailError.textContent = "";
        emailField.style.borderColor = "green";
    }
    //country
    if (country === "") {
        countryError.textContent = "Select your country.";
        return;
    } else {
        countryError.textContent = "";
        countryField.style.borderColor = "green";
    }
    //password
    if (password === "") {
        passwordError.textContent = "Password cannot be blank.";
        return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
        passwordError.textContent =
            "Password must have at least 8 characters, including at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character (!@#$%^&*)";
        return;
    } else {
        passwordError.textContent = "";
        passwordField.style.borderColor = "green";
    }
    //re-enter pwd
    if (password1 === "") {
        password1Error.textContent = "Please enter the password again.";
        return;
    } else if (password1 !== password) {
        password1Error.textContent = "The password does not match";
        return;
    } else {
        password1Error.textContent = "";
        password1Field.style.borderColor = "green";
    }
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          password1: password1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          window.location.href = "next.html";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    
}

//eventListener username
var usernameField = document.getElementById("username");
var usernameError = document.getElementById("usernameError");
usernameField.addEventListener("input", function () {
    usernameError.textContent = "";
    usernameField.style.borderColor = "green";
    var username = usernameField.value;
    if (username.trim() === "") {
        usernameError.textContent = "Username cannot be blank";
    } else if (username.length < 3 || username.length > 25) {
        usernameError.textContent = "Username must be between 3 and 25 characters";
    }
});

//email
var emailField = document.getElementById("email");
var emailError = document.getElementById("emailError");
emailField.addEventListener("input", function () {
    emailError.textContent = "";
    emailField.style.borderColor = "green";
    var email = emailField.value;
    if (email === "") {
        emailError.textContent = "Email cannot be blank";
    } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        emailError.textContent = "Email not found";
    }
});
//country
var countryField = document.getElementById("country");
var countryError = document.getElementById("countryError");
countryField.addEventListener("change", function () {
    countryError.textContent = "";
    countryField.style.borderColor = "green";
    var country = countryField.value;
    if (country === "") {
        countryError.textContent = "Select your country.";
    }
});
//password
var passwordField = document.getElementById("password");
var passwordError = document.getElementById("passwordError");
passwordField.addEventListener("input", function () {
    passwordError.textContent = "";
    passwordField.style.borderColor = "green";
    var password = passwordField.value;
    if (password === "") {
        passwordError.textContent = "Password cannot be blank.";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)) {
        passwordError.textContent =
            "Password must have at least 8 characters, including at least 1 lowercase character, 1 uppercase character, 1 number, and 1 special character (!@#$%^&*)";
    }
});
//re-enter password
var password1Field = document.getElementById("password1");
var password1Error = document.getElementById("password1Error");
password1Field.addEventListener("input", function () {
    password1Error.textContent = "";
    password1Field.style.borderColor = "green";
    var password1 = password1Field.value;
    if (password1 === "") {
        password1Error.textContent = "Please enter the password again.";
    } else if (password1 !== passwordField.value) {
        password1Error.textContent = "The password does not match";
    }
});

//submit button
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", validateForm);
