import Register from "../../pages/Register";

const registerOpts = () => {

   const required = (value) => {
      if (!value) {
         return (
            <div className="error">
               This field is required.
            </div>
         );
      };
   };

   const validEmail = (value) => {
      if (!isEmail(value)) {
         return (
            <div className="error">
               This email address is not valid.
            </div>
         );
      };
   };

   const validPassword = (value) => {
      if (value.length < 6 || value.length > 40) {
         return (
            <div className="error">
               The password must be between 6 and 40 characters long.
            </div>
         );
      };
   };

   const validUsername = (value) => {
      console.log(value);
      if (value === null | value === "") {
         return (
            <div>
               The username is required.
            </div>
         );
      };
   };

   return (
      <>
         <Register required={required} validEmail={validEmail}  validPassword={validPassword} validUsername={validUsername} />
      </>
   )
}


export default registerOpts