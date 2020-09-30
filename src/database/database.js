import Sequelize from 'sequelize';

export const conexion = new Sequelize(
    'dbtrabajos',
    'richard',
    '12345',
    {
        host:'localhost',
        dialect:'mariadb',
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:10000
        },
        logging:false
    }
);