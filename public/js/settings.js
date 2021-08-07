const token = localStorage.getItem("token")

$("#confirm").click(function() {
    const newPSSW = document.getElementById('newPSSW').value
    const repPSSW = document.getElementById('repPSSW').value
    const dati = {
        password: newPSSW,
    }

    if( repPSSW==newPSSW)
    {
        $.ajax({
            headers: {
                'Authorization':'Bearer ' + token
            },
            url: '/users/me',
            type:'PATCH',
            dataType: 'json',
            contentType:'application/json',
            data: JSON.stringify(dati),
            success: function(result){
                alert('Password changed')
                console.log(result)
            },
            error: function(error){
                console.log(error)
            }
        })
    } else {
        alert('The passwords do not match')
    }   
})

$("#logout").click(function() {

    $.ajax({
        headers: {
            'Authorization':'Bearer ' + token
        },
        url: '/users/logoutAll',
        type:'POST',
        success: function(result){
            alert('Logout executed')
            window.location.href = '/'
        },
        error: function(error){
            console.log(error)
        }
    })
})

$("#delete").click(function() {

    $.ajax({
        headers: {
            'Authorization':'Bearer ' + token
        },
        url: '/users/me',
        type:'DELETE',
        success: function(result){
            alert('Account deleted')
            window.location.href = '/'
        },
        error: function(error){
            console.log(error)
        }
    })
})