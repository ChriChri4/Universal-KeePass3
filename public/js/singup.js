 $(document).ready(function() {

    $("#btn").click(function() {
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const pssw = document.getElementById('password').value
        const psswConf = document.getElementById('confirmPassword').value

        if(pssw == psswConf) {
            var dati = {name: name,
            email: email,
            password:pssw}

                $.ajax({
                    url: '/users',
                    type:'POST',
                    dataType: 'json',
                    contentType:'application/json',
                    data: JSON.stringify(dati),
                    success: function(result){
                        console.log(result)
                        alert('Account Created! You will return on Login Page')
                        window.location.href = '/login'
                    },
                    error: function(error){
                        console.log('ERRORE: '+error)
                    }
                })
            } else {
                alert('Passwords do not match')
            }
        })
    })
    