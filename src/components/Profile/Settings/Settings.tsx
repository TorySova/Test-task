import React from 'react'
import s from './Settings.module.css'
import 'antd/dist/antd.css';
import { Button } from 'antd';

export const Settings = () => {
    return (
        <div className={s.blocks}>
            <div className={s.block}>
                <div className={s.title}>Блоки вашего бота</div>
                <div style={{ fontSize: "12px", marginTop: '5px' }}>Ваш бот состоит из блоков с контентом. Блоки можно сравнивнить со страничками на сайте</div>
                <button className={s.buttonGreeting1}>
                    <div style={{ fontSize: "20px" }}>
                        Приветсвенное сообщение
                        </div>
                    <div>
                        Каждый человек при старте диалога увидит это сообщение первым
                        </div>
                </button>
                <button className={s.buttonGreeting}>
                    <div style={{ fontSize: "20px" }}>
                        Приветсвенное сообщение
                        </div>
                    <div>
                        Каждый человек при старте диалога увидит это сообщение первым
                        </div>
                </button>
            </div>
            <div className={s.block}>
                <div className={s.title}>Основные компоненты</div>
                <div className={s.buttonGroup}>
                    <button  className={s.button}>главное меню</button>
                    <button className={s.button}>о нас</button>
                    <button className={s.button}>каталог</button>
                    <button className={s.button}>мой баланс</button>
                </div>
            </div>
            <div className={s.block}>
                <div className={s.title}>Категории</div>
                <div className={s.buttonGroup}>
                    <button className={s.button}>Киев</button>
                    <button className={s.button}>Запорожье</button>
                    <button className={s.button}>Харьков</button>
                </div>
            </div>
            <div className={s.block}>
                <div className={s.title}>Подкатегории Киев</div>
                <div className={s.buttonGroup}>
                    <button className={s.button}>+</button>

                </div>
            </div>
            <div className={s.block}>
                <div className={s.title}>Товары Киев</div>
                <div className={s.buttonGroup}>
                    <button className={s.button}>Candy nut</button>
                    <button className={s.button}>Choco Lapki</button>
                    <button className={s.button}>Choco Lapki</button>
                </div>
            </div>
        </div>
    )
}
