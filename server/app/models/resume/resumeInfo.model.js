module.exports = (sequelize, Sequelize) => {
   const ResumeInfo = sequelize.define("resume_info", {
      product_id: {
            type: Sequelize.INTEGER
      },

      firstname: {
            type: Sequelize.STRING
      },
      lastname: {
            type: Sequelize.STRING
      },
       email: {
            type: Sequelize.STRING
       },
       phone: {
            type: Sequelize.INTEGER
       },
       title: {
            type: Sequelize.STRING
       },
       location: {      
            type: Sequelize.STRING
      },
      linkedin: {
            type: Sequelize.STRING
      },
      github: {
            type: Sequelize.STRING
      },
   });
   
   return ResumeInfo;
};