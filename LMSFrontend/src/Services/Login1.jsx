import React, { useState } from "react";
import { Form } from "reactstrap";
import { Button } from "bootstrap";
import UserList from "./UserList";
//import "./Login.css";
import axios from "axios";
import { createSearchParams, useNavigate} from "react-router-dom";

export default function Login1() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage]=useState('');        
   var message1='sample'
   const navigate=useNavigate();
  function validateForm() {
    return username.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {
    event.preventDefault();
  
    axios.get('https://localhost:44365/api/UserLogins?username='+username+'&password='+password)
          .then((result) => {
              this.setMessage({message:result.data.userid})
            message1=result.data.userid;
            message=message1;
            });
                alert(message1)
          navigate('/userlist',{
                  state:{
                      userid:message1
                  }
              });
         
       
    }
  return (
    <div>
        <form>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)} ></input>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="text" className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ></input>
            </div>
            <div className="form-group">
              <input type="submit" value="login" onClick={handleSubmit} />
            </div>

            {/* <p>{this.message}</p> */}
        </form>
    </div>
  )
  }
  