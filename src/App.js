import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import List from './components/List'
import ListDetail from './components/ListDetail'

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
            <Route path='/list' element={<List />}></Route>
            <Route path='/list/:id' element={<ListDetail />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
