const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model{

}

Post.init(
    {
       title: {
        type: DataTypes.STRING,
       },
       content: {
        type: DataTypes.STRING,
       }
    }, {
        sequelize
    }
)

module.exports=Post;