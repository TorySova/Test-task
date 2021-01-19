export type structureType = {
    name: string
    img: string
}[]
export type blocksType = {
    headerBlocks: string;
    buttons: {
        button: string;
    }[],
}[]
export type stateType = {
    structure: structureType
    blocks: blocksType
}

export const state: stateType = {
    structure: [
        { name: 'Структура1', img: '' },
        { name: 'Структура2', img: '' },
        { name: 'Структура3', img: '' },
        { name: 'Структура4', img: '' },
    ],
    blocks: [
        {
            headerBlocks: 'основные компоненты',
            buttons: [
                { button: 'Главное меню' },
                { button: 'Главное меню' },
                { button: 'Главное меню' },
                { button: 'Главное меню' }
            ]

        },
        {
            headerBlocks: 'категории',
            buttons: [
                { button: 'Главное меню' },
                { button: 'Главное меню' },
                { button: 'Главное меню' },
            ]
        },
        {
            headerBlocks: 'подкатегории киев',
            buttons: [
                { button: 'Главное меню' },
            ]
        },
        {
            headerBlocks: 'товары киев',
            buttons: [
                { button: 'Главное меню' },
                { button: 'Главное меню' },
                { button: 'Главное меню' },
            ]
        },
    ]
}