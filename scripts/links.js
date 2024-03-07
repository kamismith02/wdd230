const baseURL = "https://kamismith02.github.io/wdd230/";
const linksURL = "https://kamismith02.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.lessons);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(lessons) {
    const listContainer = document.querySelector('.learning-activities ul');

    lessons.forEach(lesson => {
        const lessonNumber = lesson.lesson.padStart(2, '0');
        const lessonLinks = lesson.links.map(link => `<a href="${link.url}">${link.title}</a>`).join(' | ');
        const listItem = document.createElement('li');
        listItem.innerHTML = `Week ${lessonNumber}: ${lessonLinks}`;
        listContainer.appendChild(listItem);
    });
}


getLinks();
