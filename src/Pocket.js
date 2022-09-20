import React from 'react'

export default function Pocket(props) {
  const styling = {
    display: 'inline-block',
    border: '1px solid black',
    minHeight: '150px',
    width: '150px',
    height: 'inherit',
    textAlign: 'center'
  }
  return (
    <div style={styling} onClick={() => props.onPocketClick(props.id)}>
      {props.count}
    </div>
  )
}
