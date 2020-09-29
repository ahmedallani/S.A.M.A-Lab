DROP DATABASE IF EXISTS project;

CREATE DATABASE project;

USE project;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL UNIQUE,
  first_name varchar(255) NOT NULL UNIQUE,
  last_name varchar(255) NOT NULL UNIQUE,
  email varchar(100) NOT NULL UNIQUE ,
  password varchar(255) NOT NULL ,
  PRIMARY KEY (ID)
);

CREATE TABLE projects (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(250),
  PRIMARY KEY (ID)
);
