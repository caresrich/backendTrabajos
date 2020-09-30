import Roles from '../models/rolesModels.js'

//get all roles
export async function getAllRoles(req,res)
{
    try{
        const roles=await Roles.findAll();
        if(roles)
        {
            return res.json(
                {
                    roles:roles.reverse(),
                    messageExito:'Server: roles obtenidas'
                }
            );
        }
    }
    catch(e)
    {
        return res.json({
            error:e,
            messageError:'Server: Error al obtener las roles'
        });
    }

};