const mongoose = require('mongoose')

const schema = mongoose.Schema

// user schema

const userSchema = new schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamp: true })


// Transaction schema

const transactionSchema = new schema({
    postedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    date:{
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
},{ timestamp: true })


const userModelSchema = mongoose.model('user', userSchema)
const transactionModelSchema = mongoose.model('transaction', transactionSchema)

module.exports = {
    userModelSchema,
    transactionModelSchema
}