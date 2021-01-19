import React from 'react'
import s from './Profile.module.css'
import { BlockStructure } from './BlockStructure/BlockStructure';
import { BlockSettings } from './BlockSettings/BlockSettings';
import { BlockCreate } from './BlockCreate/BlockCreate';

export const Profile = () => {
    return (
        <div className={s.profileWrap}>
            <BlockStructure/>
            <BlockSettings />
            <BlockCreate />           
        </div>
    )
}
