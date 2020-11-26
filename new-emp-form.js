loginForm = document.querySelector("#login-form");
let empDetails = [];

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    userName = document.querySelector("#user-name");
    password = document.querySelector("#password");
    let employee = {
        "userName": userName.value,
        "password": password.value
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.resposeText);
    }
    xhttp.open("GET", "https://github.com/aruljyoti/login-page/blob/main/emp.json", true);
    xhttp.send();
    empDetails.push(employee);
    console.log(xhttp);
    console.log(JSON.stringify(empDetails));

});