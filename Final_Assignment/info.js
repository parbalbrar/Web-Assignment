document.addEventListener('submit', (e) => {
    e.preventDefault();
    let fname = document.getElementById('firstname').value;
    let lname = document.getElementById('lastname').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;
    if(!username.match(/^[a-zA-Z]+$/) && username.length < 6) {
        alert("username invalid");
    }
    if(!password.match(/^[a-zA-Z]+$/)) {
        alert("password invalid");
    }
    if(!fname.match(/^[A-Z][a-zA-Z]+$/)) {
        alert("fname invalid");
    }
    if(!lname.match(/^[A-Z][a-zA-Z]+$/)) {
        alert("lname invalid");
    }
    let age = document.getElementById('age').value;
    if(!(age => 18 && age <= 60)) {
        alert("age invalid");
     }
    // let grad = document.getElementById('graduate').checked;
    // console.log(grad);

    var url = "https://httpbin.org/post";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    let data = {
        "user_fname": fname,
        "user_lname": lname,
        "user_password": password,
        "user_name": username,
        "age": document.getElementById('age'),
        "mail": document.getElementById("mail")
    }
    xhr.send(data);
});