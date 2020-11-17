import React from 'react';
import Bootons  from './booton';
import s from './count-page.module.css';
type CountPageTypes = {
    maxValue: number
    minValue: number
    count: number
    disableIncBtn:boolean
    disableDecBtn:boolean
    disableResBtn:boolean
    valueSiting: boolean
    errorValue: boolean
    incCount: () => void
    decCount: () => void
    resCount: () => void
}

const CountPage = (props:CountPageTypes) => {

    const {
        errorValue,
        valueSiting,
        disableIncBtn,
        disableDecBtn,
        disableResBtn,
        count,
        incCount,
        decCount,
        resCount,
        maxValue
    } = props;

    

    return (
        <div className={s.counter_body}>
            <div className={`${s.norm} ${s.text_count} ${errorValue ? s.text_red : valueSiting ? s.text_save : count ===
             maxValue ? s.count_equa : ''}`}>

                {
                    errorValue ? <span> Incorret value!</span> : valueSiting ? <span>Save siting</span> :count
                }


            </div>
        <Bootons
        callBackBtn={incCount}
        disabled={disableIncBtn}
        title={'INC'}/>
        <Bootons
        callBackBtn={decCount}
        disabled={disableDecBtn}
        title={'DEC'}/>
        <Bootons
        callBackBtn={resCount}
        disabled={disableResBtn}
        title={'RES'}/>


    </div>
    )



    
}


export default CountPage;