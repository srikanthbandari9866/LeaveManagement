import React from 'react';
import './layout.css';
import {  useNavigate} from "react-router-dom";

function ScreenLayout() {
    const navigate = useNavigate(); 
    function handleSubmit() {
        navigate('/Login')
    }
    return (
        <div  >
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        <div className='layout' style={{paddingTop:80 , margin:50, paddingBottom:200 ,backgroundColor:"lightblue", borderRadius:"20px"}}>
                <div>
                    {/* <h1>Hexaware Technologies</h1> */}
                    {/* <h2 className="H1"><b><marquee behavior="scroll" width="80%" direction="left" scrollamount="20">Leave Management Application</marquee></b></h2><br /><br /><br /> */}
                    {/* <h2 className="H1"><b>Leave Management Application</b></h2><br /><br /><br /> */}
                    <h2 className="H1"><b><marquee behavior="alternate" width="80%" direction="left">Leave Management Application</marquee></b></h2><br /><br /><br />
                    {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehmY_bweegW8oYYoHJ6H2JApp_WOfTPIBM6ikcRmcfuehkLto" alt="" /> */}
             </div>
                
            <div className="btn">
            
                    <button type="button" class="btn btn-secondary btn-lg" style={{}} onClick={handleSubmit} >Login</button>
            </div>
            </div>
            <div className='blink'>
                <h3>© 2022 Hexaware Technologies, Chennai</h3>
            </div>
        </div>
        
    )
}
export default ScreenLayout