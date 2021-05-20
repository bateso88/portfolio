import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import VanTrip from './components/pages/VanTrip';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/projects' exact component={Projects}/>
          <Route path='/vantrip' exact component={VanTrip}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
