import { useEffect } from "react";

// export const Timer = (props) => {
//   //화면에 처음 렌더링 시 실행, 두번째 인자로 빈 배열을 넣어준다
//   //맨 처음 마운팅이 되었을 때 useEffect 안에 있는 콜백함수가 실행될 텐데 setInterval의 인지로 들어가 있는 콜백을 1초마다 한번씩 계속해서 반복해서 부를 것
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("타이머 돌아가는 중...");
//     }, 1000);
//   },[]);

//   return (
//     <div>
//       <span>타이머를 시작합니다. 콘솔을 보세요 !</span>
//     </div>
//   )
// }

export const Timer = (props) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는 중");
    },1000);

    //타이머 컴포넌트가 언마운트 될 때 실행된다.
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    }
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  )
}