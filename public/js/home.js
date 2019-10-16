$(document).ready(function() {

    $("#loginPage").click(function() {
            $.ajax({
                async:false,
                url: '/login',
                type:'GET',
                success: function(result){
                    window.location.href = '/login'
                },
                error: function(error){
                    console.log('ERRORE: '+error)
                },
            })
    })
})