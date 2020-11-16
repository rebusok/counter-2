import React from 'react';
import './booton.css';

type ButtonTipes = {
    callBackBtn: () => void 
    disabled: boolean
    title: string
}


const Bootons = (props:ButtonTipes) => {
    const {callBackBtn, disabled, title} = props;
    return (
    <button className='buttons' onClick={callBackBtn} disabled={disabled}> {title}</button>
    )


}



export default Bootons;