const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click",function() {
    if (username.value === "" || password.value === "") {
        message.textContent = "Fill this field";
    }
    else {
        message.textContent = "success!";
    }
});