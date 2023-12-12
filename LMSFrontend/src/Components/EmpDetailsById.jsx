import React from 'react'
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function EmpDetailsById(props) {
  const location=useLocation();
  // const { empId } = route.params;
  const [empData, setEmpData] = useState('')
  // const empId = props.Id;
  const navigate = useNavigate();
  const empId = location.state.empId;

  // const [empId, setEmpId] = useState('');
  // setEmp(props.id)
  // console.log(empId);
  const [emp, setEmp] = useState([]);
  // const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empUname, setEmpUname] = useState("");
  const [empPass, setEmpPass] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empAddress, setEmpAddress] = useState("");
  const [empPhone, setEmpPhone] = useState("");
  const [empSalary, setEmpSalary] = useState("")
  const [leaveBalance,setLeaveBalance]=useState("")
  const [managerId, setManagerId] = useState("");
  const [designation, setDesignation] = useState("");

  const [extraLeave, setExtraLeave] = useState("")
  
  const [dateJoined, setDateJoined] = useState("");

  // console.log("EmpdetailsById")
    useEffect(() => {
      async function callApi(Id) {
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
            setManagerId(res.data.managerId)
            setDateJoined(res.data.dateJoined)
            setDesignation(res.data.designation)
            setExtraLeave(res.data.extraLeave)
            setEmp(res.data)
        setEmpData(res.data)
      }
      callApi(empId)
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
      <div className="App" style={{ paddingTop: 90, paddingBottom: 90 }} >
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        {/* <nav><button type="button" class="btn btn-outline-secondary btn-lg" onClick={handleSubmit}>Back To DashBoard</button></nav><br /><br /> */}
        <nav><button type="button" class="btn btn-outline-secondary btn-lg" onClick={handleSubmit} style={{border:"black 1px solid", color:"white"}}>Back To DashBoard</button></nav><br /><br />
         <table className="table table-striped fluid-container" border='1px' cellPadding={20} align={'center'} >
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
                  <tbody>
                        <tr style={{color:"#F8EDE3"}}>
 
                            <td >{empId}</td>

                            <td >{empName}</td>

                            <td >{empEmail}</td>   

                            <td>{empAddress}</td>

                            <td >{empPhone}</td>

                            <td>{dateJoined}</td>

                            <td>{designation}</td>

                            <td>{leaveBalance}</td>
                    </tr>
                  </tbody>
        </table>
        
     
      </div>
    );
}
export default EmpDetailsById