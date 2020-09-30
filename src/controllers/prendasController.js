import {Op} from 'sequelize'


import Prendas from '../models/prendasModel';
import Categorias  from "../models/categoriasModels";
import  Marcas  from "../models/marcasModels";
import Colores from "../models/coloresModels";
import Tallas from "../models/rolesModels";
import Tipos from "../models/tiposModels";

//create a new prenda
export async function createPrenda(req,res)
{
    const {idCategoria,idTipo,idMarca,idTalla,idColor,codigoPren,imagen,precio,caracteristicas,cantidad}=req.body;
    try{
        let prenda=await Prendas.create(
            {
                idCategoria:idCategoria,
                idTipo:idTipo,
                idMarca:idMarca,
                idTalla:idTalla,
                idColor:idColor,
                codigoPren:codigoPren,
                imagen:imagen,
                precio:precio,
                caracteristicas:caracteristicas,
                cantidad:cantidad,
                estadoPre:true,
                fechaRegPre:new Date()
            }
        )
        if(prenda)
        {
            console.log('prenda existente');
            
            return res.json({
                id:prenda.idPrenda,
                messageExito:'Server:prenda guardada'
            });
        }
        else
        {
            console.log('prenda inexistente');
            
        }
    }
    catch(e)
    {
        return res.json({
            error:e,
            messageError:'Server: error al guardar la prenda'
        });
    }
  
};

//get up a new prenda
export async function getAllPrenda(req,res)
{
    try{
        const prendas=await Prendas.findAll({
            include:[Marcas,Categorias,Colores,Tallas,Tipos]
        });
        if(prendas)
        {
            return res.json(
                {
                    prendas:prendas.reverse(),
                    messageExito:'Server: Prendas obtenidas'
                }
            );
        }
    }
    catch(e)
    {
        return res.json({
            error:e,
            messageError:'Server: Error al obtener las prendas'
        });
    }

};

//get up clothes for marcas
export async function getPrendasForMarcas(req,res)
{
    const {id}=req.params;
    try {
        const prendasMarcas=await Prendas.findAll({
            where:{
                idMarca:id,    
            },
            include:[Marcas,Categorias,Colores,Tallas,Tipos] 
        });
        if(prendasMarcas)
        {
            return res.json({
                prendasMarcas:prendasMarcas,
                exito:"Server: Prendas con marcas obtenidas"
            });
        }
        else{
            return res.json({
                error:"Server: Error al obtener las prendas con marcas"
            });
        }
    }
    catch (error) {
        return res.json(error);
    }
};

//get all clothes forr babys

export async function allPrendasBabys(req,res)
{
    try{
        const prendasBaby=await Prendas.findAll({
            where:{
                idTalla:{
                    [Op.lte]:7
                }
            },
            include:[Marcas,Categorias,Colores,Tallas,Tipos]
        });
        if(prendasBaby)
        {
            return res.json({
                prendas:prendasBaby,
                exito:"Server: clothes for babys get successfully"
            });
        }
        else{
            return res.json({
                error:"Server: Error to get the clothes for babys"
            });
        }
    }
    catch(error)
    {
        return res.json(error);
    }
};


export async function searchInteligent(req,res)
{
    const {i,d}=req.params;
    try {
        
    } catch (error) {
        
    }
}