import Pocket from './Pocket';

function Board(props) {
  const inlineStyle = {
    display: 'inline-block',
    height: '300px',
    verticalAlign: 'top'
  };

  function makePlayRow(rowArray, rowIdx) {
    let rowCopy = rowArray.slice();
    if (rowIdx === 0) {
      rowCopy.reverse();
    }
    return (
      <div key={rowIdx}>
        {
          rowCopy.map((content, idx) => <Pocket count={content} id={`${rowIdx}-${rowIdx === 0 ? rowArray.length - 1 - idx : idx}`} key={`${rowIdx}-${idx}`} onPocketClick={props.onPocketClick} />)
        }
      </div>
    )
  }

  return (
    <div style={inlineStyle}>
      <div id='Cpu-Score' style={inlineStyle}>
        <Pocket count={props.cpuScore} />
      </div>
      <div id='play-area' style={inlineStyle}>
        {
          props.gameBoard.map((playerSide, idx) => {
            return (makePlayRow(playerSide, idx));
          })
        }
      </div>
      <div id='player1-score' style={inlineStyle}>
        <Pocket count={props.player1Score} />
      </div>
    </div>
  )
}