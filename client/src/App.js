import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div>
          <Navbar></Navbar>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
