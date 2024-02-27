
//컴포넌트를 함수로 선언한 후 내보낸다
function MyButton2({count, onClick}) {
  return (
    <button onClick={onClick}>
      I'm a Button, Clicked {count} times
    </button>
  )
}

export default MyButton2;