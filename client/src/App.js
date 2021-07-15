import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Axios from 'axios'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import Signup from './pages/Signup';
import Yoga from './pages/Yoga';
import Stretching from './pages/Stretching';
import Meditation from './pages/Meditation';
import Homeworkout from './pages/Homeworkout';
import API from './utils/API'


function App() {

  const [user, setUser] = useState(false)

  const getYoutubeResults = async (type) => {
    return await API.getYoutubeResults(type)
  }

  const handleUserLogin = () => {
    setUser(true)
  }

  return (
    <Router>
      <div>
        <Navbar user={user}></Navbar>
        <Route exact path="/" component={ Homepage } />
        <Route exact path="/Login" render={(props) => <Login {...props} handleUserLogin={handleUserLogin} />} />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/signup" component={ Signup } />
        <Route exact path="/yoga" render={(props) => <Yoga {...props} search={getYoutubeResults} />} />
        <Route exact path="/stretching" render={(props) => <Stretching {...props} search={getYoutubeResults} />} />
        <Route exact path="/meditation" render={(props) => <Meditation {...props} search={getYoutubeResults} />} />
        <Route exact path="/homeworkout" render={(props) => <Homeworkout {...props} search={getYoutubeResults} />} />

      </div>
    </Router>
  );
}

export default App;
