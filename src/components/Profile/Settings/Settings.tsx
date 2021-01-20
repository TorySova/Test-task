import React from 'react'
import s from './Settings.module.css'
import 'antd/dist/antd.css';
import { Button } from 'antd';

export const Settings = () => {
    return (
        <div className={s.blocks}>
            <div className={s.block}>
                <div style={{ fontSize: "17px" }}>Блоки вашего бота</div>
                <div style={{ fontSize: "12px", marginTop: '5px' }}>Ваш бот состоит из блоков с контентом. Блоки можно сравнивнить со страничками на сайте</div>
                <button className={s.buttonGreeting1}>
                    <div style={{ fontSize: "17px" }}>
                        Приветсвенное сообщение
                        </div>
                    <div>
                        Каждый человек при старте диалога увидит это сообщение первым
                        </div>
                </button>
                <button className={s.buttonGreeting}>
                    <div style={{ fontSize: "17px" }}>
                        Приветсвенное сообщение
                        </div>
                    <div>
                        Каждый человек при старте диалога увидит это сообщение первым
                        </div>
                </button>
            </div>
            <div className={s.block}>
                <div>Основные компоненты</div>
                <div className={s.buttonGroup}>
                    <Button size={'small'}>главное меню</Button>
                    <Button size={'small'}>о нас</Button>
                    <Button size={'small'}>каталог</Button>
                    <Button size={'small'}>мой баланс</Button>
                </div>
            </div>
            <div className={s.block}>
                <div>Категории</div>
                <div className={s.buttonGroup}>
                    <Button size={'small'}>Киев</Button>
                    <Button size={'small'}>Запорожье</Button>
                    <Button size={'small'}>Харьков</Button>
                </div>
            </div>
            <div className={s.block}>
                <div>Подкатегории Киев</div>
                <div className={s.buttonGroup}>
                    <Button size={'small'}>➕</Button>

                </div>
            </div>
            <div className={s.block}>
                <div>Товары Киев</div>
                <div className={s.buttonGroup}>
                    <Button size={'small'}>Candy nut</Button>
                    <Button size={'small'}>Choco Lapki</Button>
                    <Button size={'small'}>Choco Lapki</Button>
                </div>
            </div>
        </div>
    )
}
