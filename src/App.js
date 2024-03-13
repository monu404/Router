import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';



import Home from './Home';

// import About from './About';

import About from './Components/About';

import Contact from './Contact';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<div>Error page</div>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
