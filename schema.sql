DROP DATABASE IF EXISTS project;

CREATE DATABASE project;

USE project;



 CREATE TABLE organization (
   id int NOT NULL AUTO_INCREMENT,
   name varchar(50) NOT NULL UNIQUE,
   description varchar(250) NOT NULL,
   field varchar(100) NOT NULL,
   serial int(4) NOT NULL UNIQUE,
   PRIMARY KEY (ID)
);