//your JS code here. If required.
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

// Function to check localStorage and toggle visibility
function checkUser() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existing.style.display = "block";
    } else {
        existing.style.display = "none";
    }
}

// Run on page load
checkUser();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Alert current username
    alert(`Logged in as ${username.value}`);

    // Save or remove credentials
    if (checkbox.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    // Update button visibility
    checkUser();
});

// Handle "Login as Existing User" button
existing.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});