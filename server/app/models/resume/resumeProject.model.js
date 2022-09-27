module.exports = (sequelize, Sequelize) => {
   const ResumeInfo = sequelize.define("resume_project", {
       title: {
            type: Sequelize.STRING
       },
       overview: {      
            type: Sequelize.STRING
      },
      link: {
            type: Sequelize.STRING
      },
      location: {
            type: Sequelize.STRING
      },
   });
   
   return ResumeInfo;
};