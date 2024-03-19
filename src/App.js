import './App.css';
import Admin from './component/Admin';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import { Route,Routes } from 'react-router-dom';
import User from './component/User';
import Auth from './component/Auth';
import Add from './component/Add';
import Manage from './component/Manage';

function App() {
  return (
    <div className="App">
      <Auth>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />}>
            
            <Route path="Add" element={<Add />} /> 
            <Route path="Manage" element={<Manage />} /> 
          </Route>
          <Route path="/user" element={<User />} />
        </Routes>
      </Auth>
    </div>
  );
}


export default App;
