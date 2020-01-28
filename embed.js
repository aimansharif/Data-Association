var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useNewUrlParser: true, useUnifiedTopology: true});

//Schema and Model
//POST - title, content
var postSchema = new mongoose.Schema({
    title: String, 
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - name, email
var userSchema = new mongoose.Schema({
    name: String, 
    email: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);


// CREATE A NEW USER
var newUser = new User({
    name: "Md Aiman Sharif",
    email: "aiman@ciena.com"
});

// PUSH THE NEW POST TO THE ARRAY UNDER USERS
newUser.posts.push({
    title: "New comment",
    content: "This is the new comment added"
});

// SAVE THE NEW USER CREATED TO THE DB AND THE PUSHED POST
// Must save after creating or pushing a new post or attribute
newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else{
        console.log(user);
    }
});


// CREATE A NEW POST
var newPost = new Post({
    title: "Yamaha Acoustic Guitar",
    content: "Yamaha guitar is awesome"
});

// SAVE THE POST TO THE DB
newPost.save(function(err, user){
    if(err){
        console.log(err);
    } else{
        console.log(user);
    }
});

// FIND THE SAVED POST
Post.findOne({title: "Yamaha Acoustic Guitar"}, function(err, post){
    if(err){
        console.log(err);
    } else{
        console.log(post);
    }
});

// Find user Md Aiman Sharif and add a post to the user which is found- Md Aiman Sharif
User.findOne({name: "Md Aiman Sharif"}, function(err, user){
    if(err){
        console.log(err);
    } else{
        user.posts.push({
            title: "This is done by express",
            content: "This is the coolest app ever"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else{
                console.log(user);
            }
        });
    }
});