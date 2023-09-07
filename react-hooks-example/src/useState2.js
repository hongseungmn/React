import { useState } from "react";


const dataFetch= ()=>{
    console.log('네트웍을 통해 데이타를 패치합니다');
    return [{id:1,username:"가길동",age:20},{id:2,username:"나길동",age:20}];
};

function UseState2(){
    //※useState(초기값 혹은 콜백함수)함수는 state(users,name,age)가 변경될 때마다
    //  호출된다

    //방법1 : useState()함수의 인자를 값으로 설정
    //const [users,setUsers] = useState([{id:1,username:"가길동",age:20},{id:2,username:"나길동",age:20}]);//초기값을 [{},{}]형태로
    //const [users,setUsers] = useState(dataFetch());//dataFetch()함수가 반환한 값을 초기값으로.위와 같은 형식이다.단, 함수호출시 렌더링시마다 dataFetch()함수가 호출된다.
    //방법2 : useState()함수의 인자를 콜백함수로 설정(컴포넌트 성능 최적화)-dataFetch()함수는 마운트 될때(화면에 그려질때)만 호출된다
    const [users,setUsers] = useState(()=>dataFetch());
    
    console.log('users:',users);

    //사용자 입력시 다음 아이디값 생성
    let nextId=users.length+1;


    const onCreateUser = (e)=>{
        console.log(document.querySelector('input[name=username]').value);
        console.log(document.querySelector('input[name=age]').value);
        const username=document.querySelector('input[name=username]').value;
        const age=document.querySelector('input[name=age]').value;
        //입력한 데이타를 state인 users에 직접 추가-리 렌더링이 안 일어난다(기존 state인 users와 setUsers()인자로 전달된 users의 주소가 같아서)
        /*
        users.push({id:nextId,username,age})
        console.log('사용자 추가후 users:',users);
        setUsers(users);*/
        //해결책:state인 users를 직접 변경하지 않고 새로운 배열을 생성해서 세터에 설정:리 렌더링 발생
        //방법1:state변경 함수(setUsers)의 인자로 값 설정
        //setUsers([{id:nextId,username,age},...users]);//추가한 거를 첫번째 요소로
        //방법2:state변경함수(setUsers)의 인자로 콜백함수 설정
        setUsers(prevState=>{
            console.log('prevState:',prevState);
            return [{id:nextId,username,age},...prevState];//새로운 state반환
        });
        console.log('세터로 설정후 users:',users);//출력시 아직 state 변경이 안되 있다
    };

    return <>
        <div className="form-group">
            <label>이름 : </label>
            <input type="text" name="username" className="form-control"/>

        </div>
        <div className="form-group">
            <label>나이 : </label>
            <input type="number" name="age" className="form-control"/>            
        </div>
        <button className="btn btn-danger" onClick={onCreateUser}>등록</button>
        <hr/>
        <ul className="list-unstyled">
             {/* 사용자 목록 출력 */}
            {/*JSX안에서 순회하면서 요소를 출력시에는 그 요소의 속성으로 key가 있어야한다
                key속성의 값은 유니크해야한다(없으면 경고)
                https://ko.reactjs.org/docs/lists-and-keys.html
            */}
            {
              users.map((user,index)=><li key={user.id}>이름:{user.username},나이:{user.age}</li>)  
            }
        </ul>
    </>
}
export default UseState2;