
const express = require('express');
const router = express.Router();

// Create Course routes
router.post('/Course/create', require('../Controllers/Course').createCourses);

// Get Course routes
router.get('/Course/getAll', require('../Controllers/Course').getCourses);
router.get('/Course/get/:UserId', require('../Controllers/Course').getSingleCourse);

// Delete Course routes
router.delete('/Course/:id', require('../Controllers/Course').deleteCourse);

// Update Course routes
router.put('/Course/:id' , require('../Controllers/Course').updateCourse);


module.exports = router;