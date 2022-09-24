const { verifySignUp, authJwt } = require("../middleware");
const controller = require("../controllers/userController");
const router = require("express").Router();

module.exports = function (app) {
   app.use((req, res, next) => {
      res.header(
         "Access-Control-Allow-Headers",
         "x-access-token, Origin, Content-Type, Accept"
      );
      next();
   });
   
   router.post("/signup", verifySignUp.checkDuplicateEmail);
   router.post("/login", controller.login);
   router.post("/logout", authJwt.verifyToken, controller.logout);
   router.post("/refresh", controller.refreshToken);

   router.get("/user", authJwt.verifyToken, controller.userBoard);
   router.get("/user-infos", authJwt.verifyToken, controller.getUserInfos);

   app.use("/api/auth", router);
};