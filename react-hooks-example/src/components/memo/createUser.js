import { useContext, useEffect, useMemo, useState } from "react";
import { UsersContext } from "../context/usersContext";

const isAdult = age=>{
  console.log('isAdult()함수 호출됨');
  console.log('age타입:',typeof age);
  return age.length==0 ? '' : parseInt(age) > 19 ?'성인입니다':'미성년자 입니다'; 

};
export default function CreateUser(){

    const {dispatch,handleNextId,id}=useContext(UsersContext);
    const [inputs,setInputs]= useState({username:'',age:''});
    const {username,age} = inputs;//inputs객체 구조 분해

    //입력 요소(이름과 나이)의 타이핑 이벤트 처리
    const handleInputs = (e)=>{
      const {name,value} = e.target;//입력요소의 속성명는 name변수에,입력한 값은 value에 저장
      setInputs({...inputs,[name]:value});

    };
    //성인 판별과 관계없는 이름을 타이핑할때
    //const adult=isAdult(age);//isAdult()가 계속 호출됨
    //const adult = age.length==0 ? '' : parseInt(age) > 19 ?'성인입니다':'미성년자 입니다';//계속 삼항 연산
    //const adult = useEffect(()=>{return isAdult(age)},[age]);////Warning: useEffect must not return anything besides a function, which is used for clean-up

    //useMemo훅 함수는 인자인 콜백함수의 반환값을 메모이제이션한다(메모리 캐시에 저장)
    //나이 입력시에만 isAdult()가 호출됨(컴포넌트 성능 최적화함)

    //useMemo()는 인자인 콜백함수가 반환한 값을 그대로 반환(즉 반환값을 사용할 수 있다)하고
    //메모이제이션한다
    //두번째 인자인 의존성 배열에 설정한 state나 props가 변경되면 콜백 함수가 호출되나
    //변경되지 않는 경우는 메모리에 캐싱된 반환값을 그대로 사용한다(콜백함수는 실행되지 않는다)
     //즉 이름 입력시 리렌더링이 일어날때마다 콜백함수가 호출되지 않고 메모리에 있는 값을 그대로 사용한다
    const adult = useMemo(()=>{return isAdult(age)},[age]);

    console.log('memo의 CreateUser()렌더링....')
    return <>
        <div className="form-group">
        <label>이름:</label>       
        <input  type="text" name="username"   className="form-control" value={username} onChange={handleInputs} />
      </div>
      <div className="form-group">
        <label>나이:</label>       
        <input  type="number" name="age"  className="form-control" value={age} onChange={handleInputs}/>
        <span>{adult}</span>
      
      </div>
      <button className='btn btn-info' onClick={()=>{
        handleNextId();
        dispatch({type:'CREATE',id,payload:inputs});
        setInputs({username:'',age:''})
      }}>등록</button>
  
    </>
}