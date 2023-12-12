import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";


function EmpDetails() {
  const [empData, setEmpData] = useState('')
  const location = useLocation();
  const navigate = useNavigate();
  const empId = location.state.empId;
  const managerId = location.state.managerId;
    useEffect(() => {
      async function callApi() {
        const getEmp = await axios.get('https://localhost:44311/api/Employees')
        setEmpData(getEmp.data)
      }
      callApi()
      // console.log(empData)
    }, [empData])
    function handleSubmit() {
      // navigate('/Dashboard',{
      //                     state:{
      //                         empId:empId,
      //                         managerId:managerId
      //                     }
      //                 });
      navigate(-1);
    }
  
    return (
      <div className="App" style={{ paddingTop: 20, margin: 50, paddingBottom: 90 }} >
        <nav><button type="button" class="btn btn-outline-secondary btn-lg" onClick={handleSubmit} style={{border:"black 1px solid", color:"white"}}>Back To DashBoard</button></nav><br /><br />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <table className="table table-striped fluid-container" border=' solid black' cellPadding={20} align={'center'} >
                  <thead  >
                      <tr style={{ color:"Black", fontSize:"18px"}} >
                          <th>Employee ID </th>
                          <th>Full Name</th>
                          <th>Email address</th>
                          <th>Address</th>
                          <th>Phone</th>
                          <th>Date Joined</th>
                          <th>Designation</th>
                          <th>Available Leave Balance</th>
                      </tr>
                  </thead>
          <tbody style={{color:"F8EDE3"}}>{ empData && 
            (empData).map((emp, index) => {
              return (
                  
                            
                <tr key={emp.empId} style={{color:"#F8EDE3"}}>
                  <td >{emp.empId}</td>
                  <td >{emp.empName}</td>
                  <td >{emp.empEmail}</td>
                  <td >{emp.empAddress}</td>
                  <td >{emp.empPhone}</td>
                  <td >{emp.dateJoined}</td>
                  <td >{emp.designation}</td>
                  <td >{emp.leaveBalance}</td>
                  
                </tr>
                  
              )
            })
          }
          </tbody>
        </table>
        
     
      </div>
    );
}
export default EmpDetails