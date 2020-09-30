import Usuarios from '../models/usuariosModel.js'


//get all users
export async function getAllUsers(req,res)
{
    try{
        const users=await Usuarios.findAll();
        if(users)
        {
            return res.json(
                {
                    users:users.reverse(),
                    messageExito:'Server: users obtenidas'
                }
            );
        }
    }
    catch(e)
    {
        return res.json({
            error:e,
            messageError:'Server: Error al obtener las users'
        });
    }

};



//login user
export async function login(req,res)
{
    console.log(req.body.nombre);
    
    
    try{
        
        const user=await Usuarios.findAll({
            where:{
                nombre:'RICHARD'
            }
        });
        if(user)
        {
           
            if(user[0].pass==12345)
            {
                return res.json(
                    {
                        user:user,
                        messageExito:'Server: usuario encontrado'
                    }
                );
            }
            else{
                return res.json(
                    {
                        messageExito:'Server: intruso..!'
                    }
                );
            }
        }
        
    }
    catch(e)
    {
        return res.json({
            error:e,
            messageError:'Server: Error al obtener las user'
        });
    }

};