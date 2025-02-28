const express = require("express");
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req,res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin, X-Requested-Width, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

app.post("/api/posts", (req, res, next)=> {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'Post added successfully'
    });
})

app.get("/api/posts", (req, res, next) =>{
    const posts = [
        {
            id: "maski ano",
            title: "Pers Taytol",
            content: "Del Mundo Kenji Mina! Segi segi"
        },
        {
            id: "maski ano man",
            title: "Sikond Taytol",
            content: "Kenji Del Mundo from Arimbay!"
        }
    ];
    res.status(200).json({
    message: "Post retrieved successfully",
    posts: posts
});
});


module.exports = app;
