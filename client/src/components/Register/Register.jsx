import axios from 'axios'
import React, { useState } from 'react'

function Register({Switch, setUser}) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [error, setError] = useState(false)
    const RegisterUser = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const response = await axios.post("api/users/createUser", {
                name,
                email,
                phone,
                password,
            });
            if(response.status === 200) {
                setUser(response.data)
                Switch({initialRef: ".register-page"})
            }
        } catch (e) {
            console.log(e)
            setError(true)
        }
    }

  return (
    <section className='register-page' >
        <div className="form-box">
        <button onClick={() => Switch({initialRef: ".register-page"})} className="close-button"></button>
            <div className="form-value">
                <form onSubmit={RegisterUser}  >
                    <h2 className='page-header'>Register</h2>
                    <div className="inputbox">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" required/>
                        <label>Name</label>
                    </div> 
                    <div className="inputbox">
                    <ion-icon name="email-outline"></ion-icon>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required/>
                        <label>Email</label>
                    </div> 
                    <div className="inputbox">
                    <ion-icon name="phone-portrait-outline"></ion-icon>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (123) 456 78 99" type="tel" required/>
                        <label >Phone</label>
                    </div> 
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required/>
                        <label>New password</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} type="password" required/>
                        <label >Repeat password</label>
                    </div>
                   
                    <button className='submit-button' disabled={password !== repeatPassword} >Register</button>
                    {error && <p className="error-text">Unable to create an account</p>}
                    <div className="register">
                        <p>Already have an account? </p> 
                        <a href="#" onClick={() => Switch({initialRef: ".register-page", finalRef: ".login-page"})} >Login</a>
                    </div> 
                </form>
            </div>
        </div>
    </section>
  )
}

export default Register