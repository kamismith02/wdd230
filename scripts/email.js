document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleSubmit(event) {
        // Prevent default form submission
        event.preventDefault();

        // Access form elements
        let form = event.target;
        let formData = new FormData(form);

        // Custom validation for email domain
        let email = formData.get("email");
        if (!isValidByuiEmail(email)) {
            alert("Please enter a valid BYUI email address.");
            return;
        }

        // Display form element values
        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }

        // Redirect to "record.html" after processing form data
        window.location.href = "record.html";
    }

    // Custom validation function for BYUI email domain
    function isValidByuiEmail(email) {
        return email.endsWith("@byui.edu");
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
});