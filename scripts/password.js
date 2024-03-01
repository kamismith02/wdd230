const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#confirm-password");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "❗Passwords must match!";
        message.style.visibility = "show";
        kp2.style.backgroundColor = "#fff0f3";
        kp1.value = "";
        kp2.value = "";
        kp1.focus();
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
}