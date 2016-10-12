//create new express router
var express = require('express')
var router = express.Router()
var questionsController = require('../controllers/questions')

//export router

router.post('/questions', questionsController.insert)
router.get('/questions', questionsController.displays)
router.put('/questions/:id', questionsController.update)
router.delete('/questions/:id', questionsController.deleteitem)

module.exports = router
