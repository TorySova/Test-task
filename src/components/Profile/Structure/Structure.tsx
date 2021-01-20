import React from 'react'
import s from './Structure.module.css'
import str from '../../../common/img/str.png'

export const Structure = () => {
    return (
        <div className={s.structure}>
            <div className={s.item} >
                <img src={str} alt="boxImg" />
                <div>Структура</div>
            </div>
            <div className={s.item}>
                <img src={str} alt="boxImg" />
                <div>Структура</div>
            </div>
            <div className={s.item}>
                <img src={str} alt="boxImg" />
                <div>Структура</div>
            </div>
            <div className={s.item}>
                <img src={str} alt="boxImg" />
                <div>Структура</div>
            </div>
        </div>
    )
}
