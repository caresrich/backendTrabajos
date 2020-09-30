import Sequelize from 'sequelize';
import {conexion} from '../database/database.js';



const Usuarios = conexion.define('usuarios',{
    idUsuario:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:Sequelize.TEXT
    },
    apellidoPat:{
        type:Sequelize.TEXT
    },
    apellidoMat:{
        type:Sequelize.DECIMAL
    },
    pass:{
        type:Sequelize.TEXT
    },
    repass:{
        type:Sequelize.TEXT
    },
    fechaRegUsu:{
        type:Sequelize.DATE
    },
    estadoUsuario:{
        type:Sequelize.BOOLEAN
    },
    idRol:{
        type:Sequelize.INTEGER
    }
    
},
{
    timestamps:false
});



export default Usuarios;