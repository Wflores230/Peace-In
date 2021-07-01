import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './components/Login'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Login></Login>
    </>
  );
}

export default App;
