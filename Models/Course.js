const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema({
    course_name: { type: String },
    course_type: { type: String },
    description: { type: String },
    course_fee: { type: Number },
    course_img: { type: String },
    rating: { type: Number }

});


module.exports = mongoose.model('Courses', CoursesSchema);