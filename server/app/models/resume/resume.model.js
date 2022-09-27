module.exports = (sequelize, Sequelize) => {
   const Resume = sequelize.define("resumes", {
       title: {
            type: Sequelize.STRING
       },
   });
   
   return Resume;
};