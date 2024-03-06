//elements retrieve karwa rhy
const form = document.getElementById('form');
const UserName = document.getElementById('username');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const ConfirmPassword = document.getElementById('ConfirmPassword');

form.addEventListener('submit', function(e) {
    //stoping page from refresh
    e.preventDefault();
    console.log('SUBMITTED');


});