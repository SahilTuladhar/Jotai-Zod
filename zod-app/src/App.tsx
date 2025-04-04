import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import PrimitiveType from './Components/PrimitiveTypes';
import Coercion from './Components/Coercion';
import Literal from './Components/Literal';
import Refine from './Components/Refine';
import Email from './Components/Email';
import SuperRefine from './Components/SuperRefine';



function App() {


  return (
    <div className="App">
      <header className="App-header">
       {/* <Form />
       <PrimitiveType />
       <Coercion />
       <Literal /> */}
       <Refine />
       {/* <Email />
       <SuperRefine /> */}
      </header>
    </div>
  );
}

export default App;
