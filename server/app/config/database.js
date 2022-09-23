const mysql = require("mysql2");

/** CONNEXION TO DATABASE */
const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'miyuna',
  password: '',
});

mysqlConnection.connect((err) => {
  if (err) {
     return console.error("Error:" + err.message);
  }
  console.log("Database".pink,"Connection Successfull");
  mysqlConnection.query("CREATE DATABASE resume_builder", (err, result) => {
    console.log("Database created successfully");
  })
});

module.exports = mysqlConnection;