function addUser(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            //allowNull: false,
            len: [1, 100]
        },
        password: {
            type: DataTypes.STRING,
            //allowNull: false,  
            len: [8, 100]
        }
    })
    return User;
};
module.exports = addUser;