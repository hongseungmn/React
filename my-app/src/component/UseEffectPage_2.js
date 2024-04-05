import { useState } from "react";
import { Timer } from "./Timer";

export default function UseEffectPage_2 () {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {/* showTimer가 true 일때만 Timer를 보여주자(토글) */}
      {showTimer && <Timer/>}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  )
}