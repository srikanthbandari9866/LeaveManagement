import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moment from 'moment';
import { useLocation, useNavigate } from "react-router-dom";


export default function EmpLeaveDetails() {
    
    const [leave, setLeave] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const empId = location.state.empId;


    useEffect(() => {
        async function callApi() {
            const getLeave = await axios.get(`https://localhost:44311/api/Leaves/Employee/${empId}`)
            setLeave(getLeave.data)
        }
        callApi();
        // console.log(leave);
    }, [leave]);
    function handleSubmit() {
        // navigate('/Dashboard',{
        //                     state:{
        //                         empId:empId,
        //                     }
        //                 });
      navigate(-1);
      }
    
    return (
      <div className="App"  >
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                <nav><button type="button" class="btn btn-outline-secondary btn-lg" onClick={handleSubmit} style={{border:"black 1px solid", color:"white"}}>Back To DashBoard</button></nav><br /><br />
            
              <table className="table table-striped table-border " style={{ backgroundColor: "lightcyan", borderRadius: "300px", border: "2px solid white" }}>
                    <thead  >
                    <tr style={{ backgroundColor: "slateblue" }}>
                                <th>LeaveId</th>
                                <th>LeaveType</th>
    
                                <th>Reason</th>
                                <th>ManagerId</th>
                                <th>EmpId</th>
                                <th>StartDate</th>
                                <th>EndDate</th>
                                <th>Balance</th>
                                <th>Status</th>
                                
                            </tr>
                    </thead>
            <tbody>{ leave && 
              (leave).map((l, index) => {
                return (
                    
                              
                    <tr style={{ backgroundColor: "lavender" }} key={l.leaveId}>
                    <td>{l.leaveId}</td>
                    <td >{l.leaveType}</td>
    
                    <td >{l.leaveReason}</td>
                    <td >{l.managerId}</td>
                    <td >{l.empId}</td>
                    <td >{Moment(l.leaveStartDate).format('DD-MM-YYYY')}</td>
                    <td>{Moment(l.leaveEndDate).format('DD-MM-YYYY')}</td>
                    <td>{l.leaveBalanace}</td>
                    <td>{l.leaveStatus}</td>
    
                    <td><button id="sts" class="btn btn-warning" value={l.leaveStatus}>{l.leaveStatus}</button></td>
                    
    
                </tr>
                    
                )
              })
            }
            </tbody>
          </table>
          
       
        </div>
    );
      
};
// style={{ paddingTop: 90, margin: 50, paddingBottom: 90 }}

    