import React, { useEffect, useState } from 'react'
import "./login.css"
import axios from 'axios';
function Login({Switch, user, setUser}) {

    const [phone, setPhone] = useState(user?.phone);
    const [password, setPassword] = useState(user?.password)
    const [rememberMe, setRememberMe] = useState(true)
    const [error, setError] = useState(false)
    
    const LoginUser = async(e) => {
    if(e) e.preventDefault();
        setError(false)
        console.log(user)
        try {
            const response = await axios.get("api/users/getUser", {
                params: {
                    phone,
                    password
                }
            })
            if(response.status === 200) {
                setUser(response.data)
                if(rememberMe) localStorage.setItem("user", JSON.stringify(response.data))
                Switch({initialRef: ".login-page"})
            }
        } catch(err) {
            console.log(err)
            setError("Invalid Credentials")
        }
    }
  return (
        <section className='login-page'>
        <div className="form-box">
        <button onClick={() => Switch({initialRef: ".login-page"})} className="close-button"></button>
            <div className="form-value">
                <form onSubmit={LoginUser}>
                    <h2 className='page-header'>Login</h2>
                    <div className="inputbox">
                    <ion-icon name="phone-portrait-outline"></ion-icon>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" required/>
                        <label >Phone</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required/>
                        <label >Password</label>
                    </div>
                    <div className="forget">
                        <label><input checked={rememberMe} onChange={() => setRememberMe(prev => !prev)} type="checkbox"/>Remember Me  </label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button className='submit-button'>Log in</button>
                    {error && <p className="error-text">{error}</p>}
                    <div className="register">
                        <p>Don't have a account? </p> 
                        <a href="#" onClick={() => Switch({initialRef: ".login-page", finalRef: ".register-page"})} >Register</a>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Login