const mysql = require("mysql2");

/** CONNEXION TO DATABASE */
const mysqlConn = mysql.createConnection({
  host: 'localhost',
  user: 'miyuna',
  password: '',
});

mysqlConn.connect((err) => {
  if (err) {
     return console.error("Error:" + err.message);
  }
  console.log("Database".pink,"Connection Successfull");
  mysqlConn.query("CREATE DATABASE resume_builder", (err, result) => {
    console.log("Database created successfully");
  })
});

module.exports = mysqlConn;