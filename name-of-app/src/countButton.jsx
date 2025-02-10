/***** 화면 업데이트 하기 *****/

import { useState } from "react";

//해당 컴포넌트를 재사용하면 각 버튼이 고유한 카운트 상태를 '기억'하고 다른 버튼에 영향을 주진 않는다
function CountButton() {
  const [count, setCount] = useState(0);


  function handleCount() {
    setCount(count + 1);
    // use 훅 함수는 반드시 루트 함수의 바디에서만 선언되어야 한다. 다른 함수 안에 들어가거나 하면 안된다.
    //const [test, setTest] = useState(0);
  }

  return (
    <button onClick={handleCount}>Clicked {count} times</button>
  );
}

export default CountButton;