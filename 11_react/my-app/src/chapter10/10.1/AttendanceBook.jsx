const students = [
  {
    id: 'a1',
    name: '김성원',
  },
  {
    id: 'a2',
    name: '김김김',
  },
  {
    id: 'a3',
    name: '성성성',
  },
  {
    id: 'a4',
    name: '원원원',
  },
  {
    id: 'a5',
    name: 'wonwonwon',
  },
  {
    id: 'a6',
    name: '111',
  },
];

// Quiz: 배열의 각 요소를 렌더링하고 배열 렌더링 시 key 값 추가해보기
// key 값은 id속성을 추가
// 출석부에 이름 출력하기
function AttendanceBook() {
  return (
    <ul>
      {students.map((people) => {
        return <li key={people.id}>{people.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;