// script.js

// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     // Add your login logic here
//     console.log('Login attempted with username: ' + username + ' and password: ' + password);
    document.getElementById('login-toggle-button').addEventListener('click', function() {
        var loginSection = document.getElementById('login-section');
        
        // Toggle visibility
        if (loginSection.style.display === 'none' || loginSection.style.display === '') {
            loginSection.style.display = 'block';
        } else {
            loginSection.style.display = 'none';
        }
    });
    
// });