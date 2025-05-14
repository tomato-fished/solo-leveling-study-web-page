// Get the modal, button, and close button elements
const logOutBtn = document.getElementById('logOutBtn');
const logOutModal = document.getElementById('logOutModal');
const confirmLogOut = document.getElementById('confirmLogOut');
const cancelLogOut = document.getElementById('cancelLogOut');

// Show the modal when the Log Out button is clicked
logOutBtn.addEventListener('click', function () {
    logOutModal.style.display = 'flex';
});

// Hide the modal if the Cancel button is clicked
cancelLogOut.addEventListener('click', function () {
    logOutModal.style.display = 'none';
});

// Log out the user and redirect if confirmed
confirmLogOut.addEventListener('click', function () {
    // Clear localStorage or perform any logout-related tasks
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    // Close the modal and redirect to home page
    logOutModal.style.display = 'none';
    window.location.href = 'index.html'; // Redirect to home page after logout
});
