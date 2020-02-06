function addPost (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        author: {
            type: DataTypes.STRING,
            //allowNull: false,
            len: [1, 100]
        },
        body: {
            type: DataTypes.STRING,
            //allowNull: false,  
            len: [1, 500]
        }
    })
    return Post;  
};

module.exports = addPost;