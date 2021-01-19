import React, { useState } from 'react'
import s from './BlockCreate.module.css'
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import { ModalsWindowTrue } from './ModalsWindowTrue';
import { ModalsWindowFalse } from './ModalsWindowFalse';

export const BlockCreate = () => {
    const [modal, setModal] = useState(false)
    return (
        <div className={s.create}>
            <div style={{ marginTop: '10px' }}>Приветсвенное сообщение</div>
            <div className={s.image}>
                <img src="https://neri-karra.com.ua/content/uploads/images/4.jpg" alt="" />
            </div>
            <div className={s.addImg}>
                <div className={s.text}>Прикрепить картинку</div>
                <div>
                    <Switch checkedChildren="on" unCheckedChildren="off" defaultChecked />
                </div>
            </div>
            {
                modal ? <ModalsWindowTrue setModal={setModal} /> : <ModalsWindowFalse setModal={setModal} />
            }


        </div>
    )
}



