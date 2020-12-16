import {ACTIONS_TYPE, CounterReducersTypes} from "./actions";

const initialState = {
    value: {
        minValue: 0,
        maxValue: 7
    },
    counter: 0,
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
    counter: number
    disableBtn: DisableBtnType
    valueSiting: boolean
    initNum: number
}


export const counterReducer = (state:CounterStateType = initialState, action:CounterReducersTypes):CounterStateType => {
    switch (action.type){
        case ACTIONS_TYPE.CHANGE_COUNTER_INC:
            return {
                ...state,
                counter: action.counter + 1
            }
        case ACTIONS_TYPE.CHANGE_COUNTER_DEC:
            return {
                ...state,
                counter: action.counter - 1
            }
        default:
            return state
    }
}