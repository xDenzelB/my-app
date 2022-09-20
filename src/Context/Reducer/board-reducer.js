/* eslint-disable import/no-anonymous-default-export */
export default (state = [[4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4]], action) => {
  switch (action.type) {
    case 'Update-Board':
      let { forPlayArea, row, idx } = action
      let tempBoard = [...state];
      const activePlayer = row;
      tempBoard[row][idx] = 0;

      for (let i = 0; i < forPlayArea; i++) {
        idx += 1;
        if (idx % 6 === 0) {
          idx = 0;
          row = (row + 1) % 2;
        }
        if ((i === forPlayArea - 1) && (tempBoard[row][idx] === 0 & row == activePlayer)) {
          const oppositeRow = (row + 1) % 2;
          tempBoard[oppositeRow][5 - idx] = 0;
          tempBoard[row][idx] = 0;
        }
        else {
          tempBoard[row][idx] = tempBoard[row][idx] + 1;
        }

      }
      return tempBoard;

    default:
      return state;

  }
}