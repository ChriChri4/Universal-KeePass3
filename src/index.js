const express = require('express')
const path = require('path')
const hbs = require('hbs')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
require('./db/mongoose')

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
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


//Responses
app.get('',(req,res) => {
    res.render('login', { //renderizza una mia view, index deve coincidere con il nome della view (in questo caso index.hbs)
        name: "Christian"
    }) 
})

app.get('/singup',(req,res) => {
    res.render('singup',{
        name:'Christian'
    })
})

app.get('/lostpssw',(req,res) => {
    res.render('lostpssw',{
        name:'Christian'
    })
})

app.get('/index',(req,res) => {
    res.render('index',{
        name:'Christian'
    })
})

/*app.post('/singup',(req,res) => {
    console.log('ricevuto post')
})*/


app.listen(port,() => {
    console.log('Server is running on port '+port)
})