const { dbConnection } = require('../config/database'); 
const { DataTypes } = require('sequelize');

const Heroe = dbConnection.define('Heroe', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

Heroe.sync({ force: false }).then(() => {
    console.log("Table Heroe sync successfully");
}).catch((error) => {
    console.log("hubo un error", error);
})

module.exports =  Heroe