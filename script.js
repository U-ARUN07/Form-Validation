const form = document.getElementById('myForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    errorMessages.innerHTML = '';

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (fullName.length < 5) {
        displayError('Full Name must be at least 5 characters long.');
    }

    if (email.indexOf('@') === -1) {
        displayError('Email must contain "@" character.');
    }

    if (phone.length !== 10 || phone === '1234567890' || isNaN(phone)) {
        displayError('Phone Number must be a 10-digit number and should not be 1234567890.');
    }

    if (password.length < 8 || password === 'password' || password === fullName) {
        displayError('Password must be at least 8 characters long and should not be "password" or the same as Full Name.');
    }

    if (password !== confirmPassword) {
        displayError('Passwords do not match.');
    }

    if (errorMessages.innerHTML === '') {
        form.submit();
    }
});

function displayError(message) {
    const error = document.createElement('div');
    error.className = 'alert alert-danger';
    error.textContent = message;
    errorMessages.appendChild(error);
}