const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide a name'],
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, 'please provide an email'],
        maxLength: 50
    },
    password: {
        type: String,
        required: [true, 'please provide a password'],
        maxLength: 50,
        minLength: [5,'please enter at least 5 characters']
    },
    image: {
        type:String
    },
})


module.exports = mongoose.model('user', productSchema);