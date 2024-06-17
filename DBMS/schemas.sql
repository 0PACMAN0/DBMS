CREATE DATABASE EVENT_MAN;
USE EVENT_MAN;

CREATE TABLE student (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Phone VARCHAR(20) NOT NULL,
    Gender ENUM('Male', 'Female', 'Other') NOT NULL
);

CREATE TABLE events (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    EventName VARCHAR(255) NOT NULL,
    EventDate DATE NOT NULL,
    EventTime TIME NOT NULL,
    EventLocation VARCHAR(255) NOT NULL,
    EventDescription VARCHAR(10000) NOT NULL,
    EventEligibility VARCHAR(255) NOT NULL,
    EventOrganiserName VARCHAR(255) ,
    EventOrganiserEmail VARCHAR(255) 
);
-- Insert a sample student
INSERT INTO student (Name, Email, Phone, Gender) VALUES 
('John Doe', 'john.doe@example.com', '123-456-7890', 'Male');

-- Insert a sample event
INSERT INTO events (EventName, EventDate, EventTime, EventLocation, EventDescription, EventEligibility, EventOrganiserName, EventOrganiserEmail) VALUES 
('Tech Conference', '2024-07-01', '09:00:00', 'Conference Hall A', 'A conference on the latest in tech', 'All students', 'Jane Smith', 'jane.smith@example.com');
