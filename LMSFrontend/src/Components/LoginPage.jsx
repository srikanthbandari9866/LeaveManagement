
import React, { useState, useEffect } from 'react';
import {  useNavigate} from "react-router-dom";
import Axios from 'axios';
import './LoginPage.css';
import EmpDetailsById from './EmpDetailsById';
import EmpDetails from './EmpDetails';
import { Form, Button } from 'semantic-ui-react';

import { useForm } from "react-hook-form";

import { browserHistory } from "react-router";


function Login() {
    const navigate = useNavigate(); 
    const [empId, setEmpId] = useState('')
    const [managerId, setManagerId] = useState();
    const [empData, setEmpData] = useState("");
    const [empUname, setEmpUname] = useState("");
    const [empPass, setEmpPass] = useState("");
    const [empName, setEmpName] = useState("");
    // const { register, handleSubmit, watch, errors } = useForm();
    // const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

    // function call(empId) {
    //   browserHistory.push("/empdetailsbyid/${empId}");
    // };
    const [formErrors, setFormErrors] = useState({});
    // const errors = {empUname: "", empPass: ""}
    function validateForm(event) {
        try {
            const errors = {empUname: "", empPass: ""}
            if(!empUname){
                errors.empUname = " * Username is required";
            }
           if(!empPass){
                errors.empPass = " * Password is required";
            }
            
            setFormErrors(errors);
            // if(empUname == "" && empPass == ""){
            //     alert("Enter username and password");
            // }
            // else if(empUname == "" ){
            //     alert("Enter username");
            // }
            // else if(empPass == ""){
            //     alert("Enter Password");
            // }    
        } catch (error) {
            
        }
        // event.preventDefault();
        console.log(empUname, empPass + "usernames")
        // if (empUname=='' || empPass=='') {
        //     alert("Please Enter the Username or Password ")
        //     return;
        // };
       
        Axios.get(`https://localhost:44311/api/Employees/login/${empUname}/${empPass}`)
            .then(response => {
                setEmpData(response.data)
                setEmpName(response.data.empName)
                setManagerId(response.data.managerId)
                
                console.log(empId)
                console.log("Name    " + empName)
                if (response.data.empId == undefined) {
                    alert("Invalid Login")
                }
                else if (response.data.level == 1) {
                    alert( "Welcome! " + response.data.empName);

                    navigate('/Dashboard',{
                        state:{
                            empId: response.data.empId,
                            managerId:response.data.managerId
                        }
                    });
                   
                }
                else if (response.data.level == 2) {
                    alert("Welcome! " + response.data.empName);
                    navigate('/Dashboard',{
                        state:{
                            empId: response.data.empId,
                            managerId:response.data.managerId
                        }
                    });
                    // window.location.href = `/EmpDetailsById/${response.data.empId}`
                    // <EmpDetailsById Id={ response.data.empId} />
                }
                else if (response.data.level == 3) {
                    alert("Welcome! " + response.data.empName);
                    navigate('/Dashboard',{
                        state:{
                            empId: response.data.empId,
                            managerId:response.data.managerId
                        }
                    });
                    // window.location.href = `/EmpDetailsById/${response.data.empId}`

                }
            },[empData])
            // console.log(empData)
  
    }

    return (
        <div style={{paddingTop:90 , margin:50, paddingBottom:90}} className="ll">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <div>
                {/* <h2  style={{ marginRight:'200px' }}>Login Screen</h2><br /><br /> */}
            </div>
            <form>
                
                 <div class="form-group row" >          
                        <label for="inputEmail3" class="col-sm-4 col-form-label" style={{color:"white" }}>User Name</label>
                        <div class="col-sm-3">
                        <input
                            onChange={(e) => { setEmpUname(e.target.value) }} 
                            type="text" class="form-control" name="username" placeholder="Username" />
                        <p style={{color:"brown"}}>{formErrors.empUname}</p>
                        {/* {errors.Username?.type === 'required' && "First name is required"} */}
                        {/* {errors.username && <p>This field is required</p>} */}
                        
   
                        </div>
                </div>
                
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-4 col-form-label" style={{color:"white" }}>Password</label>
                        <div class="col-sm-3">
                        <input
                            onChange={(e) => { setEmpPass(e.target.value) }} 
                            type="password" class="form-control" id="inputPassword3" placeholder="Password" required />
                        <p style={{color:"brown"}}>{formErrors.empPass}</p>
                    </div>
                    <div className='logs'>
                        <div class="text-center " style={{ marginTop: "70px", marginRight: "70px" }} >
                        {/* <input type="submit" value="Login" onClick={ validateForm.bind(this, empUname, empPass)}  /> */}
                        <button type="button" class="btn btn-primary btn-lg" 
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={validateForm.bind(this, empUname, empPass)}>Login</button>
                        </div>

                    </div> 
                </div>
               
            </form>
           
        </div>
    )
    
   
}
export default Login
 {/* <div class="text-center text-lg-start mt-4 pt-2">
                    <button type="button" class="btn btn-primary btn-lg"
                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }} onClick={ validateForm.bind(this, empUname, empPass)}>Login</button>
                    
                </div>  */}

// window.location.href = "/EmpDetails"
// window.location.replace("/EmpDetails")
// <EmpDetailsById Id={ empId} />
// navigation.navigate('Login', {
//     screen: 'EmpDetailsById',
//     params: { empId: response.data.empId },
//   });
// <EmpDetails />
// navigate("/EmpDetails");

// window.location.href = `/empdetailsbyid/${empId}`;

// <BrowserRouter>
//     <Routes>
//     <Route path="/EmpDetails" element={<EmpDetails />} />
//     </Routes>
// </BrowserRouter>
// <Router>
//     <Switch>

//         <Route exact path="/" component={Login} />
        
//         <Route path="/empdetailsbyid" component={EmpDetailsById} />

//     </Switch>
// </Router>




 {/* <div class="form-outline mb-4">
                <label class="form-label" for="form3Example3">Username</label>
                <input 
                    onChange={(e) => { setEmpUname(e.target.value) }}
                    value={empUname} placeholder="Enter a valid username" />
                
                </div>
                <div class="form-outline mb-3">
                    <label class="form-label " htmlFor="form3Example4" style={{marginLeft:"200"}}>Password</label>
                    <input type="password" 
                        placeholder="Password"
                        onChange={(e) => { setEmpPass(e.target.value) }} />
                    
                </div> */}