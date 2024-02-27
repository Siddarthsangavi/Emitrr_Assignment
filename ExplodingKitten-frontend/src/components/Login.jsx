import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, fetchHighscore } from "../redux/slices/userSlice"
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`http://localhost:8080/points`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"username": email})
        })

        const json = await response.json();

        if (response.ok) {
            //Save user and token to local storage
            console.log("Here", json)
            localStorage.setItem('user', JSON.stringify(json));

            //Set user in authcontext i.e dispatch action
            dispatch(setUser(json))
            dispatch(fetchHighscore())
        }
    }

    return (
        <div className="bodyyyyyy">
            <div class="main">


                <div class="signup">
                    <form onSubmit={handleSubmit}>
                        <label for="chk" aria-hidden="true">Enter Your Username</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" required="true" />
                        <button className='buttonnnnn' type="submit">Play</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
