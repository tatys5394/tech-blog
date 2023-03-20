const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    // db name
    process.env.DB_NAME,
    // user name
    process.env.DB_USER,
    // PASSWORD
    process.env.DB_PASS,
    // OPTIONS OBJECT
    {
        host: "localhost",
    }

);