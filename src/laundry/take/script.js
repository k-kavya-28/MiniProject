function validateUsername() {
    var username = document.getElementById('username').value;

    // You may replace this condition with your actual validation logic
    if (username && username.length > 0) {
        // Redirect to the page displaying pending receipts
        window.location.href = 'index2.html';
    } else {
        alert('Please enter a valid username.');
    }
}
