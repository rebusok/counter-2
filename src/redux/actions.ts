export enum ACTIONS_TYPE {
    CHANGE_COUNTER_INC = 'CounterExchange/CHANGE_COUNTER_INC',
    CHANGE_COUNTER_DEC = 'CounterExchange/CHANGE_COUNTER_DEC'
}

export type ChangeCounterINC ={
    type: ACTIONS_TYPE.CHANGE_COUNTER_INC
    counter:number
}
export type ChangeCounterDEC ={
    type: ACTIONS_TYPE.CHANGE_COUNTER_DEC
    counter:number
}

export const ChangeCounterINCAC = (counter:number):ChangeCounterINC => {
    return {type: ACTIONS_TYPE.CHANGE_COUNTER_INC, counter}
}
export const ChangeCounterDECAC = (counter:number):ChangeCounterDEC => {
    return {type: ACTIONS_TYPE.CHANGE_COUNTER_DEC, counter}
}

export type CounterReducersTypes = ChangeCounterINC | ChangeCounterDEC;