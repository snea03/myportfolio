
import './App.css';
// import { ReactDOM } from 'react';


// import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/HOME/Home';
import About from './pages/About/About';

import Resume from './pages/Resume/Resume';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contact from './pages/contact/Contact';
import Footer from './components/Footer/Footer';
// import ScrollButton from './components/scrollbutton/ScrollButton';
// import { Content } from './components/scrollbutton/Style';


// import Project2 from './pages/Projects2/Project2';


function App() {
  
  return (
  <div>
 <Navbar />  
<Home />
<About />
<Resume />
<Skills />
<Projects />
<Contact/>
{/* <ScrollButton/>
<Content /> */}


<Footer/>
{/* <Project2/> */}


  {/* <Router> 
      <Navbar />  
 <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              
              </Routes>
      </Router>    */}
      </div>
     
   
        
    
  );
}

export default App;
