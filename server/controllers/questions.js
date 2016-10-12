var Questions = require('../models/questions')

module.exports = {
    insert: insert,
    displays: displays,
    update: update,
    deleteitem: deleteitem
}

function insert(req, res, next) {

    var questions = new Questions({
        question: req.body.question,
        votes: req.body.votes,
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

function update(req, res) {

    Questions.findOne({
        _id: req.params.id
    }, (err, blogs) => {
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
    }, (err, blogs) => {
        res.json({
            "messages": "File deleted"
        })
    })
}
