import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterPage = () => {
    const { register, watch, formState: { errors }, handleSubmit} = useForm();
    const [errorFromSubmit, setErrorFromSubmit] = useState("");
    const [loading, setLoading] = useState(false);

    const password = useRef();
    password.current = watch("password"); // *password 인풋에 들어오는 값을 담음.

    const onSubmitForm = async (data) => {
        //* firebase에 이메일과 비번을 만들어주기
        //* data로 react-hook-form의 input에 들어온 정보들이 들어온다.

        try {
            const auth = getAuth();
            let createdUser = await createUserWithEmailAndPassword(auth, data.email, data.password)

        } catch (err) {
            console.log("err", err);
            setErrorFromSubmit(err.message)
            setTimeout(() => {
                setErrorFromSubmit("")
            }, 5000)
        }
    }

    return (
        <div className="auth-wrapper">
            <div style={{textAlign: 'center'}}>
                <h3>Register</h3>
            </div>
             <form onSubmit={handleSubmit(onSubmitForm)}>
                <label>Email</label>
                <input name="email" type="email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})}/>
                {errors.email && <p>위 항목은 필수정보입니다.</p>}
                <label>name</label>
                <input name="name" {...register("name", {required: true, maxLength: 10 })}/>
                {errors.name && errors.name.type === "required" && <p>위 항목은 필수정보입니다.</p>}
                {errors.name && errors.name.type === "maxLength" && <p>최대 입력가능길이를 초과하였습니다.</p>}
                <label>Password</label>
                <input name="password" type="password" {...register("password", {required: true, minLength: 6})}/>
                {errors.password && errors.password.type === "required" && <p>위 항목은 필수정보입니다.</p>}
                {errors.password && errors.password.type === "minLength" && <p>비밀번호는 최소 6자리 이상이어야 합니다.</p>}
                <label>Password Confirm</label>
                <input name="password_confirm" type="password" {...register("password_confirm", {required: true, validate: (value) => value === password.current})}/>
                {errors.password_confirm && errors.password_confirm.type === "required" && <p>위 항목은 필수정보입니다.</p>}
                {errors.password_confirm && errors.password_confirm.type === "validate" && <p>비밀번호와 일치하지 않습니다.</p>}
                {/* error가 있다면 여기서 보여주기 */}
                {errorFromSubmit && <p>(errorFromSubmit)</p>}
                <input type="submit" disabled={loading}/>
                <Link style={{color: "gray", textDecoration: 'none'}} to="/login">이미 아이디가 있으신가요?</Link>
            </form>

        </div>
    )
}

export default RegisterPage;