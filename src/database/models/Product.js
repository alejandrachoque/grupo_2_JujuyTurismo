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
        Image:{
            type: dataTypes.STRING(255),
            allowNull: false
        },
        Link:{
            type: dataTypes.STRING(255),
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
        Price: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    },
    {
        tableName:'products',
        timestamps: false, // aca era false, me daba error el true porque no estaba en la tabla el create at etc etc
        
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