import React from 'react'
import Navbar from '../../Components/NavBar/Navbar';
import './Login.css'

function Login(props) {
    return (
    <>
        
        <div className="showcase-content">
            <div className="formm">
                <form>
                    <h1>Sign In</h1>
                    <div className="info">
                        <input className="email" type="email" placeholder="Email or phone number" value={props.email} /> <br />
                        <input className="email" type="password" placeholder="Password" />
                    </div>
                    <div className="btn">
                            <button className="btn-primary" type="submit">Sign In</button>
                    </div>
                    <div className="help">
                        <div style={{display:'flex',alignItems:'center'}}>
                            <input value="true" type="checkbox" /><label style={{color:'#999'}}>Remember me</label>
                        </div>
                        <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
                    </div>
                </form>
            </div>
         </div> 
    </>
    )
}

export default Login;
