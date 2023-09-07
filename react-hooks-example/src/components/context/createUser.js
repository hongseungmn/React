import { useContext, useState } from "react";
import { UsersContext } from "./usersContext";

export default function CreateUser(){

    const {dispatch,handleNextId,id}=useContext(UsersContext);

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
        handleNextId();
        dispatch({type:'CREATE',id,payload:inputs});
        setInputs({username:'',age:''})
      }}>등록</button>
  
    </>
}