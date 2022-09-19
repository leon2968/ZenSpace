const loginForm = document.getElementById("loginForm");
const reg = /^[a-zA-Z0-9_.-]+@[a-z]+\.[a-z]{3}$/i;

//define user class
class User {
    constructor(email,pass){
        this.email = email;
        this.pass = pass;
    }
}

let user1 = new User("user1@zenspace.com", "zenspace");
let user2 = new User("admin@zenspace.com", "admin");
let user3 = new User("trialuser@zenspace.com", "trial");

//create a list of users;
const userList = [user1,user2,user3];

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector(".error");
  
//     errorDisplay.innerText = message;
//     inputControl.classList.add("error");
//     inputControl.classList.remove("success");
// };
  
// const setSuccess = (element) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector(".error");
  
//     errorDisplay.innerText = "";
//     inputControl.classList.add("success");
//     inputControl.classList.remove("error");
// };

loginForm.addEventListener("submit", (e) => {
    validateLogin(e);
  });

function validateRegistration() {  
    let setEmail = document.getElementById("setEmail");
    let setPass = document.getElementById("setPass");
    let confirmPass = document.getElementById("confirmPass");
    if (!reg.test(setEmail.value)){
        alert("Invalid email format!");
        return;
    }
    if (setPass.value.trim() !== confirmPass.value.trim()) {
        alert("Passwords does not match!");
        return;
    }
    alert("Registration is awaiting approval...");
}

function validateLogin(e) {
    let inputEmail= document.getElementById("inputEmail");
    let inputPass = document.getElementById("inputPass");
    //for loop to check if input email&password matches any user
    for(let index in userList) {
        if (inputEmail.value == userList[index].email && inputPass.value == userList[index].pass) {
            e.preventDefault();
            window.location.href = "/home.html"; 
            return;
        }
    }
    alert("Wrong Credentials! Please try again."); 
}

