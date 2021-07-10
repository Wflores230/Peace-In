import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Favorites from './pages/Favorites';

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/favorites" component={Favorites} />
      </div>
    </Router>
  );
}

export default App;
