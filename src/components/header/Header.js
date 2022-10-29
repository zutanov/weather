import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Header = ({setData, setStart}) => {

    const [city, setCity] = useState("")
    const handleInput = (e) => {
        setCity(e.target.value)
        }

    const handleEnterPress  = async(e) => {
        if (e.key === 'Enter') {
            setStart(true)
         setTimeout(async() => {
            const {data} = await axios (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af10c580fe01dc33a3d9c0fdb5c43c40`)
            setData(data)
            setStart(false)
            console.log(data)
         }, 3000)
        } 
    }



    return (
        <section className="header">
             
                <div className="header__top">
                <div className="container header__container s-between">
                    <h1 className="header__logo">Weather</h1>
                    <input onInput={handleInput} onKeyPress={handleEnterPress} className="header__search" placeholder="Search" type="text"/>
                </div>
                </div>
                <nav className="header__nav">
                <div className="container header__container">
                <NavLink to='/' className="header__link">
                    <span className='nav__link' >Today</span>
              
                    </NavLink>
                <NavLink to='/tomorrow' className="header__link">
                    <span className='nav__link' >Tomorrow</span>
              
                    </NavLink>
               </div>
                </nav>
        </section>
    )
}