const mongoose = require('mongoose');
const FAQSchema = new mongoose.Schema({
    que:{type:String},
    ans:{type:String},
   
});


module.exports = mongoose.model('FAQ', FAQSchema);