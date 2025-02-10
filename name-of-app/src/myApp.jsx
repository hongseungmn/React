import { useState } from "react";
import MyButton from "./myButton";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleCount() {
    setCount(count + 1);
  }

  return (
    <>
      <MyButton count={count} handleCount={handleCount}/>
      <MyButton count={count} handleCount={handleCount}/>
      <MyButton count={count} handleCount={handleCount}/>
      <MyButton count={count} handleCount={handleCount}/>
    </>
  );
}