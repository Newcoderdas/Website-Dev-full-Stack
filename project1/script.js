function PasswwordValidate(password) {
    const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return passwordregex.test(password);
}
const password = "Pasword123#$";
if (PasswwordValidate(password)) {
    console.log("password is validate");
} else {
    console.log("password is not validate");
}