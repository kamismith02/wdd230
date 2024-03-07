document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;

    // Check if the timestamp element exists before trying to access it
    var timestampElement = document.getElementById('timestamp');
    if (timestampElement) {
        timestampElement.value = Date.now();
    }
});