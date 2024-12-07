let old_user = localStorage.getItem("user");
let user = old_user ? JSON.parse(old_user) : [];

function login() {
    let username_inp = document.getElementById("username").value;
    let password_inp = document.getElementById("password").value;

    let find_user = user.find(user => user.username === username_inp && user.password === password_inp)

    if (find_user) {
        window.location.href = "home.html"
    }
    else {
        alert("Check your username and password or Signup")
    }
}