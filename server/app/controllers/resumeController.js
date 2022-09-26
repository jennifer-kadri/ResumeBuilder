const db = require("../models");
const Op = db.Sequelize.Op;
const Resume = db.resume;
const _ = require('lodash');
const { isArray } = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
   if (err instanceof TokenExpiredError) {
       return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
   }
   return res.sendStatus(401).send({ message: "Unauthorized!" });
}

/**
 * @description Create and save resume
 * @param req 
 * @param res 
 */
module.exports.createResume = async (req, res) => {
   await Resume.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      title: req.body.title,
      location: req.body.location,
      linkedin: req.body.linkedin,
      github: req.body.github,
      company: req.body.companyName,
      certificate: req.body.certificate,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      overview: req.body.overview,
      link: req.body.deployLink,
      facility: req.body.facility,
      skill: req.body.skill,
      hobbies: req.body.hobbies,
   })
   .then(data => {
      res.send(data);
   })
   .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while creating the resume." });
   });
};

/**
 * @description Retrieve all resumes from the database
 * @param req 
 * @param res 
 */
module.exports.findAll = async (req, res) => {
   await Resume.findAll({})
   .then(data => {
      res.send(data);
   })
   .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while retrieving the resumes." });
   });
}