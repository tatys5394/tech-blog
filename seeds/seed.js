const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = [
  {
    first_name: "Maria",
    last_name: "Perez",
    username: "mperez",
    email: "mariaperez@gmail.com",
    password: "imapassword",
  },
];

async function runSeeds() {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
}

runSeeds();
