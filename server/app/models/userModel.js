module.exports = (sequelize, Sequelize) => {
   const userSchema = sequelize.define("users", {
      email: {
         type: Sequelize.STRING
      },
      password: {
         type: Sequelize.STRING
      }
   });
   return userSchema;
}