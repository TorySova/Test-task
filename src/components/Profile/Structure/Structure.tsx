import React from 'react'
import s from './Structure.module.css'
import str from '../../../common/img/str.png'

export const Structure = () => {
    return (
        <div className={s.structure}>
            <div className={s.item} >
                <img src={str} alt="boxImg" />
                <div>Блок 1</div>
            </div>
            <div className={s.item}>
                <img src={str} alt="boxImg" />
                <div>Блок 2</div>
            </div>
            <div className={s.item}>
                <img src={str} alt="boxImg" />
                <div>Блок 3</div>
            </div>
            <div className={s.item}>
                <img src={str} alt="boxImg" />
                <div>Блок 4</div>
            </div>
        </div>
    )
}
