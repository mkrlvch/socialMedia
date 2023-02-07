import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return <header className={s.header}>
            <img src='https://w7.pngwing.com/pngs/741/198/png-transparent-heart-pink-peach-love-love-painted-simple.png'/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>

        </header>
}
export default Header