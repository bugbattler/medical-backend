const mongoose = require('mongoose');

const popupSchema = new mongoose.Schema({
    fname: { type: String },
    email: { type: String },
    phone: { type: Number }

});


module.exports = mongoose.model('Contact', popupSchema);