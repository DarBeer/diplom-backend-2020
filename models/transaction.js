const mongoose = require("mongoose");
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const schema = mongoose.Schema;

const Transaction = new schema({
    payer: {
        _id: {
            type: String
        },
        bankAccount: {
            type: String
        },
        bank: {
            type: String
        }
    },
    recipient: {
        _id: {
            type: String
        },
        bankAccount: {
            type: String
        },
        bank: {
            type: String
        }
    },
    date: {
        type: String,
        default: Date.now()
    },
    status: String,
    amount: Number
}, {
    collation: 'transactions'
}).plugin(aggregatePaginate);

module.exports = mongoose.model('Transaction', Transaction);