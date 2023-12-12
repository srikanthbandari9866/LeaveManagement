import React from 'react';
import { useLocation , useNavigate } from "react-router-dom";

export default function (props) {
    const location = useLocation();
    const navigate = useNavigate();
   
    const empId = location.state.empId;
    const managerId = location.state.managerId;
    console.log(empId +'  '+  managerId +"  Dash EmpId")
    function handleSubmit() {
        
        navigate('/EmpdetailsById',{
            state:{
                empId:empId
            }
        });
    }
    function handleSubmit1() {
        navigate('/ManagerdetailsById',{
            state:{
                empId: empId,
                managerId:managerId
            }
        });
        
    }
    function handleSubmit3() {
        navigate('/EmpDetails', {
            state: {
                empId: empId,
                managerId: managerId
            }
        });
    }
    function handleSubmit4() {
        navigate('/EmpLeaveDetails', {
            state: {
                empId: empId,
            }
        });
    }
    function handleSubmit5() {
        navigate('/AddLeave',{
            state:{
                empId: empId,
                managerId:managerId
            }
        });
        
    }
    return (
        
        <div>
            
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
           <div><h2>Welcome to Dashboard</h2></div>
            <div style={{border:"2px solid black", height:600, margin:30, padding:50 ,borderRadius:"15px ", backgroundColor:"lightGrey"}}>
                <div style={{ margin:30}}>
                <button type="button" class="btn btn-outline-primary btn-lg" onClick={handleSubmit3}>Employee List</button>
                </div>
                <div style={{ margin: 30 }}>
                <button type="button" class="btn btn-outline-primary btn-lg" onClick={handleSubmit}>My Details</button>
                </div>
                <div>
                <button type="button" class="btn btn-outline-primary btn-lg" onClick={handleSubmit1}>My manager Details</button>
                </div>
                <div style={{ margin:30}}>
                <button type="button" class="btn btn-outline-primary btn-lg" onClick={handleSubmit4}>My Leave Details</button>
                </div>
                <div >
                <button type="button" class="btn btn-outline-primary btn-lg" onClick={handleSubmit5}>Add Leave</button>
                </div>

            </div>
            
        </div>
    );
}