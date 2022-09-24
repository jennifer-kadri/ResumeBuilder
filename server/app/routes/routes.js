const Router = require("express").Router();
const mysqlConn = require("../config/database");
const { register, login } = require("../controllers/userController");

Router.post("/register", register);
Router.post("/login", login);

Router.post("/", (req, res) => {
   res.json({ message: "Welcome to Resume Builder"});
   let qb = req.body;
   const sql = 
      "SET @id = ?; SET @email: SET @password;";
   mysqlConn.query(
      sql,
      [
         qb.id,
         qb.email,
         qb.password,
      ],
      (err, results, fields) => {
         if (!err) {
            res.type('json')
         }
      }
   )
})

module.exports = Router;