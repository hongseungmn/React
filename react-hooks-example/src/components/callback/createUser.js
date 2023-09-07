import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
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
    /*
    const setAdult = () =>{
      console.log('setAdult()함수가 호출되었습니다');      
      adult.current.textContent = age.length==0?'':parseInt(age)>19?"성인":"미성년자";
    };
    */
    //이름과 나이를 입력할때마다 useEffect()인자인 콜백함수가 계속 실행된다
    //즉 의존성 배열요소인 setAdult의 주소가 계속 바뀐다
    //즉 함수가 계속 생성된다
    /*
    useEffect(()=>{
      console.log('setAdult가 변경되었어요');
      setAdult();

    },[setAdult]);//setAdult에 저장된 함수 객체의 주소가 변경될때마다 콜백 함수 호출
    */
    //useCallback()으로 성능 최적화:나이 입력할때만 setAdult()호출



    //setAdult를 메모이제이션하기

    //useCallback()함수는 첫번째 인자인 콜백함수를 반환하면서
    //함수 자체를 메모이제이션한다
    //두번째 인자인 의존성 배열에 설정한 age가 변경되면 콜백 함수가 다시 만들어져
    //setAdult변수에 저장된다(주소가 바뀐다)
    //age가 변경되지 않는 경우는 메모리에 캐싱된 함수를 그대로 사용한다(콜백함수는 실행되지 않는다)
    //즉 이름 입력시 리렌더링이 일어날때마다 메모리에 있는 값을 그대로 사용하기때문에 setAdult변수에 저장된 값이 동일하다
    const setAdult = useCallback(()=>{
      console.log('setAdult()함수가 호출되었습니다');
      adult.current.textContent = age.length==0?'':parseInt(age)>19?"성인":"미성년자";
    },[age]);


    console.log('useCallback이 반환한 setAdult:',setAdult);
    useEffect(()=>{
      console.log('setAdult가 변경되었어요');
      setAdult();

    },[setAdult]);

    const adult = useRef('');//{current:''}

    
   
    
    console.log('callback의 CreateUser()렌더링....')
    return <>
        <div className="form-group">
        <label>이름:</label>       
        <input  type="text" name="username"   className="form-control" value={username} onChange={handleInputs} />
      </div>
      <div className="form-group">
        <label>나이:</label>       
        <input  type="number" name="age"  className="form-control" value={age} onChange={handleInputs}/>
        <span ref={adult}></span>
      
      </div>
      <button className='btn btn-info' onClick={()=>{
        handleNextId();
        dispatch({type:'CREATE',id,payload:inputs});
        setInputs({username:'',age:''})
      }}>등록</button>
  
    </>
}