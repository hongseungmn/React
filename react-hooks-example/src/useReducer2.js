import { useReducer, useState } from "react";
import CreateUser from "./components/reducer/createUser"
import Header from "./components/reducer/header"
import Users from "./components/reducer/users"


//※하위 컴포넌트로 dispatch함수를 내려서 
//  하위 컴포넌트에서는 이벤트시 dispatch를 호출하면 된다.
//  역시 useContext훅하고 Context API를 사용하지 않으면 역시 Pros Drilling 을 해야한다
const initialState={
    count:2,
    users:[
      {id:1,username:'가길동',age:20},
      {id:2,username:'나길동',age:30}
    ]
};

//state변경 함수인 리듀서 정의
//state:현재 state값
//action : {type:"CREATE",id:3,payload:{username:'다길동',age:40}}
const usersReducer=(state,action)=>{
    console.log('usersReducer()리듀서 호출됨');
    switch(action.type){
        case "CREATE"://등록시에는 spread연산자 혹은 배열의 concat함수사용
            return {count:state.count+1,users:[{...action.payload,id:action.id},...state.users]};
        case 'DELETE':
             //삭제시에는 배열의 filter함수
            //삭제하려는 id를 제외한 요소로 필터링하여 배열 생성    
            //return state.users.filter(user=>user.id != action.id );//[{},{},..]형태의 배열반환.state.users is undefined에러
            return {count:state.count-1,users:state.users.filter(user=>user.id != action.id )};
             //수정은 map()함수로 순회하면서 키로 찾아 수정
            //배열.map(item =>item.key === key ? { ...item, 변경객체키:변경값 } : item) 
        default://현재 state반환
            return state;
    }       
    //return state;//무조건 일단 코딩.리듀서에서 반환한 객체가 
    //               usersInfo스테이트가 된다
};

export default function UseReducer2(){
    console.log('UseReducer2() 렌더링');
    //initialState를 리듀서로 관리하고 Props로 하위 컴포넌트에 값 전달
    const [usersInfo,dispatch]= useReducer(usersReducer,initialState);
    console.log('usersInfo.users:',usersInfo.users);

    //id 값(state로 별도 관리):다음 아이디값용
    const [nextId,setNextId]= useState(usersInfo.users.length+1);
    //CreateUser컴포넌트에서 등록버튼 클릭시
    //nextId(state)를 변경하는 함수 정의(이 함수를 props로 보낸다)
    const handleNextId =()=>{setNextId(nextId+1);console.log('handleNextId()호출됨');};

    //하위 컴포넌트로 속성(props)을 통해 state를 내려보낼때
    //속성명은 임의다
    return <>
        <Header total={usersInfo.count}/>
        <CreateUser dispatch={dispatch} id={nextId} handleNextId={handleNextId}/>
        <Users users={usersInfo.users} dispatch={dispatch}/>
    </>
}