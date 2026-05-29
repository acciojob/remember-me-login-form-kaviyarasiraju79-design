//your JS code here. If required.
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check saved credentials on page load
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
}

// Form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert(`Logged in as ${username.value}`);

    if (checkbox.checked) {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);

        existingBtn.style.display = "inline-block";
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");

        existingBtn.style.display = "none";
    }
});

// Existing user login
existingBtn.addEventListener("click", function () {
    const user = localStorage.getItem("username");

    if (user) {
        alert(`Logged in as ${user}`);
    }
});
