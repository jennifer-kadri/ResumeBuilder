module.exports = (sequelize, Sequelize) => {
   const ResumeEdu = sequelize.define("resume_edu", {
      product_id: {
            type: Sequelize.INTEGER
      },
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
};