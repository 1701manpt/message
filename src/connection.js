const { Sequelize, DataTypes } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('postgres://moviego:A6XpVGrfFD4WUzoXpfU5puM77zIy94F0@dpg-cg84bendvk4ljrg7dcig-a/moviego') // Example for postgres
// const sequelize = new Sequelize(config) // Example for postgres

const check = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        account: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        paranoid: true,
    },
)

module.exports = { check, User }