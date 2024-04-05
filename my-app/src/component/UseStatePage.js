import { useState } from "react";


//ex1
// export default function UseStatePage() {
//   const [time, setTime] = useState(1);

//   return (
//     <div>
//       <span> 현재 시간 : {time}시 </span>
//       <button>Update</button>
//     </div>
//   )
// }


//ex2
// export default function UseStatePage() {
//   const [time, setTime] = useState(1);

//   const handleClick = () => {
//     setTime(time + 1);
//   }

//   return (
//     <div>
//       <span> 현재 시간 : {time}시 </span>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   )
// }

//ex3
export default function UseStatePage() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    // newTime 변수생성
    let newTime;
    // 시간이 12시를 넘어간다면
    if (time >= 12) {
      // 다시 newTime을 1로 설정을 해준다.
      newTime = 1;
    } else {
      // 그렇지 않으면 newTime에는 그냥 현재시간에 + 1 씩 증가
      newTime = time + 1;
    }
    // setTime에 만든 변수 newTime 넣어주기
    setTime(newTime);
  };

  console.log("업데이트!!!");

  return (
    <div>
      <span>현재 시각 : {time}시 </span>
      <button onClick={handleClick}>update</button>
    </div>
  );
}