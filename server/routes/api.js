//create new express router
var express = require('express')
var router = express.Router()
var questionsController = require('../controllers/questions')
    // var userController = require('../controllers/users')
    //export router

router.post('/questions', questionsController.insert)
router.get('/questions', questionsController.displays)
router.get('/questions/:id', questionsController.displayId)
router.put('/questions/:id', questionsController.update)
router.delete('/questions/:id', questionsController.deleteitem)



router.post('/questions/:id/addanswer', questionsController.addAnswer)


module.exports = router
