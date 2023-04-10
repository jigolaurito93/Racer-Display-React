import React from 'react'

export default function Button({ color, step, handleClick }) {


  return (
    <button className={`btn btn-${color} m-4` } onClick={(e) => handleClick(step)}>+{step}</button>
  )
}
