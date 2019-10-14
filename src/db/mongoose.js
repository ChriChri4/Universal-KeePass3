const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Christian:Blu1234@universalkeepass-rf5p4.mongodb.net/test?retryWrites=true&w=majority',{ //link db MongoDB Atlas
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false // di default è true
}) 