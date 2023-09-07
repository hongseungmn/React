import { useEffect } from "react";

const CleanUp = ()=>{

    useEffect(()=>{
        console.log('화면에 마운트 되었어요');
        const timer = setInterval(()=>console.log('1초마다 호출되고 있습니다'),1000);
        //componentWillUnmount()와  동일
        return ()=>{//클린업 함수(Unmount될때나 혹은 다음 렌더링 후 useEffect()가 호출되기 전에 호출됨) 즉 정리작업(타이머 해제)
            //정리작업 코드 작성
            clearInterval(timer);
            console.log('타이머를 중지 했어요')

        };

    },[]);
    return <>
        <h3>Clean Up함수 사용예 입니다</h3>
    </>
};
export default CleanUp;
