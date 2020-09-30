import  Sequelize  from "sequelize";
import { conexion } from "../database/database.js";
import  Usuarios  from "./usuariosModel.js";


const Roles = conexion.define('roles',{
    idRol:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombreRol:{
        type:Sequelize.TEXT
    },
    estadoRol:{
        type:Sequelize.BOOLEAN
    }
},
{
    timestamps:false
});

Roles.hasMany(Usuarios,{foreignKey:'idRol'});
Usuarios.belongsTo(Roles,{foreignKey:'idRol'});

export default Roles;