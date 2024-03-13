const today = new Date().getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
if (today >= 1 && today <= 3) { // Monday (1), Tuesday (2), Wednesday (3)
    document.getElementById('banner').style.display = 'block';
}

// Function to close the banner
function closeBanner() {
    document.getElementById('banner').style.display = 'none';
}