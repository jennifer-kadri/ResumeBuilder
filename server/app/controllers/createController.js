const config = require("../config/auth.config.js");
const db = require("../models");
const Op = db.Sequelize.Op;
const { resume: Resume,  } = db;

module.exports.signup = async (req, res, next) => {
   Resume.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      title: req.body.title,
      location: req.body.location,
      linkedin: req.body.linkedin,
      github: req.body.github,
      companyName: req.body.companyName,
      certificateLink: req.body.certificate,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      overview: req.body.overview,
      deployLink: req.body.deployLink,
      facility: req.body.facility,
      skill: req.body.skill,
      hobbies: req.body.hobbies,
   })
   .then(data => {
      res.send(data);
   })
   .catch(err => {
      res.status(500).send({ message: err.message });
   });
};