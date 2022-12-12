
import './App.css';
// import { useContext} from 'react'
import Navbar from './components/Navbar';
import ThemeState from './context/themeState';
// import themeContext from './context/themeContext';

function App() {
// const Theme = useContext(themeContext);

  return (
    <ThemeState>
    <div className="App h-screen w-screen">
   
     <Navbar/>
    </div>
    </ThemeState>
  );
}

export default App;
