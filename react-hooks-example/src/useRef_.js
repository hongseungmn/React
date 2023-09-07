import { useEffect, useRef, useState } from "react";

export default function UserRef_(){

  //사용자 입력값(입력요소)을 state로 사용하기 위한 훅 함수 호출
  //전제 조건
  //입력 요소에
  //1)value={state변수명} 그리고
  //2)onChange={(e)=>setUsername(e.target.value)}추가
  //1)번만 추가시 해당 입력요소는 읽기전용(경고 메시지)
  //2)번만 추가시는 정상적으로 작동
  const [username,setUsername]= useState('');

     //[REF객체와 지역변수 차이 테스트 하기]
    //REF객체는 값이 변해도 렌더링이 일어나지 않는다
     //리렌더링이 되더라도 값을 유지한다
     //REF객체는 {current:초기값}형태의 객체다
     //REF객체.current는 참조하려는 DOM 요소다 즉 태그이다
    const ref= useRef(0);//{current:0}
    console.log('ref:',ref);
   
    //지역 변수
    let localVar =0;

    

    const onHandleRef =(e)=>{ //지역 변수 및 REF객체의 값 변경
        ref.current++;//값 수정해도 렌더링이 일어나지 않는다.
        localVar++;
        console.log('ref.current:%s,localVar:%s',ref.current,localVar);
    };

    //[DOM 요소에 접근하기]
     //1.REF객체 생성
     const refText= useRef('');//최초 마운트 될때는 refText는 입력요소가 아닌 {current:''}
     //2.REF객체로 참조하기 위해서 DOM 요소에 ref={REF객체} 속성 추가
     console.log('마운트 전 refText:',refText);

    //작업1] 화면 최초 로드시 입력 요소에 포커스 주기(useEffect훅함수와 REF객체 사용)
    //마운트 된 후 실행되는 콜백함수를 위한 useEffect()훅 함수 호출
    //refText.current.focus();//refText.current.focus is not a function
    useEffect(()=>{
        console.log('마운트 후 refText:',refText);
        refText.current.focus();
    },[]);
    //작업2]입력값 클리어하고 포커스 주기
    const onHandleClear =(e)=>{
        //바닐라 자바스크립트 사용
        /*
        const input= document.querySelector('input[type=text]');
        input.value='';
        input.focus();*/
        //REF객체는 아래 DOM API처럼 요소에 접근할 수 있는 참조객체다
        refText.current.value='';
        refText.current.focus();
    };
    return <>
    <kbd className="mr-3">ref객체 : {ref.current}</kbd>
    <kbd> 로컬변수 : {localVar}</kbd>
    <div className="form-group mt-3">
      <label>이름 : </label>
      {/* REF객체로 참조하기 위해서 DOM 요소에 ref={REF객체} 속성 추가 */}
      <input  ref={refText}  type="text" className="form-control" onChange={(e)=>setUsername(e.target.value)}/>
    </div>
    <button className="btn btn-info mr-3" onClick={onHandleRef}>Ref변경 및 지역변수 변경</button>
    <button className="btn btn-info" onClick={onHandleClear}>입력값 클릭어하고 포커스 주기</button>
    </>
}