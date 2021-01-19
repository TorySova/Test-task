import React from 'react'
import s from './BlockStructure.module.css'
import str from '../../../common/img/str.png'

export const BlockStructure = () => {
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
