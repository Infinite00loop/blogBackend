const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/get-blog', adminController.getBlog);
router.post('/insert-blog', adminController.insertBlog);
router.delete('/delete-blog/:title', adminController.deleteBlog);

module.exports = router;