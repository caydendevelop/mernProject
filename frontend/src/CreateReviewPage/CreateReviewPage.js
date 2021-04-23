
import React from 'react';
import CreateReviewForm from './component/CreateReviewForm';
import './CreateReviewPage.css';

const CreateReviewPage = () => {
  
  return (
    <React.Fragment>
      <div className="createReviewPage">
        <h1 className="h1_title">CreateReview</h1>
        
        
        <CreateReviewForm />
      </div>
     
    </React.Fragment>
  );
};

export default CreateReviewPage;