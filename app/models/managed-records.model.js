const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    color: {
        type: String,
        required: true
    },
    disposition: { type: String, required: true }
}, {
    timestamps: true
});


module.exports = mongoose.model('Data', DataSchema);


