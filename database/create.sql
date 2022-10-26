DROP DATABASE IF EXISTS WMU_Elearning_Database
CREATE DATABASE WMU_Elearning_Database;


-- Stored Procedure = sp
-- Table = no prefix
-- View prefix with sv
-- Trigger st

DROP TABLE IF EXISTS classes
CREATE TABLE classes (
	ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Name varchar(255)
);


DROP TABLE IF EXISTS students
CREATE TABLE students (
	ID INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
    Name varchar(255)
);
