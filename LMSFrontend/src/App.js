import logo from './logo.svg';
import './App.css';
import EmpDetails from './Components/EmpDetails';
import ScreenLayout from './Components/ScreenLayout';
import Dashboard from './Components/Dashboard';
import EmpDetailsById from './Components/EmpDetailsById';
import ManagerDetailsById from './Components/ManagerDetailsById';
import Login from './Components/LoginPage';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {  useNavigate} from "react-router-dom";
import EmpLeaveDetails from './Components/EmpLeaveDetails';
import AddLeave from './Components/AddLeave';
import ApproveLeave from './Components/ApproveLeave';

function App() {
  return (  
    <div className='sri'>
    <div className="App" >  
    <Router>    
        <div className="container" >    
        <nav className="btn  navbar navbar-expand navheader" style={{backgroundColor:"background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(99,144,144,1) 35%, rgba(0,212,255,1) 100%)"}}>    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item " >    
                  {/* <Link to='/Login'  className="nav-link">Add Employee</Link>     */}
                  <Link to="/" style={{color:'#182747', paddingLeft:450 ,fontSize:"35px"} } ><b>Home</b></Link>
              </li>   
             
            </ul>    
          </div>    
        </nav> <br />    
        <Routes>    
          <Route exact path='/' element={<ScreenLayout/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/EmpDetails' element={<EmpDetails />} />    
          <Route exact path='/EmpDetailsById' element={<EmpDetailsById />} />    
          <Route exact path='/ManagerDetailsById' element={<ManagerDetailsById />} />    
          <Route exact path='/Dashboard' element={<Dashboard />} />   
          <Route exact path='/EmpLeaveDetails' element={<EmpLeaveDetails />} />   
          <Route exact path='/AddLeave' element={<AddLeave />} />   
          <Route exact path='/ApproveLeave' element={<ApproveLeave />} />   
           
        </Routes>    
     </div>   
    </Router> 
        </div>   
    </div>  

  );  
}
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(99,144,144,1) 35%, rgba(0,212,255,1) 100%)
export default App;
