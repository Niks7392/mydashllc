const mongoose = require('mongoose')



const user = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique : true },
    password: { type: String, required: true },
    contact: { type: Number, required: true },
},
    { collection: 'user-data' }
)

const model = mongoose.model('userData', user)

module.exports = model;