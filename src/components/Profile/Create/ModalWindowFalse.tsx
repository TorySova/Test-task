import s from './ModalsWindowFalse.module.css'

type PropsType = {
    setModal: (boolean: boolean) => void
}

export const ModalWindowFalse = (props: PropsType) => {
    return (
        <div>
            <div className={s.greetingMessage}>
                Добро пожаловать в лучший магазин с отправкой Новой Почтой. Найдется все!
              </div>
            <div className={s.goToMenu}>
                <div style={{ color: " rgb(81, 150, 255)" }}>В главное меню</div>
                <div>Приветсвенное сообщение</div>
            </div>
            <div className={s.addButton} onClick={() => props.setModal(true)}>
                ➕ Добавить кнопку
              </div>
        </div>
    )
}