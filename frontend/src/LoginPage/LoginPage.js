
import React from 'react';
import LoginForm from './component/LoginForm';

import './LoginPage.css';

const LoginPage = () => {

  
  
  return (
    <React.Fragment>
      <div className="loginPage">
        <h1 className="h1_title">Login</h1>
        
        
        <LoginForm />
      </div>
     
    </React.Fragment>
  );
};

export default LoginPage;