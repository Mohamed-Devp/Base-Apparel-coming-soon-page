const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');
const emailForm = document.querySelector('.email-form input');
const submitButton = document.querySelector('.submit');

function isValid(email) {
    const info = email.split('@');
    if (info.length != 2) { // check if the email contain a username and a domain name
        return false;
    }
    
    const [username, domainName] = info;
    if (!username || !domainName || !domainName.includes('.')) {
        return false;
    }

    return true;
}

function showError() {
    if (errorIcon instanceof HTMLElement && errorMessage instanceof HTMLElement) {
        errorIcon.style.visibility = 'visible';
        errorMessage.style.visibility = 'visible';
    }
}

function hideError() {
    if (errorIcon instanceof HTMLElement && errorMessage instanceof HTMLElement) {
        errorIcon.style.visibility = 'hidden';
        errorMessage.style.visibility = 'hidden';
    }
}

function onMount() {
    if (submitButton instanceof HTMLElement && emailForm instanceof HTMLInputElement) {
        submitButton.addEventListener('click', () => {
            const insertedEmail = emailForm.value;
            if (!insertedEmail.trim()) {
                return;
            }

            if (!isValid(insertedEmail)) {
                showError();
                emailForm.focus();
                
            } else {
                hideError();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', onMount);