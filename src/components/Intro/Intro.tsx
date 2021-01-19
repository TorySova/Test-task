import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import newPhone from '../../common/img/chat.png'
import s from './Intro.module.css'

export const Intro = () => {
    return (
        <div className={s.intro}>
            <div className={s.header}>
                Создайте филиал или магизин с нуля в Telegram, автоматизируйте прожажи
            </div>
            <div className={s.discription}>
                лучшая платформа с автоматизированным приемом платежей в Bitcoin
            </div>
            <div className={s.buttonWrap}>
                <NavLink to="/profile" className={s.button}>🚀 Начать бесплатно </NavLink>
            </div>
            <div className={s.discription2}>
                Регистрация не требуется
            </div>
            <div className={s.image}>
                <img src={newPhone} alt="phone" />
            </div>
        </div>
    )
}
