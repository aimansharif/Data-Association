var mongoose = require("mongoose");

//POST - title, content
var postSchema = mongoose.Schema({
    title: String, 
    content: String
});

//Post model
var Post = mongoose.model("Post", postSchema);

module.exports = mongoose.model("Post", postSchema);