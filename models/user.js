function addUser(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            lin: [1, 100]
        },
        // password: {
            
        // }
    })
};