import React, {ChangeEvent} from 'react';

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
        <div>
         <input 
          type='number' 
          value={maxValue}
          onChange={setMaxCountCallBack}/>
        <input 
          type='number'
          value={minValue}
          onChange={setMinCountCallBack}
        />
       
        <button onClick={saveValueCount } disabled={maxValue <= minValue}> Save</button>
      </div>
    )
}

export default SititngCount;