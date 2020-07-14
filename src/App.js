import React from 'react';
import ShoeStore from './components/ShoeStore'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='shoestore' element={<ShoeStore/>}/>
    </Routes>
  );
}


export default App;
