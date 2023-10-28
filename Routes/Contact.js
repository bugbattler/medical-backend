
const express = require('express');
const router = express.Router();

router.post('/Contact/create', require('../Controllers/Contact').createContact);

router.get('/Contact/getAll', require('../Controllers/Contact').getContact);
router.get('/Contact/get/:UserId', require('../Controllers/Contact').getSingleContact);

router.delete('/Contact/:id', require('../Controllers/Contact').deleteContact);

router.put('/Contact/:id' , require('../Controllers/Contact').updateContact);


module.exports = router;