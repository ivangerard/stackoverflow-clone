var Users = require('../models/users')

module.exports = {
    insert: insert,
    displays: displays,
    update: update,
    deleteitem: deleteitem
}

function insert(req, res, next) {
    var users = new Users({
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password
    })

    users.save((err) => {
        if (err)
            throw err
        res.json(users)
            // console.log(blogs);
    })
}

function displays(req, res) {
    Users.find({}, (err, results) => {
        res.json(results)
    })
}

function update(req, res) {
    Users.findOne({
        _id: req.params.id
    }, (err, blogs) => {
        //update the book
        users.username = req.body.username
        users.password = req.body.password
        users.fullname = req.body.fullname
        questions.save((err) => {
            if (err)
                throw err;
            res.json(users)
        })
    })
}

function deleteitem(req, res) {
    Users.remove({
        _id: req.params.id
    }, (err, users) => {
        res.json({
            "messages": "File deleted"
        })
    })
}
