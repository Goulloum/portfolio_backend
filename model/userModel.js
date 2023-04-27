module.exports = (sequelize, DataTypes) => {
  
    const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }

    })

    return User

}