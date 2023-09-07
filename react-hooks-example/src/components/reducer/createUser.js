import { useState } from "react";

export default function CreateUser({dispatch,id,handleNextId}){
    console.log('CreateUser() 렌더링');
    //폼 요소를 여러개 묶어서 state로 관리할때
    //1.폼 요소에 name속성 추가
    //2.초기 state를 객체로 {name속성값:'',...}
    //3.폼 요소에 onChange 및 value속성(입력값 초기화등시)추가
    const [inputs,setInputs]= useState({username:'',age:''});
    const {username,age} = inputs;//inputs객체 구조 분해

    //입력 요소(이름과 나이)의 타이핑 이벤트 처리
    const handleInputs = (e)=>{
      const {name,value} = e.target;//입력요소의 속성명는 name변수에,입력한 값은 value에 저장
      setInputs({...inputs,[name]:value});

    };

    return <>
        <div className="form-group">
        <label>이름:</label>       
        <input  type="text" name="username"   className="form-control" value={username} onChange={handleInputs} />
      </div>
      <div className="form-group">
        <label>나이:</label>       
        <input  type="number" name="age"  className="form-control" value={age} onChange={handleInputs}/>
      </div>
      <button className='btn btn-info' onClick={()=>{
        handleNextId();//다음 아이디값 변경 요청
        //사용자 목록 상태 변경 요청
        dispatch({type:'CREATE',id,payload:inputs})
        //입력값 클리어
        setInputs({username:'',age:''});
      }}>등록</button>
  
    </>
}