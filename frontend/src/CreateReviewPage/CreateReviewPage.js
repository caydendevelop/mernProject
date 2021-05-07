
import React , {useContext} from 'react';
import {AuthContext} from '../shared/context/auth-context.js';
import CreateReviewForm from './component/CreateReviewForm';
import './CreateReviewPage.css';

const CreateReviewPage = () => {
  const auth = useContext(AuthContext);
  
  return (
    <React.Fragment>
      <div className="createReviewPage">
        {auth.isLoggedIn ? [
        <h1 className="h1_title">Create Review</h1>,
        <CreateReviewForm /> ] : (<h3>Please login to create review!</h3>)}
      </div>
    </React.Fragment>
  );
};

export default CreateReviewPage;