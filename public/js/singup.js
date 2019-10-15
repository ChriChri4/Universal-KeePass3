 $(document).ready(function() {

    $("button").click(function() {
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const pssw = document.getElementById('password').value
        const psswConf = document.getElementById('confirmPassword').value

        if(pssw == psswConf) {
        
            const data = {name: name,
            email: email,
            password:pssw}

                $.ajax({
                    url: '/users',
                    type:'POST',
                    dataType: 'json',
                    contentType:'application/json',
                    data: JSON.stringify(data),
                    success: function(result){
                        console.log(result)
                    },
                    error: function(error){
                        console.log('ERRORE: '+error)
                        debugger
                    }
                })
            } else {
                alert('Passwords do not match')
            }
        })
    })

// singUpForm.addEventListener('submit', (e) => {

//     // jquery ajax, listener, session store per chiave simmettrica
//     // chiave simmetrica
//     // var xmlhttp = new XMLHttpRequest();   
//     // var theUrl = "/users";
//     // xmlhttp.open("POST", theUrl);
//     // xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     // xmlhttp.send(JSON.stringify({ "email": email.value , "password": pssw.value, "password confirmed" : psswConf.value }));

//     console.log(pssw.value)
// })