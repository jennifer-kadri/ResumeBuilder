import axios from "axios";
import { API_CREATE_URL } from "../../config";

axios.defaults.withCredentials = true

const create = (firstname, lastname, email, phone, title, location, linkedin, github, certificate, startDate, endDate, overview, facility, skill, hobbies) => {
  return axios.post(API_CREATE_URL + "create", {
    firstname,
    lastname,
    email,
    phone,
    title, 
    location, 
    linkedin, 
    github, 
    certificate, 
    startDate, 
    endDate, 
    overview, 
    facility, 
    skill, 
    hobbies,
  });
};

const ResumeService = {
   create,
}

export default ResumeService;