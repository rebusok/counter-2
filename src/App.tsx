import React, { useState, ChangeEvent } from 'react';
import CountPage from './components/count-page';
import './App.css';
import SititngCount from './components/siting-count';
const  App = () => {  
  
  const [maxValue, setMaxValue] = useState<number>(7);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxCount, setMaxCount] = useState<number>(maxValue);
  const [minCount, setMinCount] = useState<number>(minValue);
  const [count, setCount] = useState<number>(minCount);
  const [title, setTitle] = useState<string>('');
  const [classs, setClass] = useState<string>('')
  const incCount = () => {
    setCount(count + 1);
  }

  const decCount = () => {
    if(count !== minCount){
      setCount(count - 1);
    } else {
      setCount(minCount);
    }
    
  }

  const resCount  = () => {
    setCount(minCount);
  }
  const setMaxCountCallBack = (e:ChangeEvent<HTMLInputElement>) => {
    
    if (minValue > +e.target.value) {
      setTitle('the starting point cant be bigger')
      setClass('h1')
    } 
    if (minValue === +e.target.value ){
      setTitle('The values cannot be equa')
      setClass('h2')
    }
    if (+e.target.value > minValue) {
      setTitle('Save siting')
      setClass('h3')
    }
    if (+e.target.value >= 0){
      setMaxValue(+e.target.value);
    }
    
  }
  const setMinCountCallBack = (e:ChangeEvent<HTMLInputElement>) => {
    
    if (+e.target.value > maxValue) {
      setTitle('the starting point cant be bigger')
      setClass('h1')
    } 
    if (+e.target.value === maxValue ){
      setTitle('The values cannot be equal')
      setClass('h2')
    }
    if (maxValue > +e.target.value) {
      setTitle('Save siting')
      setClass('h3')
    }
    if (+e.target.value >= 0){
      setMinValue(+e.target.value);
    }  
  }
  const saveValueCount = () => {    
    setMaxCount(maxValue);
    setMinCount(minValue);
    if (maxValue > minValue) {
      setCount(minValue);  
      setClass('');
    } 
      
    
  }
  

  return (
    <div className="App">
      <CountPage
      classs={classs}
      maxValue={maxValue}
      maxCount={maxCount}
      minCount={minCount}
      minValue={minValue}
      count={count}
      title={title}
      incCount={incCount}
      decCount={decCount}
      resCount={resCount}/>
      
      <SititngCount
      setMaxCountCallBack={setMaxCountCallBack}
      maxValue={maxValue}
      minValue={minValue}
      setMinCountCallBack={setMinCountCallBack}
      saveValueCount={saveValueCount}/>
    </div>
  );
}

export default App;
