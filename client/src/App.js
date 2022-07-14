import React from 'react';
import FileUpload from './components/FileUpload';
import Resumes from './components/Resumes'
import './App.css';

const App = () => (
  <div className='container mt-4'>
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> Resume Parser
    </h4>
    <FileUpload />
    <Resumes/>
  </div>
);

export default App;