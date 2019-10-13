const express = require('express')
const fs = require('fs')
const path = require('path')
const hbs = require('hbs')

const app = express()

const port = process.env.PORT || 3000

//Percorsi file view
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join('../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')  //set da delle impostazioni ad Express, hbs è il modulo installato --> in questa riga abbiamo settato handlebars e ora possiamo creare template dinamici
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


//Middleware
app.use(express.static(publicDirectoryPath))


//Responses
app.get('',(req,res) => {
    res.render('login', { //renderizza una mia view, index deve coincidere con il nome della view (in questo caso index.hbs)
        name: "Christian"
    }) 
})

app.listen(port,() => {
    console.log('Server is running on port '+port)
})