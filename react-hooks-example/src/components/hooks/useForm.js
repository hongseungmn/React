//커스텀 훅:함수형 컴포넌트에서 필요한 값 반환

import { useState } from "react";

//1.use시작하는 함수
export default function useFormInputs(initalState){
    //2.함수안에서 리액트 훅 함수 호출
    const [inputs,setInputs] =useState(initalState);
    //onChange이벤트 처리 로직(입력값을 inputs state로 업데이트하는 로직) )    
    const handleInputs=(e)=>{
        const {name,value}=e.target;
        setInputs({...inputs,[name]:value});
    };
    //3.폼 UI가 있는 함수형 컴포넌트로 데이타 반환
    return [inputs,setInputs,handleInputs];
}