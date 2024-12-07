let old_user = localStorage.getItem("user");
let user = old_user ? JSON.parse(old_user) : [];

function signup() {
    let username_inp = document.getElementById("username").value;
    let password_inp = document.getElementById("password").value;

    let find_user = user.find(new_user => new_user.username === username_inp);

   if (find_user){
    alert("User already exist");
   }
    else if (username_inp && password_inp) {
        let new_user = {username : username_inp, password : password_inp};
        user.push(new_user);
        localStorage.setItem("user", JSON.stringify(user));
        alert("Signup Successfully Completed ... Please Login to Proced.");
        window.location.href = "./index.html"
    }
    else {
        alert("Fill out all fields");
    }
}