module.exports = (sequelize, Sequelize) => {
   const User = sequelize.define("users", {
       email: {
           type: Sequelize.STRING
       },
       password: {
           type: Sequelize.STRING
       },
       status: {
           type: Sequelize.STRING
       },
       firstname: {
           type: Sequelize.STRING
       },
       lastname: {
           type: Sequelize.STRING
       },
       civility: {
           type: Sequelize.STRING
       }
   });
   return User;
};