var form = document.querySelector("form");
var greetingMsg = document.getElementById("greeting")
var nameInp = document.getElementById("name");
var emailInp = document.getElementById("email");
var passInp = document.getElementById("password");
var confirmInp = document.getElementById("confirm-password");
var ageInp = document.getElementById("age")
var telephoneInp = document.getElementById("telephone")
var addressInp = document.getElementById("address")
var cityInp = document.getElementById("city")
var postalCodeInp = document.getElementById("postal-code")
var dniInp = document.getElementById("dni")
var nameMsg = document.querySelector("#name-container > div")
var emailMsg = document.querySelector("#email-container > div")
var passwordMsg = document.querySelector("#password-container > div")
var confirmPasswordMsg = document.querySelector("#confirm-password-container > div")
var ageMsg = document.querySelector("#age-container > div")
var telephoneMsg = document.querySelector("#telephone-container > div")
var addressMsg = document.querySelector("#address-container > div")
var cityMsg = document.querySelector("#city-container > div")
var postalCodeMsg = document.querySelector("#postal-container > div")
var dniMsg = document.querySelector("#dni-container > div")
var testScreen = document.getElementById("test");
var textValidations = document.getElementById("validations");
var registerBtn = document.getElementById("submit-btn");
var resetBtn = document.getElementById("reset-btn")
var modalContainer = document.getElementById("modal-subscription");
var modalContent = document.getElementsByClassName("modal-content")[0];
var modalTitle = document.querySelector(".modal-content > h3");
var modalData = document.querySelector(".modal-content > ul")
var closeBtn = document.getElementsByClassName("close-btn")[0];
var symbolsReg = /([@"'(.?*+^$#-()])/;
var numbersReg = /[0-9]/;
var dotCom = /.com/;
var mailReg = /@/;
var subdomain = /(?<=@)[a-z]/;
var lettersReg = /[a-z]/

function correctStyles(correctContainer, inputToValidate) {
    correctContainer.style.display = "flex";
    correctContainer.innerHTML = "Correct";
    correctContainer.style.color = "#5A8643";
    inputToValidate.style.border = "2px solid springgreen";
}

function errorStyles(msgContainer, inputSelected) {
    msgContainer.style.display = "flex";
    msgContainer.style.color = "#f05945";
    inputSelected.style.border = "2px solid #f05945";
}

function testValidationsStyles() {
    testScreen.style.display = "flex";
    testScreen.style.border = "2px solid #f05945";
}

function cleanValidations() {
    textValidations.innerHTML = "";
    testScreen.style.border = "2px solid";
}

function successfullModal(userInfo) {
    var jsonToString = JSON.stringify(userInfo, null, 2);
    modalContainer.style.display = "block";
    modalTitle.innerHTML = "Successfull Subscription! :)";
    modalData.innerHTML = `<li>${jsonToString}</li>`;
    localStorage.setItem("userName", nameInp.value);
    localStorage.setItem("userEmail", emailInp.value);
    localStorage.setItem("userPassword", passInp.value);
    localStorage.setItem("userConfirmPassword", confirmInp.value);
    localStorage.setItem("userAge", ageInp.value);
    localStorage.setItem("userTelephone", telephoneInp.value);
    localStorage.setItem("userAddress", addressInp.value);
    localStorage.setItem("userCity", cityInp.value);
    localStorage.setItem("userPostalCode", postalCodeInp.value);
    localStorage.setItem("userDni", dniInp.value);
}

function errorModal(errorInfo) {
    modalContainer.style.display = "block";
    modalTitle.innerHTML = "Sorry, there was an error :(";
    modalData.innerHTML = `<li>${errorInfo}</li>`;
    modalContent.style.border = "4px solid rgb(240, 110, 100)"
}

window.addEventListener("load", function () {
    var currentUserName = localStorage.getItem("userName");
    var currentUserEmail = localStorage.getItem("userEmail");
    var currentUserPassword = localStorage.getItem("userPassword");
    var currentUserConfirmPass = localStorage.getItem("userConfirmPassword");
    var currentUserAge = localStorage.getItem("userAge");
    var currentUserTelephone = localStorage.getItem("userTelephone");
    var currentUserAddress = localStorage.getItem("userAddress");
    var currentUserCity = localStorage.getItem("userCity");
    var currentUserPostalCode = localStorage.getItem("userPostalCode");
    var currentUserDni = localStorage.getItem("userDni");

    nameInp.value = currentUserName;
    emailInp.value = currentUserEmail;
    passInp.value = currentUserPassword;
    confirmInp.value = currentUserConfirmPass;
    ageInp.value = currentUserAge;
    telephoneInp.value = currentUserTelephone;
    cityInp.value = currentUserCity;
    postalCodeInp.value = currentUserPostalCode;
    dniInp.value = currentUserDni;
    addressInp.value = currentUserAddress;
})

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
        var nameErrorMsg = "<li>Invalid Name</li>";
        if (textValidations.innerHTML != nameErrorMsg) {
            textValidations.innerHTML += nameErrorMsg;
        }
    }
}
nameInp.addEventListener("keydown", function () {
    greetingMsg.style.display = "flex";
    greetingMsg.innerHTML = "Hello, " + nameInp.value;
})
nameInp.addEventListener("blur", function () {
    if (checkName()) {
        correctStyles(nameMsg, nameInp);
    } else if (nameInp.value == "") {
        errorStyles(nameMsg, nameInp);
        nameMsg.innerHTML = "Complete with name and surname";
    } else if (nameInp.value.match(numbersReg) && nameInp.value.match(symbolsReg)) {
        errorStyles(nameMsg, nameInp);
        nameMsg.innerHTML = "Numbers and symbols are not allowed";
    } else if (nameInp.value.trim().split(" ").length < 2) {
        errorStyles(nameMsg, nameInp);
        nameMsg.innerHTML = "At least 6 characters with a space in between";
    } else if (nameInp.value.length < 6) {
        errorStyles(nameMsg, nameInp);
        nameMsg.innerHTML = "At least 6 characters with a space in between";
    } else {
        errorStyles(nameMsg, nameInp);
        nameMsg.innerHTML = "Numbers and symbols are not allowed";
    }
});
nameInp.addEventListener("focus", function () {
    nameMsg.style.display = "none";
    nameInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkEmail() {
    if (
        emailInp.value.match(mailReg) &&
        emailInp.value.match(dotCom) &&
        emailInp.value.match(subdomain)
    ) {
        return true;
    } else {
        var emailErrorMsg = "<li>Invalid email</li>";
        if (textValidations.innerHTML != emailErrorMsg) {
            textValidations.innerHTML += emailErrorMsg;
        }
    }
}
emailInp.addEventListener("blur", function () {
    if (checkEmail()) {
        correctStyles(emailMsg, emailInp);
    } else {
        errorStyles(emailMsg, emailInp);
        emailMsg.innerHTML = "Invalid email";
    }
});
emailInp.addEventListener("focus", function () {
    emailMsg.style.display = "none";
    emailInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkPassword() {
    if (passInp.value.match(numbersReg) &&
        passInp.value.length >= 8 &&
        !passInp.value.match(symbolsReg)) {
        return true;
    } else {
        var passwordErrorMsg = "<li>Invalid Password</li>";
        if (textValidations.innerHTML != passwordErrorMsg) {
            textValidations.innerHTML += passwordErrorMsg;
        }
    }
}
passInp.addEventListener("blur", function () {
    if (checkPassword()) {
        correctStyles(passwordMsg, passInp);
    } else {
        errorStyles(passwordMsg, passInp);
        passwordMsg.innerHTML = "At least 8 characters (only letters and numbers)";
    }
});
passInp.addEventListener("focus", function () {
    passwordMsg.style.display = "none";
    passInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkConfirm() {
    if (confirmInp.value != "" && confirmInp.value == passInp.value) {
        return true;
    } else {
        var confirmErrorMsg = "<li>The password doesn't match</li>";
        if (textValidations.innerHTML != confirmErrorMsg) {
            textValidations.innerHTML += confirmErrorMsg;
        }
    }
}
confirmInp.addEventListener("blur", function () {
    if (checkConfirm()) {
        correctStyles(confirmPasswordMsg, confirmInp);
    } else {
        errorStyles(confirmPasswordMsg, confirmInp);
        confirmPasswordMsg.innerHTML = "Doesn't match the password";
    }
});
confirmInp.addEventListener("focus", function () {
    confirmPasswordMsg.style.display = "none";
    confirmInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkAge() {
    if (ageInp.value != "" &&
        !ageInp.value.match(symbolsReg) &&
        ageInp.value >= 18) {
        return true;
    } else {
        var ageErrorMsg = "<li>Invalid Age</li>";
        if (textValidations.innerHTML != ageErrorMsg) {
            textValidations.innerHTML += ageErrorMsg;
        }
    }
}
ageInp.addEventListener("blur", function () {
    if (checkAge()) {
        correctStyles(ageMsg, ageInp);
    } else {
        errorStyles(ageMsg, ageInp);
        ageMsg.innerHTML = "You must have at least 18";
    }
});
ageInp.addEventListener("focus", function () {
    ageMsg.style.display = "none";
    ageInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkTelephone() {
    if (telephoneInp.value != "" &&
        !telephoneInp.value.match(symbolsReg) &&
        telephoneInp.value.length >= 7) {
        return true;
    } else {
        var telephoneErrorMsg = "<li>Invalid Telephone</li>";
        if (textValidations.innerHTML != telephoneErrorMsg) {
            textValidations.innerHTML += telephoneErrorMsg;
        }
    }
}
telephoneInp.addEventListener("blur", function () {
    if (checkTelephone()) {
        correctStyles(telephoneMsg, telephoneInp);
    } else {
        errorStyles(telephoneMsg, telephoneInp);
        telephoneMsg.innerHTML = "Must have at least 7 numbers";
    }
});
telephoneInp.addEventListener("focus", function () {
    telephoneMsg.style.display = "none";
    telephoneInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkAddress() {
    if (addressInp.value !== "" &&
        addressInp.value.length >= 5 &&
        addressInp.value.trim().split(" ").length === 2 &&
        addressInp.value.match(numbersReg) &&
        addressInp.value.match(lettersReg)) {
        return true;
    } else {
        var addressErrorMsg = "<li>Invalid Address</li>";
        if (textValidations.innerHTML != addressErrorMsg) {
            textValidations.innerHTML += addressErrorMsg;
        }
    }
}
addressInp.addEventListener("blur", function () {
    if (checkAddress()) {
        correctStyles(addressMsg, addressInp);
    } else if (addressInp.value.trim().split(" ").length != 2) {
        errorStyles(addressMsg, addressInp);
        addressMsg.innerHTML = "At least 5 characters with a space in between";
    } else if (!addressInp.value.match(numbersReg)) {
        errorStyles(addressMsg, addressInp);
        addressMsg.innerHTML = "The address must have the number";
    } else if (!addressInp.value.match(lettersReg)) {
        errorStyles(addressMsg, addressInp);
        addressMsg.innerHTML = "The address must have the street name";
    }
});
addressInp.addEventListener("focus", function () {
    addressMsg.style.display = "none";
    addressInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkCity() {
    if (cityInp.value !== "" &&
        cityInp.value.length >= 3 &&
        !cityInp.value.match(numbersReg)) {
        return true;
    } else {
        var cityErrorMsg = "<li>Invalid City Name</li>";
        if (textValidations.innerHTML != cityErrorMsg) {
            textValidations.innerHTML += cityErrorMsg;
        }
    }
}
cityInp.addEventListener("blur", function () {
    if (checkCity()) {
        correctStyles(cityMsg, cityInp);
    } else {
        errorStyles(cityMsg, cityInp);
        cityMsg.innerHTML = "Invalid city name";
    }
});
cityInp.addEventListener("focus", function () {
    cityMsg.style.display = "none";
    cityInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkPostalCode() {
    if (postalCodeInp.value !== "" &&
        !ageInp.value.match(symbolsReg) &&
        postalCodeInp.value.length >= 3) {
        return true;
    } else {
        var postalErrorMsg = "<li>Invalid Postal Code</li>";
        if (textValidations.innerHTML != postalErrorMsg) {
            textValidations.innerHTML += postalErrorMsg;
        }
    }
}
postalCodeInp.addEventListener("blur", function () {
    if (checkPostalCode()) {
        correctStyles(postalCodeMsg, postalCodeInp);
    } else {
        errorStyles(postalCodeMsg, postalCodeInp);
        postalCodeMsg.innerHTML = "Invalid Postal Code";
    }
});
postalCodeInp.addEventListener("focus", function () {
    postalCodeMsg.style.display = "none";
    postalCodeInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function checkDni() {
    if (dniInp.value !== "" &&
        !ageInp.value.match(symbolsReg) &&
        dniInp.value.length >= 7 &&
        dniInp.value.length <= 8) {
        return true;
    } else {
        var dniErrorMsg = "<li>Invalid DNI</li>";
        if (textValidations.innerHTML != dniErrorMsg) {
            textValidations.innerHTML += dniErrorMsg;
        }
    }
}
dniInp.addEventListener("blur", function () {
    if (checkDni()) {
        correctStyles(dniMsg, dniInp);
    } else {
        errorStyles(dniMsg, dniInp);
        dniMsg.innerHTML = "Invalid DNI";
    }
});
dniInp.addEventListener("focus", function () {
    dniMsg.style.display = "none";
    dniInp.style.border = "2px solid rgba(30, 144, 255, 0.4)";
});

function validateAll() {
    cleanValidations();
    checkName();
    checkEmail();
    checkPassword();
    checkConfirm();
    checkAge();
    checkTelephone();
    checkAddress();
    checkCity();
    checkPostalCode();
    checkDni();
}

form.addEventListener("submit", function (e) {
    if (checkName() && checkEmail() && checkPassword() &&
        checkConfirm() && checkAge() && checkTelephone() &&
        checkAddress() && checkCity() && checkPostalCode() &&
        checkDni()) {
        cleanValidations();
        testScreen.style.display = "flex";
        testScreen.style.border = "2px solid springgreen";
        textValidations.innerHTML +=
            `<li>Full Name: ${nameInp.value}</li>` +
            `<li>Email: ${emailInp.value}</li>` +
            `<li>Password: ${passInp.value}</li>` +
            `<li>Confirm Password: ${confirmInp.value}</li>` +
            `<li>Age: ${ageInp.value}</li>` +
            `<li>Telephone: ${telephoneInp.value}</li>` +
            `<li>Address: ${addressInp.value}</li>` +
            `<li>City: ${cityInp.value}</li>` +
            `<li>Postal Code: ${postalCodeInp.value}</li>` +
            `<li>DNI: ${dniInp.value}</li>`;
        modalContainer.style.display
        var baseUrl = `https://curso-dev-2021.herokuapp.com/newsletter?` +
            `name=${nameInp.value}&email=${emailInp.value}&address=${addressInp.value}` +
            `&password=${passInp.value}&age=${ageInp.value}&telephone=${telephoneInp.value}` +
            `&city=${cityInp.value}&postalcode=${postalCodeInp.value}&dni=${dniInp.value}`;
        fetch(baseUrl)
            .then(response =>
                response.json())
            .then(data =>
                successfullModal(data))
            .catch((error) => {
                errorModal(error);
            });
        e.preventDefault();
    } else {
        validateAll();
        testValidationsStyles();
        e.preventDefault();
    }
});

resetBtn.addEventListener("click", function (e) {
    e.preventDefault();
    location.reload();
});

closeBtn.addEventListener("click", function () {
    modalContainer.style.display = "none";
})

window.addEventListener("click", function (e) {
    if (e.target == modalContainer) {
        modalContainer.style.display = "none";
    }
})