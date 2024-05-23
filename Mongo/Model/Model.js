
const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    one: {
        required: true,
        unique: true,
    },
    two: {
        required: true,
        default: 0
    }
})

const dataModel = mongoose.model('newData', dataSchema);

module.exports = dataModel;