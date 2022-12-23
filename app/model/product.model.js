const {DataTypes} = require('sequelize')
const createProductModel = (sequelize) => {
    return sequelize.define('Product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        sale: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        {
            tableName: 'products', // tên bảng (có thể có hoặc không)
            timestamps: false, // có ngày tạo và ngày update
        }
    )
}

module.exports = createProductModel
