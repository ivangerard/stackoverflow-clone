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
        }
    }],
    votes: [{
        user: {
            $ref: "users",
            type: Schema.Types.ObjectId
        }
    }],
    user: {
        $ref: "users",
        type: Schema.Types.ObjectId
    }
});


// create the model for users and expose it to our app
module.exports = mongoose.model('questions', questionSchema); // nama collection
