import { useContext, useReducer, useState } from "react";
import CreateUser from "./components/context/createUser";
import Header from "./components/context/header";
import Users from "./components/context/users";
import { UsersContext } from "./components/context/usersContext";


const initialState={
    count:2,
    users:[
      {id:1,username:'가길동',age:20},
      {id:2,username:'나길동',age:30}
    ]
};

const usersReducer=(state,action)=>{
    console.log('usersReducer()리듀서 호출됨');
    switch(action.type){
        case "CREATE":
            return {count:state.count+1,users:[{...action.payload,id:action.id},...state.users]};
        case 'DELETE':            
            return {count:state.count-1,users:state.users.filter(user=>user.id != action.id )};
            
        default:
            return state;
    }       
    
};

export default function UseContext_(){
    //하위 컴포넌트에서
    //useContext()훅 함수 호출로 데이타를 받는다 즉 props 미 사용
    const [usersInfo,dispatch] = useReducer(usersReducer,initialState);

    //Context객체 사용
    //현재 컴포넌트는 <Context객체.Provider value={데이타}>로 감싼 컴포넌트가
    //아니기 때문에 useContext()훅 함수 호출시 React.createContext(기본값);
    //컨텍스트 객체 생성시의 기본값을 반환한다
    const context = useContext(UsersContext);
    console.log('UseContext_()의 context값:',context);


     const [nextId,setNextId]= useState(usersInfo.users.length+1);     
     const handleNextId =()=>{setNextId(nextId+1);console.log('handleNextId()호출됨');};

    return <>
     {/*props를 하위 컴포넌트로 내릴 필요가 없다
       하위컴포넌트에서는 value에 지정한 값을
       const 값 = useContext(UsersContext);
    */}
    <UsersContext.Provider value={{usersInfo,dispatch,handleNextId,id:nextId}}>
        <Header/>
        <CreateUser />
        <Users />
    </UsersContext.Provider>
</>
}