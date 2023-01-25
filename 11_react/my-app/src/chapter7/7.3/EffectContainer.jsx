import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer(props) {
  const [isVisivle, setIsVisible] = useState(true);

  return(
    <div>
      <button onClick={()=> setIsVisible(true)}>등장</button>
      <button onClick={()=> setIsVisible(false)}>퇴장</button>
      {isVisivle && <EffectSummary/>}
    </div>
  );
}

export default EffectContainer;