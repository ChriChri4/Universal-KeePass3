const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    key:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task