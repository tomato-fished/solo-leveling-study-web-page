document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example: Check if the user exists in localStorage (simulate a simple login mechanism)
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        // If credentials match, show custom success message
        const successMessage = document.getElementById('loginSuccess');
        successMessage.style.display = 'block'; // Show the success message

        // Redirect to lessons.html after 2 seconds
        setTimeout(function () {
            window.location.href = 'lessons.html';  // Redirect to the lessons page after 2 seconds
        }, 2000);  // 2000 milliseconds = 2 seconds
    } else {
        // If credentials don't match, show an error
        alert('Invalid email or password. Please try again.');
    }
});
