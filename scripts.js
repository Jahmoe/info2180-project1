/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const messageDiv = document.querySelector('.message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const enteredEmail = emailInput.value.trim();

        if (enteredEmail === '') {
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            messageDiv.textContent = `Thank you! Your email address ${enteredEmail} has been added to our mailing list!`;
        }
    });
});
