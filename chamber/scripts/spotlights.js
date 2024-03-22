document.addEventListener("DOMContentLoaded", function () {
    const spotlightsContainer = document.getElementById("spotlights-container");

    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            // Filter members with silver or gold membership level
            const silverGoldMembers = data.filter(member => member.membershipLevel === "Silver" || member.membershipLevel === "Gold");

            // If there are enough silver or gold members
            if (silverGoldMembers.length >= 3) {
                const randomMembers = getRandomMembers(silverGoldMembers, 3);
                randomMembers.forEach(member => {
                    const spotlight = createSpotlight(member);
                    spotlightsContainer.appendChild(spotlight);
                });
            } else {
                // Handle case when there are not enough silver or gold members
                console.error("Not enough silver or gold members to display in spotlights.");
            }
        })
        .catch(error => console.error("Error fetching member data:", error));

    // Function to select random members from the data
    function getRandomMembers(data, count) {
        const shuffled = data.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    // create HTML elements for spotlight members
    function createSpotlight(member) {
        const spotlight = document.createElement("div");
        spotlight.classList.add("spotlight");
        spotlight.innerHTML = `
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
        return spotlight;
    }
});