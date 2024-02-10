const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌛")) {
        main.classList.add("dark-mode");
        modeButton.textContent = "🔆";
    } else {
        main.classList.remove("dark-mode");
        modeButton.textContent = "🌛";
    }
});
