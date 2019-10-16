$(document).ready(function() {

    $("#btn").click(function() {
        const mail = document.getElementById('email').value
        const pssw = document.getElementById('password').value


            var dati = {name: name,
            email: mail,
            password:pssw}

                $.ajax({
                    async:false,
                    url: '/users/login',
                    type:'POST',
                    dataType: 'json',
                    contentType:'application/json',
                    data: JSON.stringify(dati),
                    success: function(result){
                        console.log(result)
                        window.onload = function() {
                            var token = prompt(result.token)
                            localStorage.setItem("token",token)
                        }
                        localStorage.setItem("token",result.token)
                        alert('Login Executed, token is: '+ result.token)
                        window.location.href = '/index?'
                    },
                    error: function(error){
                        alert('User o Password is not correct')
                        console.log('ERRORE: '+error)
                    }
                })
        })
    })