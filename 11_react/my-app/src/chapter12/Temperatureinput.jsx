import { useState } from "react";

const scaleNames = {
  c: '섭씨',
  f: '확씨'
}

// 여러 가지 단위의 온도를 입력하는 컴포넌투(자식 - 하위)
function Temperatureinput(props) {
  // const [temperature, setTemperature] = useState('');

  const handleChange = (e) => {
    // setTemperature(e.target.value);

    //  해당 컴포넌트에서 state를 사용하지 않기 때문ㅇ ㅔ변경된 값을 상위 컴포넌트 상위 설정 필요
    props.onTemperatureChange(e.target.value);
  };

  return (
    // fieldset태그: 입력 양식 폼에서 관련된 것들끼리 그룹화 할때 사용
    // legend태그: fieldset에 붙이는 설명
    <fieldset>
      <legend>온도를 입력해(단위:{scaleNames[props.scale]})</legend>
      {/* 상위 컴포넌트부터 props를 통해 받아옴 */}
      <input type="text" value={props.temperature} 
      onChange={handleChange} />
    </fieldset>
  );
}

export default Temperatureinput;