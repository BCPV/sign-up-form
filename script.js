const misMatch = document.querySelector("#mismatch");
const password = document.querySelector("#password");
const conPassword = document.querySelector("#con-password");

password.addEventListener("focusout", () => {
    if(password.value != conPassword.value) {
        misMatch.textContent = '*Passwords do not match';
    } else {
        misMatch.textContent = '';
    }
})

conPassword.addEventListener("focusout", () => {
    if(password.value != conPassword.value) {
        misMatch.textContent = '*Passwords do not match';
    } else {
        misMatch.textContent = '';
    }
})