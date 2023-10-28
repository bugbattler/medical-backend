const express = require('express');
const router = express.Router();

// Create FAQ routes
router.post('/FAQ/create', require('../Controllers/FAQ').createFAQ);

// Get FAQ routes
router.get('/FAQ/getAll', require('../Controllers/FAQ').getFAQ);
router.get('/FAQ/get/:UserId', require('../Controllers/FAQ').getSingleFAQ);

// Delete FAQ routes
router.delete('/FAQ/:id', require('../Controllers/FAQ').deleteFAQ);

// Update FAQ routes
router.put('/FAQ/:id' , require('../Controllers/FAQ').updateFAQ);


module.exports = router;
