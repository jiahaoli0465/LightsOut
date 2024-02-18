import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import "./Board.css";
import Winner from "./Winner";
import Overlay from "./Overlay";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

const trueFalse = (chance = 0.5) => {
  return Math.random() < chance ? true : false;
}


function Board({ nrows = 5, ncols = 5, chanceLightStartsOn= 0.5 }) {
  const [board, setBoard] = useState(createBoard());


  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    // TODO: create array-of-arrays of true/false values
    for (let i = 0; i < nrows; i++) {
      initialBoard[i] = []; 
      for (let j = 0; j < ncols; j++) {
          initialBoard[i][j] = trueFalse(chanceLightStartsOn); 
      }
  }
    // console.log(initialBoard);
    return initialBoard;
  }

  useEffect(() => {
    setBoard(createBoard());
  }, [nrows, ncols]); // Dependencies array, re-run this effect when nrows or ncols change


  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] == true) {
          return false;
        }

      }  
    }
    return true;
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // TODO: Make a (deep) copy of the oldBoard
      const deepCopyBoard = board.map(row => [...row]);

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, deepCopyBoard); 
      flipCell(y + 1, x, deepCopyBoard); 
      flipCell(y - 1, x, deepCopyBoard); 
      flipCell(y, x + 1, deepCopyBoard); 
      flipCell(y, x - 1, deepCopyBoard); 



      return deepCopyBoard;

      // TODO: return the copy
    });
  }

  // if the game is won, just show a winning msg & render nothing else

  // TODO

  // make table board
  return (
    <>
    {hasWon() ?  <><Overlay></Overlay> <Winner></Winner></>  : ""}


    <table className="Board">
      <tbody>
        {board.map((row, y) => (
          <tr key={y}>
            {row.map((isLit, x) => (
              <Cell
                key={`${y}-${x}`}
                isLit={isLit}
                flipCellsAroundMe={() => flipCellsAround(`${y}-${x}`)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>


  

  );

}

export default Board;
