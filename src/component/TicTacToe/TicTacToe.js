import { pattern } from "@mui/icons-material";
import "./TicTacToe.css";
import React, { useState } from "react";

const TicTacToe = () => {
  const [turn, SetTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
const [winner, setWinner] = useState();
  const checkWinner = (square) => {
    if (winner) {
        return;
      }
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ],
      diagonal: [[0, 4, 8], [(2, 4, 6)]],
    };
    for (let combo in combos) {
        combos[combo].forEach((pattern) =>{
            if (
                square[pattern[0]] === "" ||
                square[pattern[1]] === "" ||
                square[pattern[2]] === "" 
            ){
                // not do anything here
            }else if(
                square[pattern[0]] ===  square[pattern[1]] &&
                square[pattern[1]] ===  square[pattern[2]]
            ){
                setWinner(square[pattern[0]]);
            }
        });
    }
  };
  console.log(cells);
  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("Already Clicked");
      return;
    }
    let square = [...cells];
    if (turn === "X") {
      square[num] = "X";
      SetTurn("O");
    } else {
      square[num] = "O";
      SetTurn("X");
    }
    setCells(square);
    checkWinner(square);
  };

  const restart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  const Cell = ({ num }) => {
    return (
      <td onClick={() => handleClick(num)} className="table-row">
        {cells[num]}
      </td>
    );
  };

  return (
    <div className="container">
      <h1 className="tic-tac-toe">Tic Tac Toe</h1>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      {winner && (
        <>
        <h4 className="winner">{winner} is the winner!!!!!!!</h4>
        <button onClick={() => restart()} className="button">Play Again</button>
        </>
      )}
    </div>
  );
};
export default TicTacToe;
