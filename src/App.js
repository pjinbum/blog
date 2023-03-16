/* eslint-disable */

import './App.css';
import Cards from './component/Cards';
import Header from './component/Header';
import Main from './component/Main';
// import Blog from './component/Blog';
import Blogoo from './component/Blogoo';
import {Routes , Route } from 'react-router-dom';
import Sub1 from './component/Sub1';



function App() {





  return (
    <div className="App">
      <Routes>
         <Route path='/sub1' element={<Sub1></Sub1>}/>
      </Routes>
    
       <Blogoo></Blogoo>
      {/* <Header></Header>
      <Main></Main>
      <Cards></Cards> */}
      
    </div>

  );
}

export default App;
