const {Sequelize} = require('sequelize')

const {DB,HOST,PASSWORD,USER,dialect} = require("../config/db.config.jsx");
const { createToDoModel } = require('./toDo.model.jsx');

const sequelize = new Sequelize(DB, USER, PASSWORD,{
    host: HOST,
    dialect: dialect,
});

const ToDo = createToDoModel(sequelize)

module.exports = {
    sequelize,
    ToDo
}