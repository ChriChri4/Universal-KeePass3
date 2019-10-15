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
                    }
                })
            } else {
                alert('Passwords do not match')
            }
            alert('Account Created!')
            window.location.replace(window.location.origin)
        })
    })
    