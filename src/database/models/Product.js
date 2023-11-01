/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes } dataTypes 
 * @returns 
 */
module.exports = (sequelize, dataTypes) => {
    const Product= sequelize.define(
    'Product',
    {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        
        FirstName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        FirstDescription: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        Description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        Price: dataTypes.INTEGER(11)
    },
    {
        tableName:'products',
        timestamps: true,
        
    }
    

   
    
    )
    Product.associate=function(models){

    
    Product.belongsToMany(models.User, {
        as: "products",
        through: 'user_prod',
        foreignKey: 'product_id',
        otherKey: 'user_id',
        timestamps: false
    })}
    return Product

    
    
};