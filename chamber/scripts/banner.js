const today = new Date().getDay();
if (today >= 1 && today <= 3) {
    document.getElementById('banner').style.display = 'flex';
}

function closeBanner() {
    document.getElementById('banner').style.display = 'none';
}