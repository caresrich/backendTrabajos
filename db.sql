CREATE DATABASE dbtrabajos;

use dbtrabajos;

CREATE TABLE usuarios
(
    idUsuario INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidoPat VARCHAR(50) NOT NULL,
    apellidoMat VARCHAR(50),
    pass VARCHAR(50) NOT NULL,
    repass VARCHAR(50) NOT NULL,
    fechaRegUsu DATETIME,
    estadoUsuario BOOLEAN,
    idRol INT(6),
    FOREIGN KEY (idRol) REFERENCES roles (idRol)
);

CREATE TABLE roles
(
    idRol INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombreRol VARCHAR(50) NOT NULL,
    estadoRol BOOLEAN
);

CREATE TABLE trabajos
(
    idTrabajo INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    imagenTrabajo VARCHAR(200),
    codBienes VARCHAR(50),
    numSerie VARCHAR(100),
    cantidad INT(6),
    nomEmpleado VARCHAR(50),
    apeEmpleado VARCHAR(50),
    trabajoRealiz VARCHAR(255),
    observaciones VARCHAR(200),
    fechaRegTra DATETIME,
    firmaEmpleado VARCHAR(200),
    estadoTrabajo BOOLEAN,
    idRol INT(6),
    FOREIGN KEY (idRol) REFERENCES Rols (idRol),
    idUnidad INT(6),
    FOREIGN KEY (idUnidad) REFERENCES unidades (idUnidad)
);

CREATE TABLE Rols
(
    idRol INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombreCateg VARCHAR(50) NOT NULL,
    fechaRegCat DATETIME,
    estadoCat BOOLEAN
);

CREATE TABLE unidades
(
    idUnidad INT(6) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombreUnidad VARCHAR(50) NOT NULL,
    fechaRegUni DATETIME,
    estadoUnidad BOOLEAN  
);

INSERT INTO roles (nombreRol,estadoRol)
VALUES ('ELECTRONICA',TRUE);


INSERT INTO usuarios (nombre,apellidoPat,apellidoMat,pass,repass,fechaRegUsu,estadoUsuario,idRol)
VALUES ('RICHARD','CARMONA','ESTRADA','12345','12345','2020-12-01',TRUE,1);