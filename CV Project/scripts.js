const form = document.querySelector('form');
const formResponse = document.getElementById('form-response');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
    formResponse.style.display = 'block';
    formResponse.innerHTML = 'Thank you for your message! We will get back to you soon.';
    } else {
    formResponse.style.display = 'block';
    formResponse.innerHTML = 'Please fill out all fields.';
    }
});