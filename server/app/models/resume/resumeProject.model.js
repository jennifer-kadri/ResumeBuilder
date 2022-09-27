module.exports = (sequelize, Sequelize) => {
   const ResumeProject = sequelize.define("resume_project", {
      product_id: {
            type: Sequelize.INTEGER
      },
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
   
   return ResumeProject;
};