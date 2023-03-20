const { Model, DataTypes } = require("sequelize");
const sequelize = require("..config/connection");

class Post extends Model {}

Post.init( 
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        },
    },
},
{
    hooks: {
        beforeCreate: async (user) => {
            user.password = await bcrypt.hash
            (user.password, 10);
            return user;
        },
        beforeUpdate: async (user) => {
            user.password = await bcrypt.hash
            (user.password, 10);
            return user;
        },
    },
},
{
    sequelize,
    underscore: true,
    freezeTableNames: true,
    timestamps: true,
    modelName: "post"
},
);

module.exports = Post;

    
    