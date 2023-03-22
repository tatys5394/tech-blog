const sequelize = require("../config/connection");
const { User } = require("../models");
const { Post }= require("..models")


const userData = [
  {
    first_name: "Maria",
    last_name: "Perez",
    username: "mperez",
    email: "mariaperez@gmail.com",
    password: "imapassword",
  },
];

const postData = [
  {
    title: "How to keep going even if you don't understand",
    content: "Just google it!"
}];

async function runSeeds() {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
  });

  for (const post of postData) {
    const id = Math.ceil(Math.random () * userData.length) +1;
    const newPost = await Post.create({
      ...post, 
      user_id: id,
    });
  }
}

runSeeds();
