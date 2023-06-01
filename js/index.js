// variables -- name nav kodtirodu
const userName = document.querySelector('.userName');
const password = document.querySelector('.password');
const email = document.querySelector('.email');
const cpassword = document.querySelector('.cpassword');

const nameSpan = document.querySelector('.nameSpan');
const passSpan = document.querySelector('.passSpan');
const emailSpan = document.querySelector('.emailSpan');
const cpasswordSpan = document.querySelector('.cpasswordSpan');



// form function calling
// given name passing
const formValidation = (e) => {
    e.preventDefault();
    nameValidation(userName.value);
    passValidation(password.value);
    emailValidation(email.value);
    confirmPasswordValidation(cpassword.value)
}

// inputs
// user validation
//trim()-- space tagad hakoke
function nameValidation(name) {
    if (name.trim() === '') {
        nameSpan.innerHTML = 'name not  be empty';
        nameSpan.style.color = 'red';//error words in red
        userName.style.border = '1px solid red';//border in red
    }
    else if (name.length < 4) {
        nameSpan.innerHTML = 'Sorry, the username must be at least 4 characters';
        nameSpan.style.color = 'red';
        userName.style.border = '1px solid red';
    }
    else if (name.length > 16) {
        nameSpan.innerHTML = 'Sorry, the username must be less than 16 characters';
        nameSpan.style.color = 'red';
        userName.style.border = '1px solid red';
    }
    else if ((/^[^0-9][0-9a-zA-z]+$/g).test(name)) {
        nameSpan.innerHTML = 'UserName is valid';
        nameSpan.style.color = 'green';
        userName.style.border = '1px solid green';
    } else {
        nameSpan.innerHTML = 'Sorry, the username cannot have special characters';
        nameSpan.style.color = 'red';
        userName.style.border = '1px solid red';
    }
}
// password validation
function passValidation(pass) {
    if (pass.trim() === '') {
        passSpan.innerHTML = 'sorry, password not be empty';
        passSpan.style.color = 'red';
        password.style.border = '1px solid red';
    } else if (pass.length < 8) {
        passSpan.innerHTML = 'Sorry, the password must atleast 8 characters';
        passSpan.style.color = 'red';
        password.style.border = '1px solid red';
    } else if ((/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g).test(pass)) {
        passSpan.innerHTML = 'User password is valid';
        passSpan.style.color = 'green';
        password.style.border = '1px solid green';
    }
    else {
        passSpan.innerHTML = 'password should have at least one alphabet, one digit and a special character.';
        passSpan.style.color = 'red';
        password.style.border = '1px solid red';
    }
}

// email validation
function emailValidation(emails) {
    if (emails.trim() === '') {
        emailSpan.innerHTML = 'Sorry, the email ID is Invalid.';
        emailSpan.style.color = 'red';
        email.style.border = '1px solid red';
    }

    else if ((/[\.]\bcom$|^[a-zA-Z0-9\W]+[@]{1}[a-z]+[\.]\bin$|^[a-zA-Z0-9\W]+[@]{1}[a-z]+[\.]\bco.in$/g).test(emails)) {
        console.log('working')
        emailSpan.innerHTML = 'Email ID is Valid.';
        emailSpan.style.color = 'green';
        email.style.border = '1px solid green';
    }
    else {
        emailSpan.innerHTML = 'Sorry, the email ID is Invalid.';
        emailSpan.style.color = 'red';
        email.style.border = '1px solid red';
    }
}

// confirm passwoord validation
function confirmPasswordValidation(cpass) {
    if (cpass.trim() === '') {
        cpasswordSpan.innerHTML = 'sorry, password not be empty';
        cpasswordSpan.style.color = 'red';
        cpassword.style.border = '1px solid red';
    } else if (cpass.length < 8) {
        cpasswordSpan.innerHTML = 'Sorry, the password must atleast 8 characters';
        cpasswordSpan.style.color = 'red';
        cpassword.style.border = '1px solid red';
    } else if ((/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/g).test(cpass)) {

        if (password.value === cpassword.value) {
            cpasswordSpan.innerHTML = 'User password is matched';
            cpasswordSpan.style.color = 'green';
            cpassword.style.border = '1px solid green';
        }
        else {
            cpasswordSpan.innerHTML = 'Sorry, the password do not match';
            cpasswordSpan.style.color = 'red';
            cpassword.style.border = '1px solid red';
        }
    }
    else {
        cpasswordSpan.innerHTML = 'password must contain atleast one alphabet, one digit and a special character.';
        cpasswordSpan.style.color = 'red';
        cpassword.style.border = '1px solid red';
    }
}