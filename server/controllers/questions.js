var Questions = require('../models/questions')

module.exports = {
    insert: insert,
    displays: displays,
    displayId: displayId,
    update: update,
    deleteitem: deleteitem
}

function insert(req, res, next) {

    var questions = new Questions({
        question: req.body.question,
        description: req.body.description,
        votes: req.body.votes
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
