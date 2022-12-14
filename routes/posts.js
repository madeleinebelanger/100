const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const postsController = require('../controllers/posts')

const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Post Routes - simplified for now

router.get('/getSummary/:date', postsController.getSummary)

router.get('/getFeedback', postsController.getFeedback)

router.get('/:id', ensureAuth, postsController.getPost)

router.post('/createPost', upload.single('file'), postsController.createPost)

router.post('/createFeedback', ensureAuth, postsController.createFeedback)

router.put('/editPost/:id', postsController.editPost)

router.put('/likePost/:id', postsController.likePost)

router.delete('/deletePost/:id', postsController.deletePost)

router.get('/addDescription/:id', postsController.getEditDescription)

// router.get("/api", ensureAuth,postsController.getAffirmation);

module.exports = router
