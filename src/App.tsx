import React, { useState, ChangeEvent } from 'react';
import CountPage from './components/count-page';
import './App.css';
import SitingCount from './components/siting-count';
const  App = () => {  
  
  const [maxValue, setMaxValue] = useState<number>(7);
  const [minValue, setMinValue] = useState<number>(0);
  const [count, setCount] = useState<number>(minValue);
  const [disableSaveBtn, setDisableSaveBtn] = useState<boolean>(true)
  const [disableIncBtn, setDisableIncBtn] = useState<boolean>(false);
  const [disableDecBtn, setDisableDecBtn] = useState<boolean>(true);
  const [disableResBtn, setDisableResBtn] = useState<boolean>(true);
  const [valueSiting, setValueSiting] = useState<boolean>(false)


  const errorValue = maxValue <= minValue;
  const saveDisable = errorValue || disableSaveBtn;
  const incCount = () => {
    if (count < maxValue){
      setCount(count + 1)
      setDisableDecBtn(false);
      setDisableResBtn(false);
    }

  }



  const decCount = () => {
    if(count !== minValue){
      setCount(count - 1);
      setDisableIncBtn(false);
    } else {
      setCount(minValue);
      setDisableDecBtn(true);
    }

  }

  const resCount  = () => {
    setCount(minValue);
    setDisableIncBtn(false);
    setDisableDecBtn(true);
    setDisableResBtn(true);
  }
  const setMaxValueCallBack = (e:ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value >= 0){
      setMaxValue(+e.currentTarget.value);
    }
    setDisableSaveBtn(false);
    setDisableIncBtn(true);
    setDisableDecBtn(true);
    setDisableResBtn(true);
    setValueSiting(true);

    
  }
  const setMinValueCallBack = (e:ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value >= 0){
      setMinValue(+e.currentTarget.value);
    }
    setDisableSaveBtn(false);
    setDisableIncBtn(true);
    setDisableDecBtn(true);
    setDisableResBtn(true);
    setValueSiting(true);

  }
  const saveValueCount = () => {
    setCount(minValue);
    setDisableSaveBtn(true);
    setDisableIncBtn(false);
    setDisableIncBtn(false);
    setValueSiting(false);
    
  }
  

  return (
    <div className="App">
      
      
      <SitingCount  setMaxCountCallBack={setMaxValueCallBack}
        maxValue={maxValue}
        minValue={minValue}
        setMinCountCallBack={setMinValueCallBack}
        saveValueCount={saveValueCount}
        saveDisable={saveDisable}
        errorValue={errorValue}
        />

    <CountPage
          maxValue={maxValue}
          minValue={minValue}
          count={count}
          incCount={incCount}
          decCount={decCount}
          resCount={resCount}
          disableIncBtn={(count === maxValue) ? true : disableIncBtn}
          disableDecBtn={(count === minValue) ? true : disableDecBtn}
          disableResBtn={(count === minValue) ? true : disableResBtn}
          valueSiting={valueSiting}
          errorValue={errorValue}/>
    </div>
    
  );
}

export default App;
