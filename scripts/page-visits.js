let pageVisits = localStorage.getItem('pageVisits');

if (!pageVisits) {
    pageVisits = 0;
} else {
    pageVisits = parseInt(pageVisits);
}

pageVisits++;

localStorage.setItem('pageVisits', pageVisits);

document.getElementById('pageVisitsCounter').textContent = pageVisits;