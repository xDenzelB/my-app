import React from 'react'

export default function Score(props) {
  return (
    <div>
      <h2>Player score: {props.player1Score} </h2>
      <h2>CPU score: {props.cpuScore} </h2>
    </div>
  )
}
