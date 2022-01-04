import React , { useState } from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import Login from '../Login/Login'
import './Homepage.css'

function Homepage() {
    const [email, setEmail] = useState('')
    const [signIn , setSignIn] =  useState(false)

    const handleSignIn = () => {
        setSignIn(true)
    }

    return (
        <>
        <div className='login-page-container'>
        <div className="linear-gradient" />
        <Navbar />

        { signIn ? ( <Login email={email} />) : 
        <div className="header-card">
            <div className="title">
                <div className='heading-container'>
                    <span className='head-1'>Unlimited movies, TV</span>
                    <span className='head-1'>shows and more.</span>
                    <span className='head-2'>Watch anywhere. Cancel anytime.</span>
                    <span className='head-3'>Ready to watch? Enter your email to create or restart your membership.</span>
                </div>
            </div>
            <div className="email-address-input">
                <input type="text" placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={handleSignIn}> Get Started </button>
                
            </div>
           
        </div>
}
        </div>
    </>
    )
}

export default Homepage
