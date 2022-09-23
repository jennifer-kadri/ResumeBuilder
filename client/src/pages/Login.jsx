import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios'
import Logo from '../assets/sakura.png'
import { registerRoute } from '../utils/APIRoutes'
import { 
   RegisterSection,
   FormContainer,
   Form,
   Brand,
   BrandLogo,
   BrandName,
   Input,
   Button,
   Account,
   Span,
   Space
} from '../components/StyledElements'

const Register = () => {
   const navigate = useNavigate();
   const [values, setValues] = useState({
      email: "",
      password: "",
      confirmPassword: "",
   });

   const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
   };

   useEffect(() => {
      if (localStorage.getItem("ResumeBuilder")) {
        navigate("/")
      }
   }, []);

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (handleValidation()) {
         const { email, password } = values;
         const { data } = await axios.post(registerRoute, {
            email,
            password, 
         });
         if (data.status === false) {
            toast.error(data.msg, toastOptions);
         }
         if (data.status === true) {
            localStorage.setItem('ResumeBuilder', JSON.stringify(data.user));
            navigate("/");
         }
      }
   };

   const handleValidation = () => {
      const { password, confirmPassword, email } = values;
      if (password !== confirmPassword) {
         toast.error(
            "The password and confirm password do not match", 
            toastOptions
        ); 
         return false;
      } else if (password.length < 8) {
         toast.error(
            "Password should be at least 8 characters", 
            toastOptions 
        );
         return false;
      } else if (password.length > 24) {
         toast.error(
            "Password should not exceed 24 characters", 
            toastOptions 
        );
         return false;
      } else if (email === "") {
         toast.error(
            "The email is required",
            toastOptions 
        );
         return false;
      }
      return true;
   };

   const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   }

   return (
      <>
         <RegisterSection id="register-section">
            <FormContainer className="form container">
               <Form onSubmit={(e) => handleSubmit(e)}>
                  <Brand className="brand">
                     <BrandLogo src={Logo} alt="" className="logo" />
                     <BrandName>Resume Builder</BrandName>
                  </Brand>
                  <Input 
                     type="email" 
                     placeholder="Email" 
                     name="email"
                     autoComplete="off" 
                     onChange={(e) => handleChange(e)}
                     />
                  <Input 
                     type="password" 
                     placeholder="Password" 
                     name="password" 
                     onChange={(e) => handleChange(e)}
                     />
                  <Input 
                     type="password" 
                     placeholder="Confirm Password" 
                     name="confirmPassword" 
                     onChange={(e) => handleChange(e)}
                  />
                  <Button type="submit">Create User</Button>
                  <Account className="account">
                     <Span>
                        Already have an account ? 
                        <Space></Space>
                        <Link to="/login"> Log In</Link>
                     </Span>
                  </Account>
               </Form>
            </FormContainer>
            <ToastContainer />
         </RegisterSection>
      </>
  )
}

export default Register