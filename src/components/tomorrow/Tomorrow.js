import React from "react";
import { useState } from "react";
import axios from "axios";


export const Tomorrow = () => {

    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")

    const handleInput = (e) => {
        if (e.target.id === "login") {
            setLogin(e.target.value)
        } else if (e.target.id === "password") {
            setPass(e.target.value)
        }
    }

    const handleSubmit = async () => {
        const user = {
            username: login,
            password: pass
        }

        const config = {
            method : "post",
            url : 'https://fakestoreapi.com/auth/login',
            headers : {
                "Content-Type" : "application/json"
            },
            data : JSON.stringify(user)
        }

        try {
            const {data} = await axios(config)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
       
    }

    return (
        <section className="tomorrow">
            <div className="container">
                <input onInput={handleInput} id="login" type="text" placeholder="Login"/>
                <input onInput={handleInput} id="password" type="password" placeholder="Pass"/>
                <button onClick={handleSubmit} >Login</button>
            </div>

        </section>
    )
}