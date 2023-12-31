const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        },
        duration: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.ENUM("summer", "autumn", "winter", "spring"),
            allowNull: false,
        },
    },
    { timestamps: false }
    )
}
