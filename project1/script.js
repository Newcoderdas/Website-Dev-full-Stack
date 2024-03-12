const UserName = document.getElementById('username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const ConfirmPassword = document.getElementById('ConfirmPassword');
const btn = document.getElementById('btn');

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(UserName.value);
    console.log(Email.value);
    console.log(Password.value);
    console.log(ConfirmPassword.value);
    validation();
});

function validation() {
    if (!UserName.value) {
        console.log('null value');

    }
}