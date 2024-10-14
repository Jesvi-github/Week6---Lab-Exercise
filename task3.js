function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.length < 5) {
        alert("Username must be at least 5 characters long.");
        return false; 
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false; 
    }

    return true; // Allow form submission
}
