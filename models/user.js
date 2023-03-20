const { Model } = require("sequelize");
const sequelize = require("..config/connection");

class User extends Model {}

User.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
        },
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            len:[8],
        },
    },
},
);

module.exports = User;