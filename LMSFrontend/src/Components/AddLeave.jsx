import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { differenceInDays, parseISO } from "date-fns";

export default function AddLeave() {
    const location = useLocation();
    const navigate = useNavigate();
    const empId = location.state.empId;
    const managerId = location.state.managerId;
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
    const [leaveType, setLeaveType] = useState("");
    const [leaveStatus, setLeaveStatus] = useState("");

    const [leaveStartDate, setLeaveStartDate] = useState("");
    const [leaveEndDate, setLeaveEndDate] = useState("");
    const [leaveReason, setLeaveReason] = useState("");
    const [level, setLevel] = useState("");
    const [extraLeave, setExtraLeave] = useState("");
    //const [empId, setEmpId] = useState("");
    const [leaveBalance, setLeaveBalance] = useState("");
    const [dateJoined, setDateJoined] = useState("");
    const [dateErrors, setDateErrors] = useState({});
    
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

    function handleSubmit() {
        
        let day = differenceInDays(
            parseISO(leaveEndDate),
            parseISO(leaveStartDate)
        );
        let days = day + 1
  
        // if (day == 'NaN') {
        //     alert("Select the date.......");
        //     return;
        // }
        if (days <= leaveBalance && (Date.parse(leaveStartDate) <= Date.parse(leaveEndDate))) {
            if (empId === 4) {
                const leaveData = {leaveType, leaveStatus: 'Approved', leaveReason, leaveStartDate, leaveEndDate, leaveBalanace:leaveBalance - days, empId, managerId }
                // fetch('https://localhost:44311/api/Leaves',{
                //     method: 'POST',
                //     headers:{'Content-type':'application/json'},
                //         body: leaveData
                //     }).then(r=>r.json()).then(res=>{
                //     if(res){
                //         alert("Inserted Details");
                //     }
                // });
                axios.post(`https://localhost:44311/api/Leaves`,leaveData)
                // axios.post(`http://localhost:44311/api/Leaves${leaveData }`)
                    .then(response => {
                        alert("Submitting to database")
                        console.log(response.data)

                    });
                    const empData = { empId, empName, empUname, empPass, empEmail, empAddress, empPhone, empSalary, leaveBalance:leaveBalance - days, managerId, level, designation, extraLeave, dateJoined }
                axios.put(`https://localhost:44311/api/Employees/${empId}`, empData)
                    .then(response => {
                        console.log(response.data)
                        //console.log(response.data.leaveBalance)
                        alert("Successful updation")
                        console.log("Updated employee leave balance successfully")
                        navigate(-1);

                    });
                    console.log(leaveData)
                    alert("Your Leave is Auto-approved");
                    // console.log(leaveData)
            }
            else {
                alert("Leave approval is sent to manager");
            navigate('/ApproveLeave',{
                state:{
                    empId:empId,
                    managerId:managerId,
                    leaveType: leaveType,
                    leaveReason: leaveReason,
                    leaveStartDate: leaveStartDate,
                    leaveEndDate: leaveEndDate,
                                
                                
                }
            });
            }
        }
        else {
            const errors = { leaveStartDate: "", leaveEndDate: "", leaveReason: "", leaveType:"" }
            if (!leaveType) {
                errors.leaveType = "Select a Leave Type"
            }
            else if (!leaveReason) {
                errors.leaveReason = "Enter a Valid Reason"
            }
           else if(!leaveStartDate){
                errors.leaveStartDate = "Start date is required";
            }
            else if(!leaveEndDate){
                errors.leaveEndDate = "End date is required";
            }
          
            else {
                alert("Date is invalid or Your Leave Balance Is less than Applied leave days")
            }
            setDateErrors(errors);
        }
      }
    
    
    return (
        <div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <nav><h1 style={{ backgroundColor: "ActiveBorder", color: "White", margin: "10px", padding: "18px", borderRadius: "15px" }}>Leave Application</h1></nav>
            <button className="btn btn-outline-dark" style={{ marginTop: "8px", marginLeft: "750px", backgroundColor:"#F8EDE3" }} onClick={() => navigate(-1)}>Back To DashBoard</button>
            <div style={{ backgroundColor: "lavender", margin: "10px" , paddingTop:"100px", paddingBottom:"100px",borderRadius:"25px" }} className="form-control">

                <table style={{ marginLeft: "auto", marginRight: "auto" }} >
                    <thead style={{ textAlign: "center" }}><h2 style={{ marginTop: "-40px" }}  >Add Leave</h2></thead>
                    <tbody className="form-control" style={{ borderRadius: "10px" }} >
                        <tr style={{ textAlign: "center" }}>

                            <td className="form-control" scope="row"><b>LeaveType</b></td>
                            <td >
                                <select className="form-control" style={{ fontFamily: "TimesNewRoman" }} value={leaveType} onChange={(e) => { setLeaveType(e.target.value) }} name="leaveType">
                                    <option value="none" >Select leave type</option>
                                    <option value="Maternal">MaternalLeave</option>
                                    <option value="Casual">CasualLeave</option>
                                    <option value="Early">EarlyLeave</option>
                                    <option value="Sick">SickLeave</option>
                                    <option value="Vacation">VacationLeave</option>
                                    
                                </select>
                                <p style={{color:"red"}}>{dateErrors.leaveType}</p>

                            </td>
                        </tr>

                        <tr style={{ textAlign: "center" }}>
                            <th className="form-control" scope="row">Reason</th>
                            <td ><input className="form-control" type="text" value={leaveReason} onChange={(e) => { setLeaveReason(e.target.value) }} name="leaveReason" />
                            <p style={{color:"red"}}>{dateErrors.leaveReason}</p></td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <th className="form-control" scope="row">StartDate</th>
                            <td >
                                <input id="f1" className="form-control" type="date" onChange={(e) => { setLeaveStartDate(e.target.value) }} name="leaveStartDate" />
                                <p style={{color:"red"}}>{dateErrors.leaveStartDate}</p></td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <th className="form-control" scope="row">Enddate</th>
                            <td ><input className="form-control" type="date" onChange={(e) => { setLeaveEndDate(e.target.value) }} name="leaveEndDate" />
                            <p style={{color:"red"}}>{dateErrors.leaveEndDate}</p></td>
                        </tr>

                        <tr style={{ textAlign: "center" }}>
                            <th className="form-control" scope="row">ManagerId</th>
                            <td ><input className="form-control" type="number" defaultValue={managerId} name="managerId" /></td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <th className="form-control" scope="row">EmpId</th>
                            <td ><input className="form-control" defaultValue={empId} type="number" name="empId" /></td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <th className="form-control" scope="row">Balance</th>
                            <td ><input className="form-control" defaultValue={leaveBalance} type="number" name="leaveBalanace" /></td>
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>
                       
                                <button type="button" style={{ marginRight: "5px", marginTop: "5px", marginLeft: "20px" }} class="btn btn-light btn-outline-primary" onClick={handleSubmit} >Submit
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-save" viewBox="0 0 16 16">
                                        <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                                    </svg>
                                </button>
                            
                                <button type="button" style={{ marginRight: "5px", marginTop: "5px" }} className="btn btn-light btn-outline-danger" onClick={() => navigate(-1)}>Cancel
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                    </svg>
                                </button>
                               
                        
                            </td></tr>

                    </tbody>




                </table>
            </div>
        </div>

    );
};
