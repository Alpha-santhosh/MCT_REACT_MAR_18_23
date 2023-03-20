import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { GoblaData } from '../../../App'
import './login.css'

function LoginForm() {
    const { setloginState } = useContext(GoblaData);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setloginState(true);
    }
    return (
        <div className='login-form'>
            <div className='Login-form-title'>Welcome back to Pretty Login</div>
            <div className='login-form-para'>it's greate to have you back!</div>

            <form onSubmit={handleSubmit(onSubmit)}  >

                <input type="text" placeholder='Email *' {...register("email", {
                    required: "Email is required.",
                    pattern: {
                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email is not valid."
                    }
                })} />
                {errors.email && <p className='error-msg'>{errors.email.message}</p>}

                <input type="password" placeholder='password *' {...register("password", {
                    required: "Password is required.",
                    minLength: {
                        value: 6,
                        message: "Password should be at-least 6 characters."
                    },
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                        message: "Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol",
                    }
                })} />
                {errors.password && <p className='error-msg'>{errors.password.message}</p>}

                <div className="login-form-middle">
                    <label htmlFor="rm"><input className="checkBox" id='rm' type="checkbox" /> Remember me?</label>
                    <label htmlFor="">Forgot password?</label>
                </div>
                <div className="login-btns">
                    <button className='login-btn-form' type='submit'>LOGIN</button>
                    <button className='login-btn-form'>CREATE ACCOUNT</button>
                </div>
                <div className="login-footer">
                    Or login with <br /><span className='login-social-media'>Facebook Google</span>
                </div>
            </form>
        </div >
    )
}

export default LoginForm