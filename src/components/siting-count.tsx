import React, {ChangeEvent} from 'react';
import s from './siting-count.module.css';
import Bootons from "./Button";
type SitingType = {
    setMaxCountCallBack: (e:ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    minValue: number
    setMinCountCallBack:(e:ChangeEvent<HTMLInputElement>) => void
    saveValueCount: () => void
    saveDisable: boolean
    errorValue: boolean

}

const SitingCount = ({
    setMaxCountCallBack, 
    maxValue, 
    minValue, 
    setMinCountCallBack,
    saveValueCount,
    saveDisable,
    errorValue
    }:SitingType) => {
    const inputClass = errorValue ? s.error_value : s.input_norm;

    return (
        <div className={s.counter_siting}>
         <div className={s.input_wrapper}>
             <span>Max Value:</span>
             <input
                 className={inputClass}
                 type='number'
                 value={maxValue}
                 onChange={setMaxCountCallBack}/>
         </div>
        <div className={s.input_wrapper}>
            <span>Min Value:</span>
            <input
                className={inputClass}
                type='number'
                value={minValue}
                onChange={setMinCountCallBack}/>
        </div>
       
        <Bootons callBackBtn={saveValueCount}
                 disabled={saveDisable}
                 title={'Save'}
                 />
      </div>
    )
}

export default SitingCount;