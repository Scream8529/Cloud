import React from 'react'

export default function Login() {
    return (
        <div className="formContent">
        <h3>Login</h3>
            <div className="row">
                <form className="black-text">
                    <div className="row">
                        <div className="input-field ">
                            <i className="material-icons prefix">edit</i>
                            <input id="login" type="email" className="validate" />
                            <label htmlFor="login">Email</label>
                        </div>
                        <div className="input-field">
                            <i className="material-icons prefix">edit</i>
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div>
                        <button className="waves-effect waves-light btn blue darken-3 col s6 offset-s6">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
