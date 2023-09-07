/*
  컴포넌트의 리렌더링 되는 조건
  -부모에서 전달받은 props가 변경될때
  -부모 컴포넌트가 리렌더링 될 때
  -자신의 state가 변경 될 때
*/

import { useState } from "react";

export default function UseState1(){
    //함수형 컴포넌트에서 this는 undefined다 즉 사용하지 말자
    console.log('UseState1()함수안의 this:',this);
    /*
    //버튼 클릭시 UseState1()함수가 호출이 안되서 return이 안되서
    //리렌더링이 일어나지 않아 브라우저에 값이 변하지 않는다
    let counter=0;
    const handleIncrease = ()=>{
        counter++;
        console.log('counter:',counter);
    };
    const handleDecrease = ()=>{
        counter--;
        console.log('counter:',counter);
    };*/
    //변하는 데이타인 counter를 state로 만들자
    /*
    const returnValue=useState(0);
    console.log('useState(0)의 반환값:',returnValue);
    let counter =returnValue[0];
    const setCounter = returnValue[1]; */
    let [counter,setCounter]=useState(0);//구조분해

    const handleIncrease = ()=>{
        //state인 counter는 변경하지 않는게 컴포넌트 최적화를 위해 좋다
        //※state는 세터를 통해 변경하자
        //counter++;
        //setCounter(counter);

       //※state인 counter와 
       //state변경 함수(세터)를 통해 변경된 값(counter+1 혹은 counter-1)을 비교해 변경됬으면 리 렌더링
       //고로 state는 변경하지 말자(immutable해야 한다)
       setCounter(counter+1);
       console.log('counter:',counter);
    };
    const handleDecrease = ()=>{
       //두번 호출시 -1만 감소
       //setCounter(counter-1);//setCounter(state의 대체값)
       //setCounter(counter-1);
       //setCounter(콜백함수):콜백함수는 인자로 이전 state를 받는다
       //두번 호출시 -2 감소(콜백 추천)
       setCounter(prevState=>prevState-1); 
       setCounter(prevState=>prevState-1); 
       console.log('counter:',counter);
    };
    /*
  JSX(리액트 엘리먼트) 반환시 이전 Virual DOM과 비교하여 업데이트된
  부분만 실제 DOM에 반영한다.
  변경된 부분이 있어도 미 반환시에는 실제 DOM이 업데이트가 일어나지 않는다
  */
    return <>
        <h4>Counter : {counter} </h4>
        <button className="btn btn-info" onClick={handleIncrease}> + </button>
        <button className="btn btn-warning" onClick={handleDecrease}> - </button>
    </>
}