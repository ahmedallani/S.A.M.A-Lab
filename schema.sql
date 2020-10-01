DROP DATABASE IF EXISTS project;

CREATE DATABASE project;

USE project;

<<<<<<< HEAD
CREATE TABLE users (
=======
<<<<<<< HEAD
CREATE TABLE users (
=======
CREATE TABLE user (
>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL UNIQUE,
  first_name varchar(255) NOT NULL UNIQUE,
  last_name varchar(255) NOT NULL UNIQUE,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
  password varchar(255) NOT NULL ,
  PRIMARY KEY (ID)
);
 CREATE TABLE organizations (
   id int NOT NULL AUTO_INCREMENT,
   name varchar(50) NOT NULL UNIQUE,
   description varchar(250) NOT NULL,
   field varchar(100) NOT NULL,
   serial int(4) NOT NULL UNIQUE,
   userID int NOT NULL,
   PRIMARY KEY (ID),
   FOREIGN KEY (userID) REFERENCES users(id)
);
CREATE TABLE projects (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(250),
  organizationID int NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (organizationID) REFERENCES organizations(id)
);
 CREATE TABLE feeds (
   id int NOT NULL AUTO_INCREMENT,
   name varchar(50) NOT NULL UNIQUE,
   description varchar(250) NOT NULL,
   type varchar(50) NOT NULL,
   projectID int NOT NULL,
   PRIMARY KEY (ID),
   FOREIGN KEY (projectID) REFERENCES projects(id)
<<<<<<< HEAD
);
=======
);
=======
  email varchar(100) NOT NULL UNIQUE ,
  password varchar(255) NOT NULL ,
  PRIMARY KEY (ID)
);


>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
