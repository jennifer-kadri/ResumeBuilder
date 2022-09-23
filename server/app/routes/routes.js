const { register, login, setAvatar, getAllUsers } = require("../controllers/userController");
const Router = require("express").Router();
const mysqlConn = require("../config/database");

Router.get("/", (req, res) => {})
Router.post("/register", register);
Router.post("/login", login);

Router.post("/", (req, res) => {
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
      (err, resulsts, fields) => {
         if (!err) {
            res.type('json')
         }
      }
   )
})

module.exports = Router;