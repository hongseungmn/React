import { useState } from "react";
//컴포넌트를 함수로 선언한 후 내보낸다
function MyButton() {
  //현재 보여지고 있는 컴포넌트의 정보를 기억하고 싶을 때 useState를 사용
  //그 후 해당 정보를 변경할 때는 setCount를(count로 지정했음) 사용
  const [count, setCount] = useState(0);
  //클릭 이벤트 예제
  function handleClick() {
    setCount(count + 1);
    alert('You Clicked me!');
  }
  return (
    <button onClick={handleClick}>
      I'm a Button, Clicked {count} times
    </button>
  )
}

export default MyButton;