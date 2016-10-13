var Questions = require('../models/questions')

module.exports = {
    insert: insert,
    displays: displays,
    displayId: displayId,
    update: update,
    deleteitem: deleteitem,
    addAnswer: addAnswer,
    voteAnswerUp: voteAnswerUp,
    voteAnswerDown: voteAnswerDown,
    voteUp: voteUp,
    voteDown: voteDown

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


//
// function addAnswer(req, res) {
//
//     Questions.findOne({
//         _id: req.params.id
//     }, (err, question) => {
//
//
//         questions.title = req.body.title
//         questions.detail = req.body.detail
//         questions.answer = req.body.answer
//         questions.save((err) => {
//             if (err)
//                 throw err;
//             res.json(questions)
//         })
//     })
// }


function addAnswer(req, res) {

    Questions.findOne({
        _id: req.params.id
    }, (err, question) => {
        question.answer.push({
            detail: req.body.detail,
            username: req.body.username
        })
        question.save((err) => {
            if (err)
                throw err;
            res.json(question)
        })
    })
}
/////////////////////////////////////////

function voteAnswerUp(req, res) {
    Questions.findOne({
        _id: req.params.id
    }, (err, question) => {
        question.answer[req.params.idx].votes += 1

        question.save((err) => {
            if (err)
                throw err;

            res.json(question)
        })
    })
}

function voteAnswerDown(req, res) {
    Questions.findOne({
        _id: req.params.id
    }, (err, question) => {
        question.answer[req.params.idx].answer_votes -= 1

        question.save((err) => {
            if (err)
                throw err;
            res.json(question)
        })
    })
}

function voteUp(req, res) {
    //finding a current question
    Questions.findOne({
        _id: req.params.id
    }, (err, question) => {
        //update the question
        question.votesQuestion += 1

        question.save((err) => {
            if (err)
                throw err;

            res.json(question)
        })
    })
}

function voteDown(req, res) {
    //finding a current question
    Questions.findOne({
        _id: req.params.id
    }, (err, question) => {
        //update the question
        question.votesQuestion -= 1

        question.save((err) => {
            if (err)
                throw err;

            res.json(question)
        })
    })
}
