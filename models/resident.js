const mongoose = require("mongoose");
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const schema = mongoose.Schema;

const Resident = new schema({
    name: String,
    description: String,
    UNP: String,
    legalAddress: String,
    headmasterName: String,
    debt: Number,
    credit: Number,
    contacts: [{
        firstname: String,
        lastname: String,
        phone: String,
        email: String
    }],
    projects: [{
        _id: {
            type: String,
            default: {}
        }
    }],
    transactions: [{
        _id: {
            type: String,
            default: {}
        }
    }],
    registrationDate: {
        type: String,
        default: Date.now()
    }
}, {
    collation: 'residents'
}).plugin(aggregatePaginate);

module.exports = mongoose.model('Resident', Resident);