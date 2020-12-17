export enum ACTIONS_TYPE {
    CHANGE_COUNTER = 'CounterExchange/CHANGE_COUNTER',
    CHANGE_SITING = 'CounterExchange/CHANGE_SITING',
    CHANGE_BTN_DEC_DIS = 'CounterExchange/CHANGE_BTN_DEC_DIS',
    CHANGE_BTN_RES_DIS = 'CounterExchange/CHANGE_BTN_RES_DIS',
    CHANGE_BTN_SAVE_DIS = 'CounterExchange/CHANGE_BTN_SAVE_DIS',
    CHANGE_BTN_INC_DIS = 'CounterExchange/CHANGE_BTN_INC_DIS',
    CHANGE_VALUE_MIN = 'CounterExchange/CHANGE_VALUE_MIN',
    CHANGE_VALUE_MAX = 'CounterExchange/CHANGE_VALUE_MAX',

}

export type ChangeCounter ={
    type: ACTIONS_TYPE.CHANGE_COUNTER
    payload:{counter:number}
}
export const ChangeCounterINCAC = (counter:number):ChangeCounter=> {
    return {
        type: ACTIONS_TYPE.CHANGE_COUNTER,
        payload: { counter: counter + 1}
    }
}
export const ChangeCounterDECAC = (counter:number):ChangeCounter => {
    return {
        type: ACTIONS_TYPE.CHANGE_COUNTER,
        payload: { counter: counter - 1}
    }
}
export const ChangeCounterAC = (counter:number):ChangeCounter => {
    return {
        type: ACTIONS_TYPE.CHANGE_COUNTER,
        payload: {  counter }
    }
}
export type SetValueSiting ={
    type: ACTIONS_TYPE.CHANGE_SITING
    payload:{valueSiting:boolean}
}
export const SetValueSitingAC = (valueSiting:boolean):SetValueSiting => {
    return {
        type: ACTIONS_TYPE.CHANGE_SITING, payload: {valueSiting}
    }
}

export type SetBtnDecDes={
    type: ACTIONS_TYPE.CHANGE_BTN_DEC_DIS
    payload: { disableDecBtn:boolean }
}
export const SetBtnDesAC = (disableDecBtn:boolean):SetBtnDecDes => {

    return {
        type: ACTIONS_TYPE.CHANGE_BTN_DEC_DIS, payload: {disableDecBtn}
    }
}
export type SetBtnResDes={
    type: ACTIONS_TYPE.CHANGE_BTN_RES_DIS
    payload: { disableResBtn:boolean }
}
export const SetBtnResAC = (disableResBtn:boolean):SetBtnResDes => {

    return {
        type: ACTIONS_TYPE.CHANGE_BTN_RES_DIS, payload: {disableResBtn}
    }
}
export type SetBtnSaveDes={
    type: ACTIONS_TYPE.CHANGE_BTN_SAVE_DIS
    payload: { disableSaveBtn:boolean }
}
export const SetBtnSaveAC = (disableSaveBtn:boolean):SetBtnSaveDes => {

    return {
        type: ACTIONS_TYPE.CHANGE_BTN_SAVE_DIS, payload: {disableSaveBtn}
    }
}
export type SetBtnIncDes={
    type: ACTIONS_TYPE.CHANGE_BTN_INC_DIS
    payload: { disableIncBtn:boolean }
}
export const SetBtnIncAC = (disableIncBtn:boolean):SetBtnIncDes => {

    return {
        type: ACTIONS_TYPE.CHANGE_BTN_INC_DIS, payload: {disableIncBtn}
    }
}
export type SetValueMinDes={
    type: ACTIONS_TYPE.CHANGE_VALUE_MIN
    payload: { minValue:number }
}
export const SetValueMinAC = (minValue:number):SetValueMinDes => {

    return {
        type: ACTIONS_TYPE.CHANGE_VALUE_MIN, payload: {minValue}
    }
}
export type SetValueMaxDes={
    type: ACTIONS_TYPE.CHANGE_VALUE_MAX
    payload: { maxValue:number }
}
export const SetValueMaxAC = (maxValue:number):SetValueMaxDes => {

    return {
        type: ACTIONS_TYPE.CHANGE_VALUE_MAX, payload: {maxValue}
    }
}


export type CounterReducersTypes = ChangeCounter | SetValueSiting
    | SetBtnDecDes | SetBtnResDes | SetBtnSaveDes | SetBtnIncDes | SetValueMinDes | SetValueMaxDes;