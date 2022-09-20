export defualt(state = [[4, 4, 4, 4, 4, 4], [4, 4, 4, 4, 4, 4]], action) => {
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
      }
  }
}