import React, { useContext } from 'react'
import { GoblaData } from '../../../App'
import './login.css'

function LoginForm() {
    const { setloginState } = useContext(GoblaData);

    const handlelogin = () => {
        setloginState(true);
    }
    return (
        <div className='login-form'>
            <div className='Login-form-title'>Welcome back to Pretty Login</div>
            <div className='login-form-para'>it's greate to have you back!</div>

            <form>
                <input required autoFocus type="email" placeholder='Email *' />
                <input required type="password" placeholder='Password *' />
                <div className="login-form-middle">
                    <label htmlFor="rm">
                        <input className="checkBox" id='rm' type="checkbox" /> Remember me?
                    </label>
                    <label htmlFor="">Forgot password?</label>
                </div>
                <div className="login-btns">
                    <button className='login-btn-form' onClick={handlelogin} type='button'>LOGIN</button>
                    <button className='login-btn-form' type='submit'>CREATE ACCOUNT</button>
                </div>
                <div className="login-footer">
                    Or login with <br /><span className='login-social-media'>Facebook Google</span>
                </div>
            </form>
        </div>
    )
}

export default LoginForm