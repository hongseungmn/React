import { useReducer } from "react"
//리듀서:state를 변경하는 함수로 인자를 두개를 받는다
//      state:컴포넌트의 현재 state
//      action:state변경 정보를 담은 객체.{}형태
//      현재 state를 받아 action에 따라 state를 변경해 새로운 state를 반환한다

//아래 state변경과 관련된 리듀서를 별도의 모듈로 분리
/*
const ACTION_TYPE={INCREASE:'INCREASE','DECREASE':'DECREASE'}
const counterReducer=(state,action)=>{
    console.log('dispatch(action) 호출할때마다 리쥬서가 호출된다');
    console.log('현재 state:%s,액션:%O',state,action);
    switch(action.type){
        case ACTION_TYPE.INCREASE:
            return state+1;
        case ACTION_TYPE.DECREASE:
            return state-1;
        default:
            return new Error('액션이 다르다');
    }

};*/
//리듀서를 별도의 외부 파일로 저장하여 임포트
import { counterReducer } from "./components/reducer/counterReducer";

export default function UseReducer1(){
    //state를 useReducer로 관리하기 즉 state를 useReducer()훅 함수로 생성
    const [counter,dispatch]=useReducer(counterReducer,0);
    console.log('counter:%s,dispatch:%s',counter,dispatch);
    const handleIncrease = ()=>{
        //dispatch()는 state를 변경해줘 라는 요청함수다      
        //dispatch();//액션 미 전달시 state:0,action; undefined 출력
        dispatch({type:'INCREASE'});
    };
    const handleDecrease = ()=>{
        dispatch({type:'DECREASE'});
    };
    return <>
        <h4>Counter : {counter}</h4>
        <button className="btn btn-info" onClick={handleIncrease}>+</button>
        <button className="btn btn-info" onClick={handleDecrease}>-</button>
    </>
}