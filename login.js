document.addEventListener('DOMContentLoaded', () => {
    showLogin();
});

function showRegister() {
    document.getElementById('register-page').classList.add('active');
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('secure-page').classList.remove('active');
}

function showLogin() {
    document.getElementById('register-page').classList.remove('active');
    document.getElementById('login-page').classList.add('active');
    document.getElementById('secure-page').classList.remove('active');
}

function showSecurePage() {
    document.getElementById('register-page').classList.remove('active');
    document.getElementById('login-page').classList.remove('active');
    document.getElementById('secure-page').classList.add('active');
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    if (localStorage.getItem(username)) {
        alert('User already exists');
        return;
    }

    localStorage.setItem(username, password);
    alert('Registration successful');
    showLogin();
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        showSecurePage();
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    showLogin();
}