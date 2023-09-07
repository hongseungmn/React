import useFormInputs from "./useForm";
import React from "react";

//컴포넌트 성능 최적화:React.memo(function 자식인 함수형 컴포넌트명(){})
function CreateUser(){

    /*
    const [inputs,setInputs]= useState({username:'',password:'',age:''});
    const {username,password,age} = inputs;//inputs객체 구조 분해
    
    //입력 요소(이름과 나이)의 타이핑 이벤트 처리
    const handleInputs = (e)=>{
      const {name,value} = e.target;//입력요소의 속성명는 name변수에,입력한 값은 value에 저장
      setInputs({...inputs,[name]:value});
    };
    */

    /*
    폼의 요소를 제어하는 로직은 폼을 사용하는 모든 컴포넌트에서
    공통으로 사용하는 로직임으로 커스텀 훅으로 만들자
    useState부분(입력요소를 state로 처리하는 로직)과 
    handleInputs(입력 요소의 onChange이벤트 핸들러)을 커스텀 훅으로 만들자
    단,공통로직을 만들때 폼이 있는 각 컴포넌트 마다 폼의 하위요소명이 다름으로
    구조분해는 제외한다
    */
   
    //커스텀 훅 함수 적용하기
    const [inputs,setInputs,handleInputs]=useFormInputs({username:'',password:'',age:''});//커스텀 훅함수 호출
    const {username,password,age}=inputs;//현재 컴포넌트에 맞게 구조분해
   
    console.log('hooks의 CreateUser()렌더링....')
    return <>
      <div className="form-group">
        <label>아이디:</label>       
        <input  type="text" name="username"   className="form-control" value={username} onChange={handleInputs} />
      </div>
      <div className="form-group">
        <label>비밀번호:</label>       
        <input  type="text" name="password"   className="form-control" value={password} onChange={handleInputs} />
      </div>
      <div className="form-group">
        <label>나이:</label>       
        <input  type="number" name="age"  className="form-control" value={age} onChange={handleInputs}/>       
      
      </div>
      <button className='btn btn-info' onClick={()=>{       
        setInputs({username:'',password:'',age:''})
      }}>클리어</button>  
    </>
}
//부모인 UseCustomHooks의 state가 변경되도 즉 부모 컴포넌트가 렌더링이 일어나도
//자식인 CreateUser는 렌더링이 일어나지 않는다
export default React.memo(CreateUser);