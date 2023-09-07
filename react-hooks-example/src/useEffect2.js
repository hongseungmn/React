import { useState } from "react"
import CleanUp from "./components/cleanUp";

export default function UseEffect2(){


    const [isShow,setIsShow] = useState(false);
    
    return <>
        {/*isShow 스테이트에 따라 CleanUp컴포넌트를 보였다(마운트) 안보였다(언마운트)*/}
        {/*CleanUp컴포넌트를 Unmount해도 타이머는 계속 작동한다
          이를 위해 useEffect()의 콜백함수에서 함수(클린업 함수)를 리턴하여
            타이머를 해제해야한다*/}
        {isShow && <CleanUp/>}
        <button className="btn btn-info" onClick={()=>{setIsShow(!isShow);console.log('isShow:',isShow);}} >타이머 토글링</button>
    </>
}