document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const response = await fetch("submit.php", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            formStatus.textContent = "Form submitted successfully!";
            form.reset();
        } else {
            formStatus.textContent = "Error submitting the form.";
        }
    });
});
// frontend-full-ok.txt
// Displaying frontend-full-ok.txt.