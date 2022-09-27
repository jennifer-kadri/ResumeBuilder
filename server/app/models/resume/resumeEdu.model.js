module.exports = (sequelize, Sequelize) => {
   const ResumeEdu = sequelize.define("resume_edu", {
       title: {
            type: Sequelize.STRING
       },
       name: {      
            type: Sequelize.STRING
      },
      startDate: {
            type: Sequelize.DATE
      },
      endDate: {
            type: Sequelize.DATE
      },
   });
   
   return ResumeEdu;
}