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
}