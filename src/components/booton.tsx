import React from 'react';

type ButtonTipes = {
    callBackBtn: () => void 
    disabled: boolean
    title: string
}


const Bootons = (props:ButtonTipes) => {
    const {callBackBtn, disabled, title} = props;
    return (
    <button onClick={callBackBtn} disabled={disabled}> {title}</button>
    )


}



export default Bootons;