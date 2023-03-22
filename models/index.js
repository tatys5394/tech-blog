const User = require("./User.js");
const Post = require("./Post.js");

// relationships
User.hasMany(Post, {
  foreignKey: "author_id",
});

Post.belongsTo(User, {
  foreignKey: "author_id",
});
module.exports = { User, Post };
