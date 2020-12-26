const mongoose = require("mongoose");
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const schema = mongoose.Schema;

const Placement = new schema({
    name: String,
    address: String,
    type: String,
    resident: {
        type: String,
        default: {}
    },
    costInMonth: Number,
    tenancyInMonth: Number,
    leaseStartDate: {
        type: String,
        default: Date.now()
    }
}, {
    collation: 'placement'
}).plugin(aggregatePaginate);

module.exports = mongoose.model('Placement', Placement);