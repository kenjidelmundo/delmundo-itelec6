const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.get("/api/posts", (req, res) => {
    const posts = [
        {
            id: "eoiyaruia",
            title: "First title from server-side",
            content: "First content from server-side"
        },
        {
            id: "ehaklajle",
            title: "Second title from server-side",
            content: "Second content from server-side"
        }
    ];

    res.status(200).json({
        message: "Posts successfully fetched",
        posts: posts
    });
});

module.exports = app; 
