const mongoose = require("mongoose");
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const schema = mongoose.Schema;

const Project = new schema({
    name: String,
    description: String,
    totalPrice: String,
    profit: Number,
    employees: [{
        _id: {
            type: String,
            defaul: {}
        }
    }],
    startDate: {
        type: String,
        default: Date.now()
    },
    finishDate: {
        type: String,
        default: Date.now()
    }
}, {
    collation: 'projects'
}).plugin(aggregatePaginate);

module.exports = mongoose.model('Project', Project);