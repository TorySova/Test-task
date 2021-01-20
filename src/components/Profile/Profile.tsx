import React from 'react'
import s from './Profile.module.css'
import { Structure } from './Structure/Structure';
import { Settings } from './Settings/Settings';
import { Create } from './Create/Create';

export const Profile = () => {
    return (
        <div className={s.profileWrap}>
            <Structure/>
            <Settings />
            <Create />           
        </div>
    )
}
