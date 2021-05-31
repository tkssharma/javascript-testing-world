import React, { useState } from "react";
const Hello = ({title}) => {

  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1 data-testid="title">{title}</h1>
      <p data-testid="count">{count}</p>
      <button  data-testid="button"type="button" onClick={handleClick} >Tap Me</button>
    </div>
  )
}

export default Hello;