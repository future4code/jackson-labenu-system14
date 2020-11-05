CREATE TABLE Mission (
		id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL UNIQUE,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    modulo INT NOT NULL
);

CREATE TABLE Student (
		id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    birthdate DATE NOT NULL,
    mission_id INT NOT NULL, FOREIGN KEY (mission_id) REFERENCES Mission(id) );
);

CREATE TABLE Teacher (
		id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    birthdate DATE NOT NULL,
    mission_id INT NOT NULL, FOREIGN KEY (mission_id) REFERENCES Mission(id) );    
);


CREATE TABLE Hobby (
		id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    
);

CREATE TABLE Student_Hobby (
		id INT PRIMARY KEY ,
        student_id INT NOT NULL, FOREIGN KEY (student_id) REFERENCES Student(id),
        hobby_id INT NOT NULL, FOREIGN KEY (hobby_id) REFERENCES Hobby(id)
);

CREATE TABLE Specialty (
		id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    
);

CREATE TABLE Teacher_Specialty (
		id INT PRIMARY KEY ,
        teacher_id INT NOT NULL, FOREIGN KEY (teacher_id) REFERENCES Teacher(id),
        specialty_id INT NOT NULL, FOREIGN KEY (specialty_id) REFERENCES Specialty(id)
);







