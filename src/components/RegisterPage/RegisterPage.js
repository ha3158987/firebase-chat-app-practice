import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
    const { register, watch, formState: { errors }} = useForm()
    console.log(watch("email"))
    console.log(errors) //? erros 객체에 아무것도 안담김.
    return (
        <div className="auth-wrapper">
            <div style={{textAlign: 'center'}}>
                <h3>Register</h3>
            </div>
             <form >
                <label>Email</label>
                <input name="email" type="email" ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
                {errors.email && <p>위 항목은 필수정보입니다.</p>}
                <label>name</label>
                <input name="name"/>
                <label>Password</label>
                <input name="password" type="password" />
                <label>Password Confirm</label>
                <input name="password_confirm" type="password" />
                <input type="submit" />
                <Link style={{color: "gray", textDecoration: 'none'}} to="/login">이미 아이디가 있으신가요?</Link>
            </form>

        </div>
    )
}

export default RegisterPage;