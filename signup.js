document.getElementById('createAccountForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка существующего аккаунта
    const existingEmail = localStorage.getItem('email');
    if (existingEmail === email) {
        alert('An account with this email already exists. Please use a different email.');
        return; // Прекратить выполнение функции, если email уже существует
    }

    // Если все поля заполнены, сохраняем новый аккаунт
    if (firstName && lastName && email && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert('Account created successfully!');
    } else {
        alert('Please fill in all fields');
    }
});
