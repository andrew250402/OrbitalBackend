const submitBtn = document.querySelector('.btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission

    const emailInput = document.getElementById('email');
    const passwordInput = document.querySelector('.password');

    const email = emailInput.value;
    const password = passwordInput.value;

    const formData = {
      email: email,
      password: password
    };

    fetch('/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Convert the form data object to JSON
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.result.length != 0) {
                window.location.href = data.redirect;
            } else {
                alertBox();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    });

const alertBox = () => {
    const alertContainer = document.querySelector('.alertbox');
    alertContainer.style.top = `5%`;
    setTimeout(() => {
        alertContainer.style.top = null;
    }, 5000);
}