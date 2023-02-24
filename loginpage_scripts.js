function login() {
    // Get the values of the username and password fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the fields aren't empty
    if (username === "" && password === "") {
        alert("Please enter both a username and password.");
    } else {
        alert("Thank you");
    }
}

const passwordInput = document.getElementById('password');
const revealButton = document.querySelector('.reveal-button');

revealButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        revealButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        revealButton.textContent = 'Show';
    }
});