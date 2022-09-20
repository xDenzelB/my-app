import { useState } from 'react';
import Board from './Board';
import Score from './Score';
import { connect } from 'react-redux';

function Game(props) {
  let [playerTurn, changeTurn] = useState(1);

  function handlePocketClick(id) {
    let tempBoard = [...props.board];
    let row = Number(id.substring(0, 1));
    if (playerTurn === row) {
      let idx = Number(id.substring(id.indexOf('-') + 1));
      const pocketValue = tempBoard[row][idx];
      const removedForScore = Math.floor((idx + pocketValue + 6) / 12);
      const forPlayArea = pocketValue - removedForScore;
      updateScore(tempBoard, forPlayArea, idx, row)
      updateBoard(forPlayArea, idx, row)
      updatePlayerTurn(idx, pocketValue, row)

    }
  }

  function updatePlayerTurn(idx, pocketValue, row) {
    if ((pocketValue + idx + 6) % 12 !== 0) {
      changeTurn((row + 1) % 2);
    }
  }

  function updateBoard(forPlayArea, idx, row) {
    const { dispatch } = props
    const action = {
      type: 'Update-Board',
      forPlayArea: forPlayArea,
      idx: idx,
      row: row
    }
    dispatch(action);
  }

  function updateScore(tempBoard, forPlayArea, idx, row) {
    const { dispatch } = props
    const action = {
      type: 'Update-Score',
      tempBoard: tempBoard,
      forPlayArea: forPlayArea,
      idx: idx,
      row: row
    }
    dispatch(action);
  }

  return (
    <div>
      <Board gameBoard={props.board} player1Score={props.scores.player1Score} cpuScore={props.scores.cpuScore} onPocketClick={handlePocketClick} />
      <Score player1Score={props.scores.player1Score} cpuScore={props.scores.cpuScore} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    board: state.board,
    scores: state.scores
  }
}
export default connect(mapStateToProps)(Game)