const singUpForm = document.querySelector('form')
const email = document.getElementsByName('email').value
const pssw = document.getElementsByName('password').value
const psswConf = document.getElementsByName('confirmPassword').value



singUpForm.addEventListener('submit', (e) => {

    // jquery ajax, listener, session store per chiave simmettrica
    // chiave simmetrica
    // var xmlhttp = new XMLHttpRequest();   
    // var theUrl = "/users";
    // xmlhttp.open("POST", theUrl);
    // xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // xmlhttp.send(JSON.stringify({ "email": email.value , "password": pssw.value, "password confirmed" : psswConf.value }));

    console.log(pssw.value)
})