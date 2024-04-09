document.addEventListener("DOMContentLoaded", function () {
    const rentalContainer = document.getElementById("rental-container");
    let rentalData;

    fetch("data/rentals.json")
        .then(response => response.json())
        .then(data => {
            rentalData = data;
            renderListView();
        })
        .catch(error => console.error("Error fetching member data:", error));

    function renderListView() {
        rentalContainer.innerHTML = "";
        const table = document.createElement("table");
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `
            <th colspan="2"></th>
            <th colspan="2">Reservation</th>
            <th colspan="2">Walk-In</th>
        `;
        table.appendChild(headerRow);

        const secondHeaderRow = document.createElement("tr");
        secondHeaderRow.innerHTML = `
            <th>Rental Type</th>
            <th>Max. Persons</th>
            <th>Half Day (3hrs)</th>
            <th>Full Day</th>
            <th>Half Day (3hrs)</th>
            <th>Full Day</th>
        `;
        table.appendChild(secondHeaderRow);

        rentalData.forEach(rental => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${rental.type}</td>
                <td>${rental.max_persons}</td>
                <td>${rental.half_day_reservation}</td>
                <td>${rental.full_day_reservation}</td>
                <td>${rental.half_day_walk_in}</td>
                <td>${rental.full_day_walk_in}</td>
            `;
            table.appendChild(row);
        });

        rentalContainer.appendChild(table);
        rentalContainer.classList.add("list-view");
    };
});
