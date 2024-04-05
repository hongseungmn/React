import { useState } from "react";
import { useEffect } from "react";

//ex1
// export default function UseEffectPage() {
//   const [count, setCount] = useState(1);

//   const handleCountUpdate = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <button onClick={handleCountUpdate}>update</button>
//       <span>count: {count}</span>
//     </div>
//   )
// }

//ex2
// export default function UseEffectPage() {
//   const [count, setCount] = useState(1);

//   const handleCountUpdate = () => {
//     setCount(count + 1);
//   };

//   //랜더링 될 때마다 매번 실행
//   useEffect(() => {
//     console.log("랜더링됨");
//   });

//   return (
//     <div>
//       <button onClick={handleCountUpdate}>update</button>
//       <span>count: {count}</span>
//     </div>
//   )
// }

//ex3
// export default function UseEffectPage() {
//   const [count, setCount] = useState(1);
//   const [name, setName] = useState("");

//   const handleCountUpdate = () => {
//     setCount(count + 1);
//   };

//   const handleInputChange = (e) => {
//     setName(e.target.value);
//   };

//   //렌더링 될 때마다 매번 실행
//   useEffect(() => {
//     console.log("렌더링됨");
//   });

//   return (
//     <div>
//       <button onClick={handleCountUpdate}>update</button>
//       <span>count : {count}</span>
//       <br></br>
//       <input type="text" value={name} onChange={handleInputChange}/>
//       <span>name : {name}</span>
//     </div>
//   )
// };

//ex4
//ex3
export default function UseEffectPage() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  //렌더링 될 때마다 매번 실행
  useEffect(() => {
    console.log("렌더링됨");
  }, [count]);

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span>count : {count}</span>
      <br></br>
      <input type="text" value={name} onChange={handleInputChange}/>
      <span>name : {name}</span>
    </div>
  )
};