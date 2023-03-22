const express = require("express");
const sequelize = require('./config/connection');
const exphbs = require("express-handlebars");
const session = require("express-session");
const { Post, User } = require("./models");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/", async (req, res) => {
    const postData = await Post.findAll({include: [{ model: User, foreignKey: "author_id" }],
});
    const posts = postData.map(post => post.get({ plain :true }))
    console.log(posts);
    res.render("home"), {
        posts,
    }});

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`server running on ${PORT}`));
});