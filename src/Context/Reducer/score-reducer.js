// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { player1Score: 0, cpuScore: 0 }, action) => {
  switch (action.type) {
    case 'Update-Score':
      let { tempBoard, forPlayArea, row, idx } = action
      const activePlayer = row;
      const pocketValue = tempBoard[row][idx];
      let scoreValue = Math.floor((idx + pocketValue + 6) / 12);
      let { player1Score, cpuScore } = state;

      for (let i = 0; i < forPlayArea; i++) {
        idx += 1;
        if (idx % 6 === 0) {
          idx = 0;
          row = (row + 1) % 2;
        }
        if ((i === forPlayArea - 1) && (tempBoard[row][idx] === 0 && row == activePlayer)) {
          const oppositeRow = (row + 1) % 2;
          const valueToSteal = tempBoard[oppositeRow][5 - idx];
          scoreValue += valueToSteal + 1;
        }
      }
      if (activePlayer === 0) {
        cpuScore = cpuScore + scoreValue;
      } else {
        player1Score = player1Score + scoreValue;
      }
      return {
        player1Score: player1Score,
        cpuScore: cpuScore
      };
    default:
      return state;
  }
}