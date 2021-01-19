import React from 'react'
import s from './NavBar.module.css'
import logo from '../../common/img/logo.png'

export const NavBar = () => {
    return (
        <div className={s.navBarWpap}>
            <div className={s.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={s.info}>
                <a href="">Помощь</a>
                <a href="">Новости</a>
                <a href="">Комьюнити</a>
                <a href="">Войти</a>
            </div>
        </div>
    )
}
