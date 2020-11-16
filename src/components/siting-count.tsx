import React, {ChangeEvent} from 'react';
import './siting-count.css';
type SitingType = {
    setMaxCountCallBack: (e:ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    minValue: number
    setMinCountCallBack:(e:ChangeEvent<HTMLInputElement>) => void
    saveValueCount: () => void
}

const SititngCount = ({
    setMaxCountCallBack, 
    maxValue, 
    minValue, 
    setMinCountCallBack, 
    saveValueCount}:SitingType) => {
    return (
        <div className='counter_siting'>
         <input 
          type='number' 
          value={maxValue}
          onChange={setMaxCountCallBack}/>
        <input 
          type='number'
          value={minValue}
          onChange={setMinCountCallBack}
        />
       
        <button className='buttons' onClick={saveValueCount } disabled={maxValue <= minValue}> Save</button>
      </div>
    )
}

export default SititngCount;