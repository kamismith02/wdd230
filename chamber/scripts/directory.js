document.addEventListener("DOMContentLoaded", function () {
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");
    const membersContainer = document.getElementById("members-container");
    let membersData;

    // Fetch member data from JSON file
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            membersData = data;
            // Initially render grid view
            renderGridView();
        })
        .catch(error => console.error("Error fetching member data:", error));

    // Event listener for grid view button
    gridViewButton.addEventListener("click", function () {
        renderGridView();
    });

    // Event listener for list view button
    listViewButton.addEventListener("click", function () {
        renderListView();
    });

    // Function to render member cards in grid view
    function renderGridView() {
        membersContainer.innerHTML = ""; // Clear previous content
        membersData.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" class="company-image">
                <div>
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}">Website</a>
                    <p>Membership Level: ${member.membershipLevel}</p>
                    <!-- Add other member information here -->
                </div>
            `;
            membersContainer.appendChild(card);
        });
        membersContainer.classList.remove("list-view");
    }

    // Function to render member list items in list view
    function renderListView() {
        membersContainer.innerHTML = ""; // Clear previous content
        const list = document.createElement("ul");
        membersData.forEach(member => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}">Website</a>
                <p>Membership Level: ${member.membershipLevel}</p>
                <!-- Add other member information here -->
            `;
            list.appendChild(listItem);
        });
        membersContainer.appendChild(list);
        membersContainer.classList.add("list-view");
    }
});
