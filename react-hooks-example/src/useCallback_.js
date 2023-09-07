import { useReducer, useState } from "react";
import { UsersContext } from "./components/context/usersContext";
import Header from "./components/context/header";

import Users from "./components/context/users";
import CreateUser from "./components/callback/createUser";


/*
    useMemo_.js와 동일한 UI
    단,createUser.js만 callback폴더 생성해서 useCallback()훅함수 테스트
    createUser.js에 나이에 따른 성인/미성년자 판별 UI추가

*/

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

export default function UseCallback_(){
    const [usersInfo,dispatch] = useReducer(usersReducer,initialState);
    const [nextId,setNextId]= useState(usersInfo.users.length+1);     
    const handleNextId =()=>{setNextId(nextId+1);};

    return <>     
        <UsersContext.Provider value={{usersInfo,dispatch,handleNextId,id:nextId}}>
            <Header/>
            <CreateUser />
            <Users />
        </UsersContext.Provider>
    </>
}