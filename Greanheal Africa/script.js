// Function to toggle the form visibility
function toggleForm() {
    const form = document.getElementById("patientForm");
    const button = document.getElementById("toggleFormButton");

    if (form.classList.contains("hidden")) {
        form.classList.remove("hidden");
        button.innerText = "Close Patient Data Form"; // button text
    } else {
        form.classList.add("hidden");
        button.innerText = "Open Patient Data Form"; // button text back
    }
}

// Patient Form Handling
document.getElementById('patientDataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Capture patient data
    const patientName = document.getElementById('name').value;
    const patientEmail = document.getElementById('email').value;
    const patientPhone = document.getElementById('phone').value;
    const patientMessage = document.getElementById('message').value;

    // Data validation
    if (!patientName || !patientEmail || !patientPhone || !patientMessage) {
        alert("Please fill out all required fields.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(patientEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Store patient data in an object
    const patientData = {
        name: patientName,
        email: patientEmail,
        phone: patientPhone,
        message: patientMessage
    };

    // Display patient data summary
    displayPatientSummary(patientData);

    // Show success message
    const successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 5000); // Hide after 5 seconds
});

function displayPatientSummary(data) {
    const summaryDiv = document.getElementById('formSummary');
    summaryDiv.innerHTML = `
        <h2>Patient Data Summary</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong> ${data.message}</p>
    `;

    // Set a timeout to hide the summary after 30 seconds
    setTimeout(() => {
        summaryDiv.innerHTML = ''; // Clear the summary
    }, 30000); // 30000 milliseconds = 30 seconds
}
