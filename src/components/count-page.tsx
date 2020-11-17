import React from 'react';
import Button  from './Button';
import s from './count-page.module.css';
import icon from './simpsons_PNG65.png'
import icon2 from './pngegg.png';
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
                    errorValue ? <div className={s.img_icon}>
                        <span> Incorret value!</span>
                        <img src={icon} alt={'errr'}/>
                    </div> : valueSiting ? <div className={s.img_icon2}>
                        <span> Save siting!</span>
                        <img src={icon2} alt={'errr'}/>
                    </div> :count
                }


            </div>
        <div className={s.button_wrapper}>
            <Button
                callBackBtn={incCount}
                disabled={disableIncBtn}
                title={'INC'}/>
            <Button
                callBackBtn={decCount}
                disabled={disableDecBtn}
                title={'DEC'}/>
            <Button
                callBackBtn={resCount}
                disabled={disableResBtn}
                title={'RES'}/>
        </div>


    </div>
    )



    
}


export default CountPage;