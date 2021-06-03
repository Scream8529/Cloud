import React, { useState } from 'react'
import { registration } from '../../actions/user'

export default function Registration() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const regUser =(email, password)=>{
        
        registration(email, password)
    }

    return (
        <div className="formContent">
            <h3>Registration</h3>
            <div className="row">
                <form className="black-text" onSubmit={(e)=>{e.preventDefault()}}>
                    <div className="row">

                        <div className="input-field ">
                            <i className="material-icons prefix">edit</i>
                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} id="login" type="email" className="validate" />
                            <label htmlFor="login">Email</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">edit</i>
                            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div>
                            <button onClick={()=>{regUser(email, password)}} className="waves-effect waves-light btn blue darken-3 col s6 offset-s6">Registration</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
