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
                    dati += `<tr><td>${risultato.description}</td><td>${risultato.key}</td><td><input type="button" id="${i}service" value="Delete this Service" onclick="deleteRow(this)"></td></tr>`
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
            alert(error)
        }
    })
}
    updateTable()

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

        const dati = {
            description: service,
            key:pssw
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