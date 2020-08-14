import React from 'react';

import Routes from './routes';

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

import './App.css';

function App() {
  return (
    <div className="App">
       <Header />
       
      <div className="app__body">
        
        <Routes/>
        
      </div>
      
     
     
      
    </div>
  );
}

export default App;
