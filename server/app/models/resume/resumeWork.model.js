module.exports = (sequelize, Sequelize) => {
   const ResumeWork = sequelize.define("resume_work", {
      product_id: {
         type: Sequelize.INTEGER
      },
      title: {
         type: Sequelize.STRING
      },
      company: {
         type: Sequelize.STRING
      },
      certificate: {
         type: Sequelize.STRING
      },
      startDate: {
         type: Sequelize.DATE
      },
      endDate: {
         type: Sequelize.DATE
      },
   });
   
   return ResumeWork;
};