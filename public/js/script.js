(function ($) {
    "use strict";

    $(document).ready(function () {
        $('#nav').onePageNav({
            currentClass: 'current-menu-item',
        });
    });

    var html5lightbox_options = {
        watermarklink: ""
    };

    $(".media__content").each(function () {
        var thesrc = $(this).attr('src');
        $(this).parent().css("background-image", "url(" + thesrc + ")");
        $(this).parent().css("background-repeat", "no-repeat");
        $(this).hide();
    });
    
})(jQuery);

// Field Check

// const fieldCheck = (valueToCheck) => {
//     const valueToValidate = document.getElementById(valueToCheck).value;
//     const valueToValidateInput = document.getElementById(valueToCheck);
//     const warningElement = `${valueToCheck}Warning`;

//     if (valueToValidate.length >= 1) {
//         valueToValidateInput.classList.remove('error-input');
//         document.getElementById(warningElement).classList.add('hidden');
//     } else if (valueToValidate.length < 1) {
//         valueToValidateInput.classList.add('error-input');
//         document.getElementById(warningElement).remove('hidden');
//     }
// }





// FORM VALIDATION

// Email Check

const emailCheck = () => {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const emailAddress = document.getElementById('email').value;
    const emailInput = document.getElementById('email');
    const emailWarning = document.getElementById('emailWarning');

    if (emailAddress.match(mailFormat)) {
        emailInput.classList.remove('error-input');
        emailWarning.classList.add('hidden');
    } else if (!emailAddress.match(mailFormat)) {
        emailInput.classList.add('error-input');
        emailWarning.classList.remove('hidden');
    }

}

const nameCheck = () => {
    const fullName = document.getElementById('fullName').value;
    const fullNameInput = document.getElementById('fullName');
    const fullNameWarning = document.getElementById('fullNameWarning');

    if (fullName.length >= 1) {
        fullNameInput.classList.remove('error-input');
        fullNameWarning.classList.add('hidden');
    } else if (fullName < 1) {
        fullNameInput.classList.add('error-input');
        fullNameWarning.classList.remove('hidden');
    }
}

const passwordCheck = () => {
    const password = document.getElementById('password').value;
    const passwordInput = document.getElementById('password');
    const passwordWarning = document.getElementById('passwordWarning');

    if (password.length >= 1) {
        passwordInput.classList.remove('error-input');
        passwordWarning.classList.add('hidden');
    } else if (password < 1) {
        passwordInput.classList.add('error-input');
        passwordWarning.classList.remove('hidden');
    }
}

const confirmCheck = () => {
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordWarning = document.getElementById('confirmPasswordWarning');

    if (confirmPassword.length >= 1) {
        confirmPasswordInput.classList.remove('error-input');
        confirmPasswordWarning.classList.add('hidden');
    } else if (confirmPassword < 1) {
        confirmPasswordInput.classList.add('error-input');
        confirmPasswordWarning.classList.remove('hidden');
    }
}




const submitCheck = (e) => {
    e.preventDefault();
    emailCheck();
    passwordCheck();
    nameCheck();
    passwordCheck();
    confirmCheck();
}

const submitClick = document.getElementById('submit-btn');

submitClick.addEventListener('click', submitCheck);