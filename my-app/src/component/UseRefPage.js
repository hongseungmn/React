import { useRef, useState } from "react";

// export default function UseRefPage() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0)

//   console.log(countRef)
//   console.log("렌더링");

//   const increaseCountState = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>state:{count}</p>
//       <button onClick={increaseCountState}>state 올려</button>
//     </div>
//   );
// }

export default function UseRefPage() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  console.log(countRef, 'countRef');
  console.log("렌더링됨");

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
  };

  return (
    <div>
      <p>state: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseCountState}>state 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  )
}