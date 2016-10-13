// app/models/user.js
// load the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// define the schema for our user model
var questionSchema = mongoose.Schema({
    questionTitle: String,
    questionDetail: String,
    answer: [{
        answerDetail: String,
        usersAnswer: {
            $ref: "users",
            type: Schema.Types.ObjectId
        }
    }],
    votes: [{
        usersVotes: {
            $ref: "users",
            type: Schema.Types.ObjectId
        }
    }],
    users: {
        $ref: "users",
        type: Schema.Types.ObjectId
    }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('questions', questionSchema); // nama collection
