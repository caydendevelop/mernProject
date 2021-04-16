import React from 'react';
import './App.css'; 
import CList from './Components/CList/Clist';
import CReview from './Components/CReview/CReview';
import AddReview from './Components/CReview/AddReview';

function App() {
  return (
    <div className="App">
      <CList />
      <CReview />
      <AddReview />
    </div>
  );
}

export default App;