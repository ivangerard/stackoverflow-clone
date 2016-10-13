// app/models/user.js
// load the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// define the schema for our user model
var questionSchema = mongoose.Schema({
    title: String,
    detail: String,
    answer: [{
        detail: String,
        user: {
            $ref: "users",
            type: Schema.Types.ObjectId
        },
        username: String,
        votes: Number
    }],
    user: {
        $ref: "users",
        type: Schema.Types.ObjectId
    },
    username: String,
    votesQuestion: Number
}, {
    timestamps: true
});



// create the model for users and expose it to our app
module.exports = mongoose.model('questions', questionSchema); // nama collection
