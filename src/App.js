import React from 'react';
import Fetch from './Components/Fetch/Fetch';
import Restuarant from './Components/restuarant/Restuarant';

const App = () => {


  const style={
    textAlign:'center',
    fontSize:"30px",
    fontWeight:600
  }
  return (
    <div>
      <h2 style={style}>Demo Restuarant  Project</h2>
      <Restuarant></Restuarant>
      <Fetch></Fetch>
    </div>
  );
};
 


export default App;