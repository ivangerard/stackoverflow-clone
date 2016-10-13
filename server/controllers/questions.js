var Questions = require('../models/questions')

module.exports = {
    insert: insert,
    displays: displays,
    displayId: displayId,
    update: update,
    deleteitem: deleteitem,
    addAnswer: addAnswer

}

function insert(req, res, next) {

    var questions = new Questions({
        title: req.body.title,
        detail: req.body.detail,
        username: req.body.username
            //  user: ObjectId(req.body.userId)
    })
    questions.save((err) => {
        if (err)
            throw err
        res.json(questions)
            // console.log(blogs);
    })

}

function displays(req, res) {
    Questions.find({}, (err, results) => {
        res.json(results)
    })
}


function displayId(req, res) {
    Questions.findOne({
        _id: req.params.id
    }, (err, questions) => {
        res.json(questions)
    })
}

function update(req, res) {

    Questions.findOne({
        _id: req.params.id
    }, (err, questions) => {
        //update the book
        questions.question = req.body.question
        questions.votes = req.body.votes
        questions.save((err) => {
            if (err)
                throw err;
            res.json(questions)
        })
    })
}


function deleteitem(req, res) {
    Questions.remove({
        _id: req.params.id
    }, (err, questions) => {
        res.json({
            "messages": "File deleted"
        })
    })
}

function addAnswer(req, res) {

    Questions.findOne({
        _id: req.params.id
    }, (err, question) => {
        question.answer.push({
            detail: req.body.detail

        })
        question.save((err) => {
            if (err)
                throw err;
            res.json(question)
        })
    })
}


/////////////////////////////////////////
