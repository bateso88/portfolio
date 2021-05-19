import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, HashRouter, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HashRouter>
          <Route path='/portfolio' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/projects' exact component={Projects}/>
        </HashRouter>
      </Router>
    </>
  );
}

export default App;
