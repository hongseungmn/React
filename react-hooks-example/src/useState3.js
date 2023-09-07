import { useReducer, useRef, useState } from "react";

export const dataFetch= ()=>{
    console.log('네트웍을 통해 데이타를 패치합니다');
    return [{id:1,username:"가길동",age:20},{id:2,username:"나길동",age:20}];
};

function UseState3(){

    const [users,setUsers]= useState(()=>dataFetch());
    let nextId = users.length+1;

    //DOM요소인 폼 하위요소의 값 제어하기
    //※방법1 혹은 방법2는 폼 요소에 타이핑시마다 렌더링이 일어난다
    
    /*
    //방법1 : 사용자 입력값을 각 각의 state로 관리-username과 age변수는 사용자 입력값을 저장하는 state
    //        사용자 입력값을 state로 관리하기 위해 폼 하위요소에 onChange이벤트 추가
    const [username,setUsername] =useState('');
    const [age,setAge] =useState('');
    const onSetUsername= (e)=>{
        console.log(e.target.value);
        //입력 값으로 state변경
        setUsername(e.target.value)
    };
    const onSetAge = (e)=>{
        console.log(e.target.value);
        //입력 값으로 state변경
        setAge(e.target.value)
    };*/
    /*
    //방법2 : 모든 사용자 입력값을 하나의 state로 관리(방법1과의 차이).코드를 줄이는 효과밖에 없다
    //폼요소에 name속성 추가.name속성의 값을 키로 하는 객체를 값으로 설정
    //역시 폼 하위요소에 onChange이벤트 추가.
    const [inputs,setInputs] = useState({username:'',age:''});
    const {username,age} = inputs;//구조분해
    const onSetInputs=(e)=>{
        console.log(e.target.name);//폼 하위요소의 name속성값
        const {name,value}=e.target;
        console.log('name속성값:%s,입력값:%s',name,value);
        setInputs({...inputs,[name]:value});//변수를 키로 사용시 []로 감싼다

    };*/
    //방법3:useRef훅 함수 사용해서 불 필요한 렌더링 막기
    //DOM요소별로 Ref객체 생성
    const usernameRef = useRef('HELLO');
    const ageRef = useRef('');
    /*
    최초 마운트시는 usernameRef.current는 useRef(객체) 훅함수에 인자로 지정한 객체가 current이다
    최초 마운트시(최초 JSX 반환시) 태그 요소에 useRef()함수로 
    생성한 객체를 ref속성에 설정됨으로 리렌더링 이후에나 참조할 수 있다
    즉 리렌더링이 일어나야 ref객체로 참조 할 수 있다.
    */
    //아래는 최초 마운트시(즉 최초 렌더링시) 출력결과
    console.log('usernameRef:',usernameRef);//{current:''}
    console.log('usernameRef.current:',usernameRef.current);//<empty string>


    const onCreateUser = (e)=>{
        setUsers(prevState=>{
            //방법1하고 방법2일때
            //return [{id:nextId,username,age},...prevState];
            //방법3일때
            console.log('usernameRef:',usernameRef);//{current:''}
            console.log('usernameRef.current:',usernameRef.current);
            console.log('username:usernameRef.current.value:',usernameRef.current.value);
            return [{id:nextId,username:usernameRef.current.value,age:ageRef.current.value},...prevState];
        });
    };

    console.log('렌더링이 발생했어요');
    return <>
        <div className='form-group'>
            <label>이름:</label>
            {/*방법1-각 요소별 이벤트 함수 작성*/}
            {/*<input type="text" name="username" className='form-control'  onChange={onSetUsername}/>*/}
            {/*방법2-함수 하나로 처리*/}
            {/*<input type="text" name="username" className='form-control'  onChange={onSetInputs}/>*/}
            {/*방법3-useRef훅 사용*/}
            <input type="text" name="username" className='form-control'  ref={usernameRef}/>
        </div>
        <div className="form-group">
            <label>나이:</label>
            {/*방법1-각 요소별 이벤트 함수 작성*/}
            {/*<input type="number" name="age" className="form-control" onChange={onSetAge}/>*/}
            {/*방법2-함수 하나로 처리*/}
            {/*<input type="text" name="age" className='form-control'  onChange={onSetInputs}/>*/}
            {/*방법3-useRef훅 사용*/}
            <input type="text" name="age" className='form-control' ref={ageRef}/>
        </div>
        <button className="btn btn-info" onClick={onCreateUser}>등록</button>
        <hr/>
        <ul className="list-unstyled">
            {
              users.map((user,index)=><li key={user.id}>이름:{user.username},나이:{user.age}</li>)  
            }
        </ul>
    
    </>
}

export default UseState3;