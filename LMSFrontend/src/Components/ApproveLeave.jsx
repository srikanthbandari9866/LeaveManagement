import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { differenceInDays, parseISO } from "date-fns";

export default function ApproveLeave() {
    const location = useLocation();
    const navigate = useNavigate();
    const [empData, setEmpData] = useState('')
    const empId = location.state.empId;
    const managerId = location.state.managerId;
    const leaveType = location.state.leaveType;
    const leaveReason = location.state.leaveReason;
    const leaveStartDate = location.state.leaveStartDate;
    const leaveEndDate = location.state.leaveEndDate;
    const [leaveBalance, setLeaveBalance] = useState("");
    const [leaveStatus, setLeaveStatus] = useState("");
    const [empName, setEmpName] = useState("");
    const [empUname, setEmpUname] = useState("");
    const [empPass, setEmpPass] = useState("");
    const [empEmail, setEmpEmail] = useState("");
    const [empAddress, setEmpAddress] = useState("");
    const [empPhone, setEmpPhone] = useState("");
    const [empSalary, setEmpSalary] = useState("")
    //const [managerId, setManagerId] = useState("");
    const [designation, setDesignation] = useState("");
    const [leave, setLeave] = useState([]);
    const [leaveId, setLeaveId] = useState("");
    const [level, setLevel] = useState("");
    const [extraLeave, setExtraLeave] = useState("");
    const [dateJoined, setDateJoined] = useState("");
    //const [empId, setEmpId] = useState("");
    
    useEffect(() => {
        async function callApi() {
          // const { empId } = route.params;
          // console.log(empId + "empid")
          const res = await axios.get(`https://localhost:44311/api/Employees/${empId}`)
          // const res = await axios.get('https://localhost:44311/api/Employees/?id=' + Id)
          setEmpName(res.data.empName)
          setEmpUname(res.data.empUname)
          setEmpPass(res.data.empPass)
          setEmpEmail(res.data.empEmail)
          setEmpAddress(res.data.empAddress)
          setEmpPhone(res.data.empPhone)
          setEmpSalary(res.data.empSalary)
          setLeaveBalance(res.data.leaveBalance)
          setLevel(res.data.level)
          setDesignation(res.data.designation)
            setExtraLeave(res.data.extraLeave)
            setDateJoined(res.data.dateJoined)
        }
        callApi()
        // console.log(empData)
    }, [])
    console.log(leaveType);
                            
    function Approved() {
        
        let day = differenceInDays(
            parseISO(leaveEndDate),
            parseISO(leaveStartDate)
        );
        let days = day + 1
  
        // if (day == 'NaN') {
        //     alert("Select the date.......");
        //     return;
        // }
        const leaveData = {leaveType, leaveStatus: 'Approved', leaveReason, leaveStartDate, leaveEndDate, leaveBalanace:leaveBalance - days, empId, managerId }
        axios.post(`https://localhost:44311/api/Leaves`, leaveData)
            // axios.post(`http://localhost:44311/api/Leaves${leaveData }`)
            .then(response => {
                alert("Submitting to database")
                console.log(response.data)

            });
        const empData = { empId, empName, empUname, empPass, empEmail, empAddress, empPhone, empSalary, leaveBalance: leaveBalance - days, managerId, level, designation, extraLeave,dateJoined }
        axios.put(`https://localhost:44311/api/Employees/${empId}`, empData)
            .then(response => {
                console.log(response.data)
                //console.log(response.data.leaveBalance)
                alert("Successful updation")
                console.log("Updated employee leave balance successfully");
                navigate(-2);
            })
        
    } 
    function Deny() {
        
        let day = differenceInDays(
            parseISO(leaveEndDate),
            parseISO(leaveStartDate)
        );
        let days = day + 1
  
        // if (day == 'NaN') {
        //     alert("Select the date.......");
        //     return;
        // }
        const leaveData = {leaveType, leaveStatus: 'Rejected', leaveReason, leaveStartDate, leaveEndDate, leaveBalanace:leaveBalance, empId, managerId }
        axios.post(`https://localhost:44311/api/Leaves`, leaveData)
            // axios.post(`http://localhost:44311/api/Leaves${leaveData }`)
            .then(response => {
                alert("Submitting to database")
                console.log(response.data)

            });
        const empData = { empId, empName, empUname, empPass, empEmail, empAddress, empPhone, empSalary, leaveBalance: leaveBalance, managerId, level, designation, extraLeave, dateJoined }
        axios.put(`https://localhost:44311/api/Employees/${empId}`, empData)
            .then(response => {
                console.log(response.data)
                //console.log(response.data.leaveBalance)
                alert("Successful updation");
                console.log("Updated employee leave balance successfully");
                navigate(-2);
            })
        }
    return (
        <div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            {/* <button className="btn btn-outline-dark" style={{ marginTop: "2px", marginLeft: "1140px" }} onClick={() => navigate(-2)}>Back To Home</button> */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10px" }}>
            
                <div class="container-border" style={{ border: "2px solid black", marginTop: "30px", borderRadius: "10px" }}>
                    <h2 style={{ marginTop: "4px", textAlign: "center", textDecoration: "underline" }}>Leave Approval/Denial</h2>
                    <table class="table table-striped " style={{padding:"40px"}} >
                        <thead style={{color:"#000000", fontSize:"23px"}}>
                            <tr>
                                <th>Employee Leave Details</th>
                                <th>Information</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <th style={{ color:"#000000", fontSize:"18px"}}>LeaveType</th>
                                <td style={{color:"#F8EDE3"}}>{leaveType}</td>
                            </tr>
                            <tr>

                                <th style={{ textAlign: "center",color:"#000000", fontSize:"18px" }}>LeaveReason</th>
                                <td style={{color:"#F8EDE3"}}>{leaveReason}</td>
                            </tr>
                            <tr>

                                <th style={{ textAlign: "center" ,color:"#000000", fontSize:"18px"}}>StartDate</th>
                                <td style={{color:"#F8EDE3"}}>{leaveStartDate}</td>
                            </tr>
                            <tr>

                                <th style={{ textAlign: "center",color:"#000000", fontSize:"18px" }}>EndDate</th>
                                <td style={{color:"#F8EDE3"}}>{leaveEndDate}</td>
                            </tr>
                            <tr>

                                <th style={{ textAlign: "center" ,color:"#000000", fontSize:"18px"}}>Balance</th>
                                <td style={{color:"#F8EDE3"}}>{leaveBalance}</td>
                            </tr>
                            <tr>

                                <th style={{ textAlign: "center",color:"#000000", fontSize:"18px" }}>EmpId</th>
                                <td style={{color:"#F8EDE3"}}>{empId}</td>
                            </tr>
                            <tr>

                                <th style={{ textAlign: "center",color:"#000000", fontSize:"18px" }}>ManagerId</th>
                                <td style={{color:"#F8EDE3"}}>{managerId}</td>
                            </tr>
                       

                        </tbody>
                   
                    </table>
    
                    <button style={{ marginLeft: "5px", marginBottom: "10px"  }} className="btn btn-success" onClick={Approved}>Approve</button>
                    <button style={{ marginLeft: "50px", marginBottom: "10px", padding:"6px" }} className="btn btn-danger" onClick={Deny}>Deny</button>
                    <button className="btn btn-dark" style={{ marginTop: "-13px", marginLeft: "250px",marginRight:"5px" }} onClick={() => navigate(-2)}>Cancel</button>
                    <input type="text" id="status" value={leaveStatus} hidden />
                    <input type="text" id="reason" value={leaveReason} hidden />
              
                   
                </div>
            </div>
            
        </div>

    );
    
};
