import React from 'react';
import Bootons  from './booton';
type CountPageTipes = {
    classs: string
    maxValue: number
    maxCount: number
    minCount: number
    minValue: number
    count: number
    title: string
    incCount: () => void
    decCount: () => void
    resCount: () => void
}

const CountPage = (props:CountPageTipes) => {

    const {
        classs,
        maxValue,
        maxCount,
        minCount, 
        minValue, 
        count,
        title,
        incCount,
        decCount,
        resCount
    } = props;

    
    if (maxValue === maxCount && minCount === minValue) {
        return (
            <div>
                <div className={`norm`}>
                {
                   count            
                }
                
                </div>
            <Bootons 
            callBackBtn={incCount}
            disabled={count >= maxCount}
            title={'INC'}/>
            <Bootons 
            callBackBtn={decCount}
            disabled={count === minCount}
            title={'DEC'}/>
            <Bootons 
            callBackBtn={resCount}
            disabled={count <= minCount}
            title={'RES'}/>
            
            
        </div>
        )
    } else  {
        return (
           
            <div className={`${classs}`}>
            {
                title            
            }
            
            </div>
        )
    }


    
}


export default CountPage;