module.exports = (sequelize, Sequelize) => {
   const Resume = sequelize.define("resumes", {
      firstname: {
         type: Sequelize.STRING,
      },
      lastname: {
          type: Sequelize.STRING
      },
       email: {
           type: Sequelize.STRING,
       },
       phone: {
           type: Sequelize.INTEGER
       },
       title: {
           type: Sequelize.STRING
       },
       location: {
         type: Sequelize.STRING,
      },
      linkedin: {
            type: Sequelize.STRING
      },
      linkedin: {
            type: Sequelize.STRING
      },
      github: {
            type: Sequelize.STRING
      },
      company: {
         type: Sequelize.STRING,
      },
      certificate: {
            type: Sequelize.
      },
      startDate: {
            type: Sequelize.DATE
      },
      endDate: {
            type: Sequelize.DATE
      },
      overview: {
         type: Sequelize.STRING,
      },
      link: {
            type: Sequelize.STRING
      },
      facility: {
            type: Sequelize.STRING
      },
      skill: {
            type: Sequelize.STRING
      },
      hobbies: {
         type: Sequelize.STRING,
      },
   });
   
   return Resume;
};