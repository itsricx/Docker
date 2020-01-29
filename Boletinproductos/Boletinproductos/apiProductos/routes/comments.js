const express = require('express')
const router = express.Router()

const customMdw = require('../middleware/custom');
const CommentController = require('../controllers/comments')


router.get('/comments', CommentController.getComments);
router.get('/comments/:id', CommentController.getComment);
router.post('/comments', customMdw.ensureAuthenticated, CommentController.createComment);




module.exports = router