CREATE DATABASE IF NOT EXISTS humans;
USE humans; 
CREATE TABLE humans_dna (
	id INT NOT NULL auto_increment,
	dna json default NULL,
	mutant bool DEFAULT NULL,
    primary key (id)
);
describe humans_dna;
