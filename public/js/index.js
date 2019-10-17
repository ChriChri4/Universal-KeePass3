const token = localStorage.getItem("token")

function updateTable() {
    $.ajax({
        async:false,
        headers: {
            'Authorization':'Bearer ' + token
        },
        url: '/tasks',
        type:'GET',
        success: function(result){
            console.log(result)
            
            function loadTableData(result) {
                const tableBody = document.getElementById('data')
                let dati =''
                const titoli = `<tr><th>${'Service'}</th><th>${'Key'}</th><th>${'Options'}</th></tr>`
                let i = 0
                for (let risultato of result) {
                    dati += `<tr><td>${risultato.description}</td><td id="${i} key" class="${i} keys" style="visibility:hidden">${risultato.key}</td><td>${risultato.email}<td><td><input type="button" id="${i}service" value="Delete this Service" onclick="deleteRow(this)"><input type="button" id="${i}service" value="Show" onclick="showPSSW(this)"></td></tr>`
                    i++
                }

                console.log(dati)
                if(dati != '') {
                    tableBody.innerHTML = titoli + dati
                } else {
                    tableBody.innerHTML = `<tr><td> No Data to display </td></tr>`
                }
            }

            loadTableData(result)               
        },
        error: function(error){
            console.log('ERRORE: '+error)
            alert('Error: login not executed')
            window.location.href = '/'
        }
    })
}
    updateTable()

    function showPSSW(i) {
        var r = i.parentNode.parentNode.rowIndex;
        if(document.getElementById("data").rows[r].cells[1].style.visibility=="visible")
        {
            document.getElementById("data").rows[r].cells[1].style.visibility="hidden";
        } else {
            document.getElementById("data").rows[r].cells[1].style.visibility="visible";
        }
        
    }

    function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        const service = document.getElementById("data").rows[i].cells[0].innerHTML

        document.getElementById("data").deleteRow(i);
        
        $.ajax({
            async:false,
            headers: {
                'Authorization':'Bearer ' + token
            },
            url: '/tasks',
            type:'GET',
            indexValue: service,
            success: function(result){
                var idService = ''
                for(var j = 0;j<=result.length;j++)
                {
                    if(result[j].description === this.indexValue)
                    {
                        idService = result[j]._id
                        
                        $.ajax({
                            async:false,
                            headers: {
                                'Authorization':'Bearer ' + token
                            },
                            url: '/tasks/'+idService,
                            type:'DELETE',
                            success: function(result){
                                console.log('ok')
                            },
                            error:function(error){
                                console.log(error)
                                console.log(this.url)
                            }
                        })
                    }
                }
                
            },
            error: function(error){
                console.log(error)
            }
        })
    }

    

    
    $("#dt").click(function() {

        const service = document.getElementById('service').value
        const pssw = document.getElementById('password').value
        const mail = document.getElementById('email').value

        const dati = {
            description: service,
            key:pssw,
            email:mail
        }

        $.ajax({
            headers: {
                'Authorization':'Bearer ' + token
            },
            url: '/tasks',
            type:'POST',
            dataType: 'json',
            contentType:'application/json',
            data: JSON.stringify(dati),
            success: function(result){
                console.log(result)
                updateTable()
            },
            error: function(error){
                console.log(error)
            }
        })
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

    $("#settings").click(function() {
        $.ajax({
            headers: {
                'Authorization':'Bearer ' + token
            },
            url: '/settings',
            type:'GET',
            success: function(result){
                console.log(result)
            },
            error: function(error){
                console.log(error)
            }
        })
    })

    $("#index").click(function() {
        $.ajax({
            headers: {
                'Authorization':'Bearer ' + token
            },
            url: '/index',
            type:'GET',
            success: function(result){
                console.log(result)
            },
            error: function(error){
                console.log(error)
            }
        })
    })

    $('#random').click(function() {
        function generatePSSW(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*-?^=)(/&%$£"!\/';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            document.getElementById('password').value = result
         }
        generatePSSW(document.getElementById('lengthPSSW').value)
    })
