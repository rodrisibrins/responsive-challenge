let testScreen = document.getElementById("test");
let textValidations = document.getElementById("validations");
let form = document.querySelector("form");
let registerBtn = document.getElementById("submit-btn");
let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let passInp = document.getElementById("password");
let confirmInp = document.getElementById("confirm-password");
let nameScreen = document.querySelector("#name-container > div")
let emailScreen = document.querySelector("#email-container > div")
let passwordScreen = document.querySelector("#password-container > div")
let confirmPasswordScreen = document.querySelector("#confirm-password-container > div")
const symbolsReg = /([@"'.?*+^$#])/;
const numbersReg = /[0-9]/;
const dotCom = /.com/;
const mailReg = /@/;
const subdomain = /(?<=@)[a-z]/;

function checkName() {
    if (
        nameInp.value !== "" &&
        nameInp.value.length >= 6 &&
        nameInp.value.trim().split(" ").length >= 2 &&
        !nameInp.value.match(numbersReg) &&
        !nameInp.value.match(symbolsReg)
    ) {
        return true;
    } else {
        return false;
    }
}
function nameRedStyles() {
    nameScreen.style.display = "flex";
    nameScreen.style.color = "#f05945";
    nameInp.style.border = "2px solid #f05945";
}
nameInp.addEventListener("blur", function () {
    if (checkName()) {
        nameScreen.style.display = "flex";
        nameScreen.innerHTML = "Correct";
        nameScreen.style.color = "#5A8643";
        nameInp.style.border = "2px solid springgreen";
    } else if (nameInp.value == "") {
        nameRedStyles();
        nameScreen.innerHTML = "Complete with name and surname";
    } else if (nameInp.value.match(numbersReg) && nameInp.value.match(symbolsReg)) {
        nameRedStyles();
        nameScreen.innerHTML = "Numbers and symbols are not allowed";
    } else if (nameInp.value.trim().split(" ").length < 2) {
        nameRedStyles();
        nameScreen.innerHTML = "At least 6 characters with a space in between";
    } else if (nameInp.value.length < 6) {
        nameRedStyles();
        nameScreen.innerHTML = "At least 6 characters with a space in between";
    } else {
        nameRedStyles();
        nameScreen.innerHTML = "Numbers and symbols are not allowed";
    }
});
nameInp.addEventListener("focus", function () {
    nameScreen.style.display = "none";
    nameInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkEmail() {
    if (
        emailInp.value.match(mailReg) &&
        emailInp.value.match(dotCom) &&
        emailInp.value.match(subdomain)
    ) {
        console.log();
        return true;
    } else {
        return false;
    }
}
emailInp.addEventListener("blur", function () {
    if (checkEmail()) {
        emailScreen.style.display = "flex";
        emailScreen.innerHTML = "Correct";
        emailScreen.style.color = "#5A8643";
        emailInp.style.border = "2px solid springgreen";
    } else {
        emailScreen.style.display = "flex";
        emailScreen.innerHTML = "Invalid Email";
        emailScreen.style.color = "#f05945";
        emailInp.style.border = "2px solid #f05945";
    }
});
emailInp.addEventListener("focus", function () {
    emailScreen.style.display = "none";
    emailInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkPassword() {
    if (passInp.value.match(numbersReg) &&
        passInp.value.length >= 8 &&
        !passInp.value.match(symbolsReg)) {
        return true;
    } else {
        return false;
    }
}
passInp.addEventListener("blur", function () {
    if (checkPassword()) {
        passwordScreen.style.display = "flex";
        passwordScreen.innerHTML = "Correct";
        passwordScreen.style.color = "#5A8643";
        passInp.style.border = "2px solid springgreen";
    } else {
        passwordScreen.style.display = "flex";
        passwordScreen.style.color = "#f05945";
        passInp.style.border = "2px solid #f05945";
        passwordScreen.innerHTML = "At least 8 characters (only letters and numbers)";
    }
});
passInp.addEventListener("focus", function () {
    passwordScreen.style.display = "none";
    passInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkConfirm() {
    if (confirmInp.value != "" && confirmInp.value == passInp.value) {
        return true;
    } else {
        return false;
    }
}
confirmInp.addEventListener("blur", function () {
    if (checkConfirm()) {
        confirmPasswordScreen.style.display = "flex";
        confirmPasswordScreen.innerHTML = "Correct";
        confirmPasswordScreen.style.color = "#5A8643";
        confirmInp.style.border = "2px solid springgreen";
    } else {
        confirmPasswordScreen.style.display = "flex";
        confirmPasswordScreen.innerHTML = "Doesn't match the password";
        confirmPasswordScreen.style.color = "#f05945";
        confirmInp.style.border = "2px solid #f05945";
    }
});
confirmInp.addEventListener("focus", function () {
    confirmPasswordScreen.style.display = "none";
    confirmInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});