
const CourseModel = require('../Models/Course');

exports.createCourses = async (req, res) => {
    // console.log(6,req.body);
    const {
        course_name,
        course_type,
        course_img,
        description,
        course_fee,
        rating
    } = req.body;

    const createCourses = new CourseModel({
        course_name,
        course_type,
        course_img,
        description,
        course_fee,
        rating
    });
    console.log("ok")
    createCourses.save((error, Course) => {
        if (error) return res.status(400).json({ error });
        if (Course) {
            res.status(201).json({ Course });
        }
    });
}

exports.getCourses = async (req, res) => {
    try {
        const getusers = await CourseModel.find();
        res.json(getusers);
    }
    catch { (err) => res.json(err) };
}

exports.getSingleCourse = async (req, res) => {
    try {
        const user = await CourseModel.find({ user: req.params.id });
        res.json(user);
    } catch (err) {
        res.json({ err });
    }
}


exports.updateCourse = (req, res) => {
    CourseModel.findOneAndUpdate({ _id: req.params.id }, (req.body), { new: true }, (err, data) => {
        try {
            res.json(data);
        } catch (err) {
            res.json({ err });
        }
    })
}


exports.deleteCourse = (req, res) => {

    CourseModel.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.json({ err });
        } else {
            res.json(data);
        }
    });
}
