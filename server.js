const express = require("express");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const session = require("express-session");
const { Post, User } = require("./model");
const routes = require("./controllers");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const sessionConfig = {
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
};

app.use(session(sessionConfig));

app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", async (req, res) => {
  const postData = await Post.findAll({
    include: [{ model: User, foreignKey: "author_id" }],
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  console.log(posts);
  res.render("main"),
    {
      posts,
    };
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`server running on ${PORT}`));
});
