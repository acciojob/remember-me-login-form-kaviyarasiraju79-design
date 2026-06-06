//your JS code here. If required.
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existing = document.getElementById("existing");

function checkUser() {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existing.style.display = "block";
  } else {
    existing.style.display = "none";
  }
}

checkUser();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  alert(`Logged in as ${username.value}`);

  if (checkbox.checked) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkUser();
});

existing.addEventListener("click", function () {
  const savedUsername = localStorage.getItem("username");
  alert(`Logged in as ${savedUsername}`);
});