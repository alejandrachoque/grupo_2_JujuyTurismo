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
    return Product

    ;
    
};