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
        Password: { type: dataTypes.STRING(150),
            allowNull: false
        }
    },
    {
        tableName:'user',
        timestamps: false,
    }
    

   
    
    )
    User.associate=function(models){

    
    User.belongsToMany(models.Product, {
        as: "products",
        through: 'user_prod',
        foreignKey: 'id_user',
        otherKey: 'id_produc',
        timestamps: false
    })}
    return User

    ;
    
};