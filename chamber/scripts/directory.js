document.addEventListener("DOMContentLoaded", function () {
    const gridViewButton = document.getElementById("grid-view");
    const listViewButton = document.getElementById("list-view");
    const membersContainer = document.getElementById("members-container");
    let membersData;

    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            membersData = data;
            renderGridView();
        })
        .catch(error => console.error("Error fetching member data:", error));

    gridViewButton.addEventListener("click", function () {
        renderGridView();
    });

    listViewButton.addEventListener("click", function () {
        renderListView();
    });

    // Function to render member cards in grid view
    function renderGridView() {
        membersContainer.innerHTML = "";
        membersData.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");
            card.innerHTML = `
                <div class="company-image-container">
                    <img src="images/${member.image}" alt="${member.name}" class="company-image">
                </div>
                <div class="member-info">
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
        membersContainer.innerHTML = "";
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Membership Level</th>
        `;
        table.appendChild(headerRow);

        membersData.forEach(member => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${member.name}</td>
                <td>${member.address}</td>
                <td>${member.phone}</td>
                <td><a href="${member.website}">Website</a></td>
                <td>${member.membershipLevel}</td>
            `;
            table.appendChild(row);
        });

        membersContainer.appendChild(table);
        membersContainer.classList.add("list-view");
    }
});
