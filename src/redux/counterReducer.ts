import {ACTIONS_TYPE, CounterReducersTypes} from "./actions";

const initialState = {
    value: {
        minValue: Number(localStorage.getItem('minValue')) || 0,
        maxValue: Number(localStorage.getItem('minValue')) || 7
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
        case ACTIONS_TYPE.CHANGE_COUNTER:
            return {
                ...state,
                ...action.payload
            }
        case ACTIONS_TYPE.CHANGE_SITING:
            return {
                ...state,
                ...action.payload
            }
        case ACTIONS_TYPE.CHANGE_BTN_DEC_DIS:
            console.log(action.payload)
            console.log(state)
            return {
                ...state,
                disableBtn:{...state.disableBtn, ...action.payload}
            }
        case ACTIONS_TYPE.CHANGE_BTN_RES_DIS:
            return {
                ...state,
                disableBtn:{...state.disableBtn, ...action.payload}
            }
        case ACTIONS_TYPE.CHANGE_BTN_SAVE_DIS:
            return {
                ...state,
                disableBtn:{...state.disableBtn, ...action.payload}
            }
        case ACTIONS_TYPE.CHANGE_BTN_INC_DIS:
            return {
                ...state,
                disableBtn:{...state.disableBtn, ...action.payload}
            }
        case ACTIONS_TYPE.CHANGE_VALUE_MIN:
            return {
                ...state,
                value:{...state.value, ...action.payload}
            }
        case ACTIONS_TYPE.CHANGE_VALUE_MAX:
            return {
                ...state,
                value:{...state.value, ...action.payload}
            }
        default:
            return state
    }
}