const mysql = require("mysql2");
const { newStudent, createEvent } = require("../database");

const { Students, Events } = require("./sample");

const seedDB = async () => {
  // Delete all existing records if needed
  try {
    // Assume pool is your MySQL pool object from the database module
    const pool = require('../database').pool;

    // Delete all records from student and events tables
    await pool.query("DELETE FROM student");
    await pool.query("DELETE FROM events");

    // Seed the student data
    for (let i = 0; i < Students.length; i++) {
      await newStudent(Students[i]);
    }

    // Seed the event data
    for (let i = 0; i < Events.length; i++) {
      await createEvent(Events[i]);
    }

    console.log("Database seeded successfully!");
  } catch (err) {
    console.error("Error seeding the database:", err);
  }
};

// Run the seed function
seedDB().then(() => {
  console.log("Seeding process completed.");
  process.exit();
}).catch(err => {
  console.error("Error during the seeding process:", err);
  process.exit(1);
});
