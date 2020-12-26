const mongoose = require("mongoose");
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const schema = mongoose.Schema;

const Emploee = new schema({
    firstname: String,
    lastname: String,
    position: String,
    phone: String,
    email: String,
    salary: Number,
    projects: [{
        _id: {
            type: String,
            default: {}
        }
    }],
    employmentDate: {
        type: String,
        default: Date.now()
    }
}, {
    collation: 'emploees'
}).plugin(aggregatePaginate);

module.exports = mongoose.model('Emploee', Emploee);