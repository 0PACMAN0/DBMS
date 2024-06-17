const mysql = require('mysql2');

// Create the pool with promise supportc
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '12345678',
    database: 'EVENT_MAN'
}).promise(); // Ensure to use .promise() to enable async/await with the pool

// Define and export the getEvents function directly
module.exports.getEvents = async () => {
    try {
        const [result] = await pool.query("SELECT * FROM events");
        return result; // Return the rows fetched from the events table
    } catch (err) {
        console.error("Error in getEvents:", err);
        throw err; // Re-throw the error to be handled elsewhere
    }
};
module.exports.getEvent = async (id) => {
    try {
        const [result] = await pool.query("SELECT * FROM events WHERE ID = ?", [id]);
        return result; // Return the rows fetched from the events table
    } catch (err) {
        console.error("Error in getEvent:", err);
        throw err; // Re-throw the error to be handled elsewhere
    }
};

// const pool = require('./your-mysql-pool'); // Ensure to replace with your actual MySQL pool setup

module.exports.newStudent = async (Stud) => {
    try {
        const [result] = await pool.query(
            "INSERT INTO student (Name, Email, Phone, Gender) VALUES (?, ?, ?, ?)",
            [Stud.Name, Stud.Email, Stud.Phone, Stud.Gender]
        );
        return result.insertId; // Return the ID of the newly inserted student
    } catch (err) {
        console.error("Error in newStudent:", err);
        throw err; // Re-throw the error to be handled elsewhere
    }
};

module.exports.createEvent = async (Eve) => {
    try {
        const [result] = await pool.query(
            "INSERT INTO events (EventName, EventDate, EventTime, EventLocation, EventDescription, EventEligibility, EventOrganiserName, EventOrganiserEmail) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [Eve.EventName, Eve.EventDate, Eve.EventTime, Eve.EventLocation, Eve.EventDescription, Eve.EventEligibility, Eve.EventOrganiserName, Eve.EventOrganiserEmail]
        );
        return result.insertId; // Return the ID of the newly inserted event
    } catch (err) {
        console.error("Error in createEvent:", err);
        throw err; // Re-throw the error to be handled elsewhere
    }
};

// Example usage (you cannot use await here at the top level)
// pool.query("SELECT * FROM student")
//     .then(res => {
//         console.log(res[0]); // Logging the result of the query
//     })
//     .catch(err => {
//         console.error("Error in query:", err); // Error handling for the query
//     });
module.exports.pool = pool;
