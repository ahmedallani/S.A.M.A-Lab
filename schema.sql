DROP DATABASE IF EXISTS project;

CREATE DATABASE project;

USE project;


 CREATE TABLE organizations (
   id int NOT NULL AUTO_INCREMENT,
   name varchar(50) NOT NULL UNIQUE,
   description varchar(250) NOT NULL,
   field varchar(100) NOT NULL,
   serial int(4) NOT NULL UNIQUE,
   userID int,
   PRIMARY KEY (ID),
   FOREIGN KEY (userID) REFERENCES users(id)
);
 CREATE TABLE feed (
   id int NOT NULL AUTO_INCREMENT,
   name varchar(50) NOT NULL UNIQUE,
   description varchar(250) NOT NULL,
   type varchar(50) NOT NULL,
   projectID int,
   PRIMARY KEY (ID),
   FOREIGN KEY (projectID) REFERENCES projects(id)
);
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
  organizationID int,
  PRIMARY KEY (ID),
  FOREIGN KEY (organizationID) REFERENCES organizations(id)
);
