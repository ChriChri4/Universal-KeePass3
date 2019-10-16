const token = localStorage.getItem("token")

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
                    const titoli = `<tr><th>${'Service'}</th><th>${'Key'}</th></tr>`

                    for (let risultato of result) {
                        dati += `<tr><td>${risultato.description}</td><td>${risultato.key}</td></tr>`
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

