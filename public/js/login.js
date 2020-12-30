// SIGN_UP FORM VALIDATION 

// Email Check

const loginEmailCheck = () => {
    const loginMailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const loginEmailAddress = document.getElementById('login-email').value;
    const loginEmailInput = document.getElementById('login-email');
    const loginEmailWarning = document.getElementById('login-emailWarning');

    if (loginEmailAddress.match(loginMailFormat)) {
        loginEmailInput.classList.remove('error-input');
        loginEmailWarning.classList.add('hidden');
    } else if (!loginEmailAddress.match(loginMailFormat)) {
        loginEmailInput.classList.add('error-input');
        loginEmailWarning.classList.remove('hidden');
    }

}

const loginPasswordCheck = () => {
    const loginPassword = document.getElementById('login-password').value;
    const loginPasswordInput = document.getElementById('login-password');
    const loginPasswordWarning = document.getElementById('login-passwordWarning');

    if (loginPassword.length >= 1) {
        loginPasswordInput.classList.remove('error-input');
        loginPasswordWarning.classList.add('hidden');
    } else if (loginPassword < 1) {
        loginPasswordInput.classList.add('error-input');
        loginPasswordWarning.classList.remove('hidden');
    }
}


const loginCheck = (e) => {
    loginEmailCheck();
    loginPasswordCheck();
    console.log('effective')
};

const loginClick = document.getElementById('login-btn');

loginClick.addEventListener('click', loginCheck)