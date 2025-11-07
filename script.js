 //Project Toggle Button
const buttons = document.querySelectorAll('.toggle-btn');

//Button loop with click event
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        //Assign the variable to the next element in html, which is <div class="details">
        const details = button.nextElementSibling;
        //Toggle function combine with CSS manipulation to display or hide details, by changing the class
        details.classList.toggle('show');
        //Change button text to the reverse command
        if (details.classList.contains('show')) {
          button.textContent = 'Hide Details';
        } else {
          button.textContent = 'Show Details';
        }
    });
});

//Contact Form Validation
const form = document.getElementById('contact-form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject')
const textBoxInput = document.getElementById('exampleFormControlTextarea1')
	
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError')
const textBoxError = document.getElementById('textBoxError')

const successMessage = document.getElementById('successMessage');


form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Clear any previous error messages
    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    textBoxError.textContent = '';
    successMessage.textContent = ''; // Clear previous success message

    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please enter your name';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email';
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }

    if (subjectInput.value === 'Choose your subject:'){
        subjectError.textContent = 'Please choose a subject';
        isValid = false;
    }

    if (textBoxInput.value.trim().length>500){
        textBoxError.textContent = 'Message exceeded maxium limit.';
        isValid = false; 
    }

    // If all inputs are valid, show success message
    if (isValid) {
        successMessage.textContent = 'Form submitted successfully!';
    }
});

function validateEmail(email) {
	const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(String(email));
}