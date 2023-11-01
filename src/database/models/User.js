/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes } dataTypes 
 * @returns 
 */
module.exports = (sequelize, dataTypes) => {
    const User= sequelize.define(
    'User',
    {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        
        FirstName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        LastName: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        Email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        Password: dataTypes.STRING(50)
    },
    {
        tableName:'user',
        timestamps: true,
        
    }
    

   
    
    )
    return User

    ;
    
};