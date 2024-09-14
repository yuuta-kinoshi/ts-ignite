import React from 'react'

import style from './Button.module.css'

interface ButtonProps {
  text?: string;
  func?: () => void;
  iconleft?: React.ReactNode;
  iconright?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ text, func, iconleft, iconright, disabled }: ButtonProps) => {
  return (
      <button disabled={disabled} className={style.button} onClick={func}>{iconleft} {text} {iconright}</button>  
  )
}

export default Button
