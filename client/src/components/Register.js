import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const Register = (props) => {
    const {rHeading} = props
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [contact, setcontact] = useState('')
    const navigate = useNavigate();

    const registerUser = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                contact,
            })
        })
        const data = await response.json();
        console.log(data)
        if(data.status === 'ok'){
            navigate('/login')
        }else{
            alert('if u are Already a user then logn')
            navigate('/login')
        }

    }





    return (
        <div className="container contactContainer">
            <h2>{rHeading}</h2>
            <form action="" onSubmit={registerUser}>
                <label htmlFor="name">Enter Your Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder='name'
                />
                <label htmlFor="name">Enter Your Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder='email'
                />
                <label htmlFor="name">Enter Your Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder='password'
                />
                <label htmlFor="name">Enter Your Contact No.:</label>
                <input
                    type="contact"
                    value={contact}
                    onChange={(e) => setcontact(e.target.value)}
                    placeholder='contact No'
                />
                
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}
