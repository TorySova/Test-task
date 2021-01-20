import { Button, Input, Select } from 'antd'
import s from './ModalWindowTrue.module.css'

type ModalsWindowTruePropsType = {
    setModal: (boolean: boolean) => void
}

export const ModalWindowTrue = (props: ModalsWindowTruePropsType) => {
    const { Option, OptGroup } = Select;
    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }
    return (
        <div className={s.modalsTrue}>
            <div className={s.buttonClose}>
                <div onClick={() => props.setModal(false)}>✖</div>
            </div>
            <div className={s.input}>
                <div>Добавить новую кнопку</div>
                <div>
                    <Input placeholder="Название кнопки" />
                </div>
            </div>
            <div>
                <a href="#">Block</a>
                <a href="#"> Url</a>
            </div>
            <div>
                <div>Перенаправление в блок</div>
                <div>
                    <Select defaultValue="Товар1" style={{ width: 190 }} onChange={handleChange}>
                        <OptGroup label="Категория1">
                            <Option value="Товар1">Товар1</Option>
                        </OptGroup>
                        <OptGroup label="Категория2">
                            <Option value="Товар2">Товар2</Option>
                        </OptGroup>
                    </Select>
                </div>
            </div>
            <div className={s.button}>
                <Button type="primary" size='small'>+ Добавить</Button>
            </div>
        </div>
    )
}