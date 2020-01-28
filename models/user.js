var mongoose = require("mongoose");

//USER - name, email
var userSchema = mongoose.Schema({
    name: String, 
    email: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);

module.exports = mongoose.model("User", userSchema);