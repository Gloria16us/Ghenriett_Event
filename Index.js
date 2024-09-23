document.addEventListener("DOMContentLoaded", function() {
    // DOM is fully loaded, you can start interacting with it here
    
    // Example: Form validation
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform login validation here

        // Example: Redirect to dashboard on successful login
        window.location.href = '/dashboard.html';
    });

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform registration validation here

        // Example: Redirect to dashboard on successful registration
        window.location.href = '/dashboard.html';
    });
});

