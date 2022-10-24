// - View the optimal layout for the site depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Submit their email address using an `input` field

// - Receive an error message when the `form` is submitted if:
// 	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
// 	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). 
//The message for this error should say *"Please provide a valid email address"*

let alertBtn = document.getElementById('testAlert');

let input = document.querySelector('#input');
let renderParent = document.querySelector('.renderErrorMessage');
let errorChildOne = document.createElement('div');

function checkInputLength() {
    if (input.value.length == 0) {
        renderParent.appendChild(errorChildOne);
        errorMessageContent();
        styleErrorMessage();
        return;
    } 
        checkRegex();
}

function checkIfCorrectEmail(param) {
    if (param == true) 
            {alert('wuhey')
            clearInput();
            clearErrorMessageContent();
            return;
    }  
            renderParent.appendChild(errorChildOne);
            errorMessageContent();
            styleErrorMessage();
            clearInput();
}

function checkRegex() {
    const re =
  new RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    let reTested = re.test(input.value);
    console.log(reTested);
    checkIfCorrectEmail(reTested);
}

const styleErrorMessage = () => errorChildOne.style = 'text-align: center; color: red;'

const clearInput = () => input.value = '';

const clearErrorMessageContent = () => errorChildOne.textContent = '';

function errorMessageContent() { 
    if (input.value.length == 0)
        errorChildOne.textContent = 'Whoops! It looks like you forgot to add your email';
    else {
        errorChildOne.textContent = 'Please provide a valid email address';
    }
}