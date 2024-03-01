import { useState } from "react";
import Square from "./Square";

export default function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)) { //이미 값이 채워진 경우 or 승자가 정해진 경우 return
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = 'X';
    }
    else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares) {
    const lines = [ //승자가 되는 라인
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    for (let i=0; i<lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { //정답을 순회하면서 해당 라인이 존재하는지 확인 후 만약 존재한다면 해당 값(O or X)를 리턴
        return squares[a];
      }

    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = "Winner : "+ winner;
  } else {
    status = "Next player : " + (xIsNext ? "X" : "O") ;
  }

  return (
  <>
    <div className="status">{status}</div>
    <div className='board-row'>
      <Square value={squares[0]} onSquareClick={()=> handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={()=> handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={()=> handleClick(2)}/>
    </div>
    <div className='board-row'>
      <Square value={squares[3]} onSquareClick={()=> handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={()=> handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={()=> handleClick(5)}/>
    </div>
    <div className='board-row'>
      <Square value={squares[6]} onSquareClick={()=> handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={()=> handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={()=> handleClick(8)}/>
    </div>
  </>)
}

/*
함수에 인자가 없는 경우:

onSquareClick={handleClick}와 같이 함수를 전달하는 경우에는 함수가 클릭 이벤트 발생 시 호출되어야 합니다.
이 경우에는 클릭 이벤트가 발생할 때 함수가 호출되고, 함수 내부에서 인자 없이 정의된 형태로 실행됩니다.
따라서 에러가 발생하지 않습니다.
함수에 인자가 있는 경우:

onSquareClick={handleClick(0)}와 같이 함수 호출 결과를 전달하는 경우에는 함수가 즉시 실행되고, 그 결과가 prop으로 전달됩니다.
이 경우에는 함수 호출이 클릭 이벤트 발생 전에 이미 이루어졌으므로, 클릭 시 함수가 호출되지 않습니다.
따라서 이러한 형태에서는 예기치 않은 동작이 발생할 수 있고, 에러가 발생할 가능성이 있습니다.

결과는 동일하지만 직접적으로 변경(기본 데이터 변경)하지 않으면 여러 가지 이점을 얻을 수 있습니다.

불변성은 복잡한 기능을 훨씬 쉽게 구현할 수 있게 해줍니다. 
이 튜토리얼의 뒷부분에서는 게임 기록을 검토하고 과거 이동으로 "돌아갈" 수 있는 "시간 여행" 기능을 구현하게 됩니다. 이 기능은 게임에만 국한된 것이 아닙니다. 
특정 작업을 실행 취소하고 다시 실행하는 기능은 앱의 일반적인 요구 사항입니다. 직접적인 데이터 변형을 방지하면 이전 버전의 데이터를 그대로 유지하고 나중에 다시 사용할 수 있습니다.

불변성의 또 다른 이점도 있습니다. 기본적으로 모든 하위 구성 요소는 상위 구성 요소의 상태가 변경되면 자동으로 다시 렌더링됩니다. 여기에는 변경의 영향을 받지 않은 하위 구성 요소도 포함됩니다. 
재렌더링 자체는 사용자에게 눈에 띄지 않지만(적극적으로 피하려고 하면 안 됩니다!), 성능상의 이유로 분명히 영향을 받지 않은 트리 부분을 재렌더링하는 것을 건너뛰고 싶을 수도 있습니다. 
불변성은 구성 요소가 데이터 변경 여부를 비교하는 것을 매우 저렴하게 만듭니다.

=> 따라서 버턴의 값을 변경할 때 복사본을 만들고 진행한 것이다
*/