import React from 'react'
import classNames from 'classnames'
import Icon from '../icon'
import './button.css'

const prefixCls = 'one-btn'

type ButtonType = 'default' | 'primary' | 'text'

interface ButtonProps {
  type?: ButtonType
  icon?: string
  disabled?: boolean
  className?: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLElement>
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    type = 'default', // TODO: default props
    icon,
    className,
    children,
  } = props;
  console.log(children, type, icon)

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
    },
    className,
  )

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { disabled, onClick } = props;
    if (disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  }

  return (
    <button
      className={classes}
      onClick={handleClick}
    >
      {icon && <Icon icon={icon} style={{fontSize: 'inherit'}} />}
      {children}
    </button>
  )
}

export default Button
