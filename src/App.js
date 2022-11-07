import logo from './logo.svg';
import './App.css';
import Introduce from './components/introduction';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './components/pages/about';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={ <Introduce/>}/>
          <Route path='/about' element={ <About/> }/>
        </Routes>
      </Router>
  ); 
}

export default App;
