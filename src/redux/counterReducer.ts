
const initialState = {
    value: {
        minValue: 0,
        maxValue: 7
    },
    count: 0,
    disableBtn: {
        disableSaveBtn: true,
        disableIncBtn: false,
        disableDecBtn: true,
        disableResBtn: true
    },
    valueSiting: false,
    initNum: 7
}
type DisableBtnType = {
    disableSaveBtn: boolean
    disableIncBtn: boolean
    disableDecBtn: boolean
    disableResBtn: boolean
}
type ValueType = {
    minValue: number
    maxValue: number
}

type CounterStateType = {
    value: ValueType
    count: number
    disableBtn: DisableBtnType
    valueSiting: boolean
    initNum: number
}


export const counterReducer = (state:CounterStateType = initialState, action:any):CounterStateType => {
    switch (action.type){
        default:
            return state
    }
}