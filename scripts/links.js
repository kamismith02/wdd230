const baseURL = "https://kamismith02.github.io/wdd230/";
const linksURL = "https://kamismith02.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const listContainer = document.querySelector('.learning-activities ul');

    weeks.forEach(week => {
        const listItem = document.createElement('li');
        const lessonNumber = week.lesson.padStart(2, '0');
        listItem.innerHTML = `<a href="${baseURL}${week.links[0].url}">${lessonNumber}: ${week.links[0].title}</a>`;
        listContainer.appendChild(listItem);
    });
}

getLinks();
