// 하위 엘리먼트를 감싸서 카드 형태로 보여주는 컴포넌트

function Card(props) {
  const { title, backgroundColor, children } = props;

  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxShadow: "0px 0px 4px gray",
        background: backgroundColor || 'lightgray' // Shrot-circuit
        // backgroundColor에 falsy값이 들어오면 기본값으로 "lightgray"를 사용 
      }}
    >
      {title &&
        <h1 style={{ borderBottom: "1px solid gray" }}>{title}</h1>
      }
      {children &&
        <p style={{ color: "blue" }}>{children}</p>
      }
    </div>
  );
}

export default Card;