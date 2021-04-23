
import React from 'react';
import SignupForm from './component/SignupForm';
import './SignupPage.css';

const SignupPage = () => {
  
  return (
    <React.Fragment>
      <div className="signupPage">
        <h1 className="h1_title">Signup</h1>
        
        
        <SignupForm />
      </div>
     
    </React.Fragment>
  );
};

export default SignupPage;