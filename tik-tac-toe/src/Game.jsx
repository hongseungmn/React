import { useState } from "react";
import Square from "./Square";



function Board({xIsNext, squares, onPlay}) {
  //console.log('squares : ', squares);
  //[null, null, null, null, null, null, null, null, null]

  const winner = calculateWinner(squares);
  let status;
  status = winner ? "Winner : " + winner : "Next player : " + (xIsNext ? "X" : "O");
  
  
  function handleClick(i) {
    //이미 선택한 경우 값 을 할당하지 않는다
    if(squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice() //squares 배열의 사본 생성

    let value = xIsNext ? "X" : "O"; //턴 변경

    nextSquares[i] = value; //값 넣기

    onPlay(nextSquares);
  }

  //승리조건 확인
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i=0; i<lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }


  return (
    <>
      <div className="status">{status}</div>
      {squares.map((value, index) => 
        index % 3 === 0 ? (
          <div className="board-row" key={index}>
            <Square value={squares[index]} onSquareClick={() => handleClick(index)}/>
            <Square value={squares[index + 1]} onSquareClick={() => handleClick(index + 1)}/>
            <Square value={squares[index + 2]} onSquareClick={() => handleClick(index + 2)}/>
          </div>
        ) : null
      )}
    </>
  )
}

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    description = move > 0 ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}