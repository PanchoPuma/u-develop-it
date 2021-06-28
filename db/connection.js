const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'PanchoPuma12!',
  database: 'election'
});

module.exports = db;
