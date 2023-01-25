import { useState } from "react";
import Timer from "./Timer";

function TimerContainer() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}
      >
        🐕🦮🐕‍🦺🐩
      </button>
    </div>
  );
}

export default TimerContainer;