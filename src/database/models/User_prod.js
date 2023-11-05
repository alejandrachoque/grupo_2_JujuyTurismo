/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes } dataTypes 
 * @returns 
 */
module.exports = (sequelize, dataTypes) => {
    const User_prod= sequelize.define(
    'User_prod',
    {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: dataTypes.INTEGER(11),
        },
        id_produc: {
            type: dataTypes.INTEGER(11),
        }
    },
    {
        tableName:'user_prod',
        timestamps: false,
    }
  
    )
    
    return User_prod

    ;
    
};