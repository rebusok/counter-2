import React, {ChangeEvent, useEffect} from 'react';
import CountPage from './components/count-page';
import './App.css';
import SitingCount from './components/siting-count';
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "./redux/store";
import {
  ChangeCounterAC,
  ChangeCounterDECAC,
  ChangeCounterINCAC,
  SetBtnDesAC,
  SetBtnIncAC,
  SetBtnResAC,
  SetBtnSaveAC,
  SetValueMaxAC,
  SetValueMinAC,
  SetValueSitingAC
} from "./redux/actions";

const  App = () => {
  const { counter, value:{maxValue, minValue}, valueSiting, disableBtn} = useSelector((state:IGlobalState) => state.counter)



  const dispatch = useDispatch();

  useEffect(() => {
    if (Number(localStorage.getItem('maxValue')) === 0){
      dispatch(SetValueSitingAC(true));
      dispatch(SetBtnIncAC(true));
      dispatch(SetBtnSaveAC(false))
    } else {
      dispatch(SetBtnSaveAC(true))
    }
  }, []);


  const errorValue = maxValue <= minValue;
  const saveDisable = errorValue || disableBtn.disableSaveBtn;




  const incCount = () => {
    if (counter < maxValue){
      dispatch(ChangeCounterINCAC(counter))
      dispatch(SetBtnDesAC(false))
      dispatch(SetBtnResAC(false))

    }
  }



  const decCount = () => {
    if(counter !== minValue){
      dispatch(ChangeCounterDECAC(counter))
      dispatch(SetBtnIncAC(false));
    } else {
      dispatch(ChangeCounterAC(minValue));
      dispatch(SetBtnDesAC(true))
    }

  }

  const resCount  = () => {
    dispatch(ChangeCounterAC(minValue));
    dispatch(SetBtnIncAC(false));
    dispatch(SetBtnDesAC(true))
    dispatch(SetBtnResAC(false))


  }
  const setMaxValueCallBack = (e:ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value >= 0){
      dispatch(SetValueMaxAC(+e.currentTarget.value));
    }
    dispatch(SetBtnSaveAC(false))
    dispatch(SetBtnIncAC(true));
    dispatch(SetBtnDesAC(true))
    dispatch(SetBtnResAC(true))
    dispatch(SetValueSitingAC(true));

  }
  const setMinValueCallBack = (e:ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value >= 0){
      dispatch(SetValueMinAC(+e.currentTarget.value));
    }
    dispatch(SetBtnSaveAC(false))
    dispatch(SetBtnIncAC(true));
    dispatch(SetBtnDesAC(true))
    dispatch(SetBtnResAC(true))
    dispatch(SetValueSitingAC(true));

  }
  const saveValueCount = () => {
    dispatch(ChangeCounterAC(minValue));
    dispatch(SetBtnSaveAC(true))
    dispatch(SetBtnIncAC(false));
    dispatch(SetValueSitingAC(false));
    localStorage.setItem('minValue', minValue.toString())
    localStorage.setItem('maxValue', maxValue.toString())
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
          count={counter}
          incCount={incCount}
          decCount={decCount}
          resCount={resCount}
          disableIncBtn={(counter === maxValue) ? true : disableBtn.disableIncBtn}
          disableDecBtn={(counter === minValue) ? true : disableBtn.disableDecBtn}
          disableResBtn={(counter === minValue) ? true : disableBtn.disableResBtn}
          valueSiting={valueSiting}
          errorValue={errorValue}/>
    </div>
    
  );
}

export default App;
