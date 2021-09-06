import React, { useState } from 'react';

export const Count = () => {
  const [counter, setCounter] = React.useState(0);

  const add = () => {
    setCounter(counter + 1)
  };
  const remove = () => {
    setCounter(counter - 1)
  };
  return { counter, add, remove }
};