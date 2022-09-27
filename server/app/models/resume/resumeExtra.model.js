module.exports = (sequelize, Sequelize) => {
   const ResumeExtra = sequelize.define("resume_extra", {
      skill_1: {
         type: Sequelize.STRING
      },
      skill_2: {
         type: Sequelize.STRING
      },
      skill_3: {
         type: Sequelize.STRING
      },
      skill_4: {
         type: Sequelize.STRING
      },
      skill_5: {
         type: Sequelize.STRING
      },
      skill_6: {
         type: Sequelize.STRING
      },
      interest_1: {
         type: Sequelize.STRING
      },
      interest_2: {
         type: Sequelize.STRING
      },
      interest_3: {
         type: Sequelize.STRING
      },
      interest_4: {
         type: Sequelize.STRING
      },
      interest_5: {
         type: Sequelize.STRING
      },
      interest_6: {
         type: Sequelize.STRING
      },
   });
   
   return ResumeExtra;
};