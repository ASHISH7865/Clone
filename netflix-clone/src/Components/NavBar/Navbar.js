import React from 'react'; 
import Netflix from '../../assets/Netflix.png'
import './Navbar.css'

function Navbar() {
    return (
        <>
        <div className='netflix-navbar'>
            <div className="netflix-logo">
                <img src={Netflix} alt="Netflix-logo" width='200px'  height='100px' />
            </div>
            <div className='netflix-navbar-sign-in'>
                <button>Sign In</button>
            </div>
        </div>
        </>
    )
}

export default Navbar
