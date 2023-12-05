
const db = require('../../database/models')



module.exports = {
    list: async (req,res) => {
        const usuarios = await db.User.findAll({attributes: ['id','FirstName', 'Email'], raw: true});
        let i = 0;
        
        
        while( i < usuarios.length){

            usuarios[i]["detalle"] = "http://localhost:3000/api/users/" + (usuarios[i].id);
            i++;

        }
        res.json({
            count: usuarios.length,
            users: usuarios,
        })
    },
    userId: async (req,res) => {
        const usuario = await db.User.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id','FirstName','LastName', 'Email']
        })
        
        res.json({
            usuario 
        })
    }

}