//create new express router
var express = require('express')
var router = express.Router()
var questionsController = require('../controllers/questions')
    // var userController = require('../controllers/users')
    //export router

router.post('/questions', questionsController.insert)
router.get('/questions', questionsController.displays)
router.put('/questions/:id', questionsController.update)
router.delete('/questions/:id', questionsController.deleteitem)
    //
    // router.post('/users', userController.insert)
    // router.get('/users', userController.displays)
    // router.put('/users/:id', userController.update)
    // router.delete('/users/:id', userController.deleteitem)


module.exports = router
