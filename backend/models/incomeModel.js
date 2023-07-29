const mongoose = require('mongoose')


const IncomeSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
        trim : true,
        maxLength : 50
    },
    amount : {
        type: Number,
        requred: true,
        maxLength : 20,
        trim : true
    },
    type : {
        type: String,
        default : "Income"
    },
    date : {
        type: Date,
        requred: true,
        trim : true
    },
    category : {
        type: String,
        requred: true,
        trim : true
    },
    discription : {
        type: String,
        requred: true,
        maxLength : 20,
        trim : true
    },
}, {timestamps: true})

module.exports = mongoose.model("Income", IncomeSchema)