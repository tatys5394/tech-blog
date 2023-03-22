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
        host: "127.0.0.1", // 127.0.0.1
        dialect: "mysql",
        port: 3306
    }
)

module.exports = sequelize;