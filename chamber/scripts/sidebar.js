document.addEventListener("DOMContentLoaded", function () {
    let lastVisit = localStorage.getItem("lastVisit");
    let currentDate = Date.now();

    // If first visit or last visit not available, show welcome message
    if (!lastVisit) {
        showSidebarMessage("Welcome! Let us know if you have any questions.");
    } else {
        let daysBetween = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysBetween < 1) {
            showSidebarMessage("Back so soon! Awesome!");
        } else {
            let message = daysBetween === 1 ? "day" : "days";
            showSidebarMessage(`You last visited ${daysBetween} ${message} ago.`);
        }
    }

    localStorage.setItem("lastVisit", currentDate);
    lazyLoadImages();
});

function showSidebarMessage(message) {
    let sidebarContent = document.getElementById("sidebar-content");
    let messageElement = document.createElement("p");
    messageElement.textContent = message;
    sidebarContent.appendChild(messageElement);
}

function lazyLoadImages() {
    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        let imgRect = img.getBoundingClientRect();
        if (imgRect.top < window.innerHeight && imgRect.bottom >= 0 && !img.src) {
            img.src = img.dataset.src;
        }
    });
}

function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("open");

    let navigation = document.querySelector(".navigation");
    navigation.classList.toggle("open");
}