import { useEffect } from "react";
import { useState } from "react";

function EffectSummary(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // useEffect()는 공통으로 마운트 시에는 무적권 실행된다.

  // 렌더링 될때마다 매번 실행됨
  useEffect(() => {
    console.log('매번 실행됨');
  });

  // count가 변할때마다 실행됨
  useEffect(() => {
    console.log('%c count가 변할때마다 실행됨', 'color:red; background:#eee');
  }, [count]);

  // name이 변할때마다 실행됨
  useEffect(() => {
    console.log('%c name이 변할때마다 실행됨', 'color:navy; background:#888');
  }, [name]);

  // 마운트 될때만 실행됨
  useEffect(() => {
    console.log('%c 마운트 될때만 실행됨 ', 'color:blue;');

    return ()=>{
      console.log('%c 언마운트 될때만 실행됨 ', 'color:yellow;');
    };
  }, []);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>1씩 증가</button>
      <p>이름: {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

export default EffectSummary;