const { Sequelize, DataTypes } = require("sequelize")
const { HOST, USER, PASSWORD, DB, dialect } = require('../configs/db.configs');
const createProductModel = require("./product.model");

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
})

const Product = createProductModel(sequelize);


module.exports = {
    sequelize, Product,
}
























