import { useEffect, useRef } from "react";

// export default function UseRefPage_3() {
//   const inputRef = useRef();
  

//   useEffect(() => {
//     inputRef.current.focus();
//   },[]);

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="username" />
//       <button>로그인</button>
//     </div>
//   );
// };

export default function UseRefPage_3() {
  const inputRef = useRef();

  useEffect(()=> {
    inputRef.current.focus();
  },[]);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username"/>
      <button onClick={login}>로그인</button>
    </div>
  )
}