
import './App.css';
// import { useContext} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ThemeState from './context/themeState';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
// import themeContext from './context/themeContext';

function App() {
// const Theme = useContext(themeContext);

  return (

<div>
<Router>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
    <ThemeState>
    <div className="App w-screen">
     <Navbar/>
    </div>
    </ThemeState>
      <Routes className="relative z-10">
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    {/* </Suspense> */}
  </Router>
</div>
  );
}

export default App;
