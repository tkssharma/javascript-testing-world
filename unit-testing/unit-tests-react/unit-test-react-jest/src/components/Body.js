import React, { useState } from "react";
const Body = ({title}) => {
    //local state
    const [count, setCount] = useState(0)
    //click event handler for button
    const handleClick = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h1 data-testid="header">{title}</h1>
            <p data-testid="counter">{count}</p>
            <button type="button" onClick={handleClick} data-testid="button">Tap Me</button>
        </div>
    )
}

export default Body;