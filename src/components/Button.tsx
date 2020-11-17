import React from 'react';
import s from './booton.module.css';

type ButtonTipes = {
    callBackBtn: () => void 
    disabled: boolean
    title: string

}


const Button = (props:ButtonTipes) => {
    const {callBackBtn, disabled, title} = props;
    return (
    <button className={`${s.buttons} ${(title === 'Save') ? s.long : ''}` } onClick={callBackBtn} disabled={disabled}> {title}</button>
    )


}



export default Button;