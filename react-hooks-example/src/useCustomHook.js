import CreateUser from "./components/hooks/createUser";
import React, { useState } from "react";



function UseCustomHooks(){
    console.log('UseCustomHooks 렌더링...');
    //React.memo()테스트용
    const [state,setState]=useState(0);
    return <>
        <CreateUser/>
        <hr/>
        <button className="btn btn-danger" onClick={()=>{
        setState(state+1);     
        }}>React.memo()테스트용</button>
    </>
}


export default UseCustomHooks;