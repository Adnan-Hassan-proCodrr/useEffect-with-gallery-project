import React from 'react'

const Button = ({btnText,onClick}) => {
  return (
    <button onClick={onClick}>
      {btnText}
    </button>
  )
}

export default Button;
