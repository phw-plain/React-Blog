import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import List from './components/List'
import ListDetail from './components/ListDetail'
import Main from './components/Main'
import Navigation from './components/Navigation'
import Write from './components/Write';

import comments from "./data/comments.json";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes> 
            <Route path='/' element={<Main />}></Route>
            <Route path='/list' element={<List />}></Route>
            <Route path='/list/:id' element={<ListDetail comments={comments}/>}></Route>
            <Route path='/write' element={<Write />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
