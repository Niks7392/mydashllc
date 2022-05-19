import React from 'react'
import { useState } from 'react'

export const Login = () => {
    // test registered acc admin@admin.com:admin 
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const loginUser = async (event) => {
        event.preventDefault();
        const response = await fetch('https://mydashllc.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'apllication/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json();
        if(data.User){
            localStorage.setItem('token', data.User)
            alert('login success')
            window.location.href = '/barchart'
        }else{
            alert('please check your email and password')
        }
        console.log(data)

    }




    return (
        <div className="container contactContainer">
            <h1>Login</h1>
            <form onSubmit={loginUser}>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder='email'
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder='password'
                />

                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
