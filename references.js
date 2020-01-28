var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", {useNewUrlParser: true, useUnifiedTopology: true});

var Post = require("./models/post");
var User = require("./models/user");

//Create a new user
User.create({
    email: "aiman@gmail.com",
    name: "Md Aiman Sharif"
}, function(err, data){
    console.log(data);
});

//Create a new post
Post.create({
    title: "Best movie",
    content: "Harry Potter"
});

//Create a post and associate it to the user containing the array of posts
Post.create({
    title: "What is the best childhood cartoon character?",
    content: "Jerry"
}, function(err, post){
    User.findOne({email: "aiman@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post._id);
            foundUser.save(function(err, awesomeData){
                if(err){
                    console.log(err);
                } else{
                    console.log(awesomeData);
                }
            })
        }
    });
});

// Retrieve data and fill the posts array with the data
User.findOne({email: "aiman@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else{
        console.log(user);
    }
});